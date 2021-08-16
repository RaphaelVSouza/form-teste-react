import React from 'react'
import * as S from './styles'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from './formSchema'
import ButtonSubmit from 'components/ButtonSubmit'
import ButtonBack from 'components/ButtonBack'
import { normalizeEmails, normalizeNames, normalizePhoneNumber } from 'utils/inputMasks'


interface IFormInputs {
  firstName: string
  lastName: string
  phone: string
  email: string
  password: string

}

const FormUser = () => {
  const history = useHistory();
  let formData1 = sessionStorage.getItem('form-data-1')
  if (!formData1) {
    history.push('/registro/passo-1')
  }

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  })

  const handleBack = () => {
    history.push('/registro/passo-1')
  }

  const onSubmit: SubmitHandler<IFormInputs> = ({ firstName, lastName, phone, email, password }: IFormInputs) => {
    const formData2 = JSON.stringify({
      firstName,
      lastName,
      phone,
      email,
      password
    })

    alert(`Seus dados cadastrados: \n\n Etapa 1:\n${formData1}\n\n Etapa 2:\n${formData2}`)
  }

  return (
    <S.Form
      onSubmit={handleSubmit(onSubmit)}
      noValidate>
      <ButtonBack label="Voltar" type="button" onClick={handleBack} />
      <S.Fieldset>
        <S.Legend>Preencha com suas informações</S.Legend>
        <S.InputBlock>

          <S.Input
            id="fistName"
            type="text"
            {...register('firstName')}
            placeholder=" "
            onChange={({ target }) => {
              target.value = normalizeNames(target.value)
            }}
          />
          <S.Label htmlFor="fistName">Nome:</S.Label>
          <S.ErrorMessage>{errors.firstName?.message}</S.ErrorMessage>
        </S.InputBlock>
        <S.InputBlock>

          <S.Input
            id="lastName"
            type="text"
            {...register('lastName')}
            placeholder=" "
            onChange={({ target }) => {
              target.value = normalizeNames(target.value)
            }}
          />
          <S.Label htmlFor="lastName">Sobrenome:</S.Label>
          <S.ErrorMessage>{errors.lastName?.message}</S.ErrorMessage>
        </S.InputBlock>
        <S.InputBlock>

          <S.Input
            id="phone"
            type="text"
            {...register('phone')}
            placeholder=" "
            onChange={({ target }) => {
              target.value = normalizePhoneNumber(target.value)
            }}
          />
          <S.Label htmlFor="phone">Telefone:</S.Label>
          <S.ErrorMessage>{errors.phone?.message}</S.ErrorMessage>
        </S.InputBlock>
        <S.InputBlock>

          <S.Input
            id="email"
            type="email"
            {...register('email')}
            placeholder=" "
            onChange={({ target }) => {
              target.value = normalizeEmails(target.value)
            }}
          />
          <S.Label htmlFor="email">Email:</S.Label>
          <S.ErrorMessage>{errors.email?.message}</S.ErrorMessage>
        </S.InputBlock>
        <S.InputBlock>

          <S.Input
            id="password"
            type="password"
            placeholder=" "
            {...register('password')}
          />
          <S.Label htmlFor="password">Senha:</S.Label>
          <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage>
        </S.InputBlock>

        <ButtonSubmit label="Finalizar cadastro" />
      </S.Fieldset>
    </S.Form>)
}

export default FormUser
