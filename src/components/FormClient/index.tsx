import React from 'react'
import * as S from './styles'
import axios from 'axios'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import ButtonSubmit from 'components/ButtonSubmit'
import { useHistory } from 'react-router-dom'
import schema from './formSchema'
import { normalizeCnpjNumber, normalizeCepNumber, normalizeUf, normalizeAddressNumber, normalizeNames } from 'utils/inputMasks'


interface IFormInputs {
  cnpj: string
  tradingName: string
  companyName: string
  cep: string
  address: string
  number: string
  complement?: string,
  district: string,
  city: string,
  uf: string

}




const FormClient = () => {

  const history = useHistory()

  const { register, handleSubmit, setValue, formState: { errors }, setError, clearErrors } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  })

  if (sessionStorage.getItem('form-data-1')) {
    const formData1 = JSON.parse(sessionStorage.getItem('form-data-1') as string)
    setValue('cnpj', formData1.cnpj)
    setValue('tradingName', formData1.tradingName)
    setValue('companyName', formData1.companyName)
    setValue('cep', formData1.cep)
    setValue('address', formData1.address)
    setValue('number', formData1.number)
    setValue('complement', formData1.complement)
    setValue('district', formData1.district)
    setValue('city', formData1.city)
    setValue('uf', formData1.uf)
  }

  async function getCnpjInfo(cnpj: string) {
    console.log(cnpj)
    console.log('aaaaaaaaa')
    const cleanedCnpj = cnpj.replace(/[./-]+/g, '')

    const corsDemo = process.env.NODE_ENV === 'development' ? 'https://cors-anywhere.herokuapp.com/' : ''

    const response = await axios.get(`${corsDemo}www.receitaws.com.br/v1/cnpj/${cleanedCnpj}`)

    if(response.data.status === 'ERROR') {
      setError('cnpj', {
        type: 'manual',
        message: response.data.message || 'Ocorreu um erro inesperado.'
      }, { shouldFocus: true})
    } else {
      clearErrors('cnpj')
      const {fantasia: tradingName, nome: companyName, cep, numero: number} = response.data

      const cleanedCep1 = cep.replace(/[.]/g, '')
      setValue('tradingName', tradingName)
      setValue('companyName', companyName)
      setValue('cep', cleanedCep1)
      setValue('number', number)

      const cleanedCep2 = cep.replace(/[.-]/g, '')
      const responseCep = await axios.get(`https://viacep.com.br/ws/${cleanedCep2}/json/`);
      if(responseCep.data.erro) {
        setError('cep', {
          type: 'manual',
          message: 'CEP Inválido'},
          {
            shouldFocus: true
          })
      } else {
        clearErrors('cep')
        const {localidade: city, logradouro: address, bairro: district, uf, complemento: complement } = responseCep.data;
        setValue('address', address)
        setValue('complement', complement)
        setValue('district', district)
        setValue('city', city)
        setValue('uf', uf)
      }
    }

  }

  const onSubmit: SubmitHandler<IFormInputs> = (
    {
      cnpj,
      tradingName,
      companyName,
      cep,
      address,
      number,
      complement,
      district,
      city,
      uf
    }) => {

    const formData1 = JSON.stringify({
      cnpj,
      tradingName,
      companyName,
      cep,
      address,
      number,
      complement,
      district,
      city,
      uf
    })

    sessionStorage.setItem('form-data-1', formData1)

    history.push('/registro/passo-2')
  }

  return (
    <S.Form
      onSubmit={handleSubmit(onSubmit)}
      noValidate>
      <S.Fieldset>
        <S.Legend>Preencha com as informações de sua empresa</S.Legend>

        <S.InputBlock>

          <S.Input
            id="cnpj"
            type="text"
            inputMode="numeric"
            placeholder=" "
            {...register('cnpj')}
            onChange={(event) => {
              const { value } = event.target
              event.target.value = normalizeCnpjNumber(value)
              if(event.target.value.length === 18) {
                getCnpjInfo(event.target.value)
              }
            }}
          />
          <S.Label htmlFor="cnpj">CNPJ:</S.Label>
          <S.ErrorMessage>{errors.cnpj?.message}</S.ErrorMessage>
        </S.InputBlock>

        <S.InputBlock>

          <S.Input
            id="companyName"
            type="text"
            placeholder=" "
            {...register('companyName')}
            autoComplete="organization"
            onChange={({ target }) =>
              target.value = normalizeNames(target.value)
            }

          />
          <S.Label htmlFor="companyName">Nome Fantasia:</S.Label>
          <S.ErrorMessage>{errors.companyName?.message}</S.ErrorMessage>
        </S.InputBlock>

        <S.InputBlock>

          <S.Input
            id="tradingName"
            type="text"
            placeholder=" "
            {...register('tradingName')}
            onChange={({ target }) =>
              target.value = normalizeNames(target.value)
            }

          />
          <S.Label htmlFor="tradingName">Razão Social:</S.Label>
          <S.ErrorMessage>{errors.tradingName?.message}</S.ErrorMessage>
        </S.InputBlock>

        <S.InputBlock>

          <S.Input
            id="cep"
            type="text"
            inputMode="numeric"
            placeholder=" "
            {...register('cep')}
            autoComplete="postal-code"

            onChange={ async ({ target }) =>
            {
              target.value = normalizeCepNumber(target.value)

            }
            }


          />
          <S.Label htmlFor="cep">CEP:</S.Label>
          <S.ErrorMessage>{errors.cep?.message}</S.ErrorMessage>
        </S.InputBlock>

        <S.AddressBlock>
          <S.InputAddressDoubleBlock>
            <S.InputAddressStreet>

              <S.Input
                id="address"
                type="text"
                placeholder=" "
                {...register('address')}
                onChange={({ target }) =>
                  target.value = normalizeNames(target.value)
                }
              />
              <S.Label htmlFor="address">Endereço:</S.Label>
              <S.ErrorMessage>{errors.address?.message}</S.ErrorMessage>
            </S.InputAddressStreet>


            <S.InputAddressNumber>

              <S.Input
                id="number"
                type="text"
                placeholder=" "
                {...register('number')}
                onChange={({ target }) =>
                  target.value = normalizeAddressNumber(target.value)
                }
              />
              <S.Label htmlFor="number">Número:</S.Label>
              <S.ErrorMessage>{errors.number?.message}</S.ErrorMessage>
            </S.InputAddressNumber>
          </S.InputAddressDoubleBlock>
          <S.InputAddressBlock>

            <S.Input
              id="complement"
              type="text"
              placeholder=" "
              {...register('complement')}
            />
            <S.Label htmlFor="complement">Complemento:</S.Label>
            <S.ErrorMessage>{errors.complement?.message}</S.ErrorMessage>
          </S.InputAddressBlock>

          <S.InputAddressBlock>

            <S.Input
              id="district"
              type="text"
              placeholder=" "
              {...register('district')}
              onChange={({ target }) =>
                target.value = normalizeNames(target.value)
              }
            />
            <S.Label htmlFor="district">Bairro:</S.Label>
            <S.ErrorMessage>{errors.district?.message}</S.ErrorMessage>
          </S.InputAddressBlock>
          <S.InputAddressDoubleBlock>
            <S.InputAddressCity>

              <S.Input
                id="city"
                type="text"
                placeholder=" "
                {...register('city')}
              />
              <S.Label htmlFor="city">Cidade:</S.Label>
              <S.ErrorMessage>{errors.city?.message}</S.ErrorMessage>
            </S.InputAddressCity>

            <S.InputAddressUf>
              <S.Input
                id="uf"
                type="text"
                placeholder=" "
                {...register('uf')}
                onChange={({ target }) =>
                  target.value = normalizeUf(target.value)
                }
              />
              <S.Label htmlFor="uf">UF:</S.Label>

              <S.ErrorMessage>{errors.uf?.message}</S.ErrorMessage>
            </S.InputAddressUf>
          </S.InputAddressDoubleBlock>
        </S.AddressBlock>
        <ButtonSubmit label="Avançar" />
      </S.Fieldset>
    </S.Form>)
}

export default FormClient
