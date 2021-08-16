import Yup from 'lib/validation'

const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/
const cepRegex = /^\d{5}-\d{3}$/

const schema = Yup.object().shape({
  cnpj:
    Yup
      .string()
      .matches(cnpjRegex, 'aaaaaaaaaaaaaaaaaaaaaa')
      .required(),
  tradingName:
    Yup
      .string()
      .required(),
  companyName:
    Yup
      .string()
      .required(),
  cep:
    Yup
      .string()
      .matches(cepRegex, 'CEP Inválido')
      .required(),
  address:
    Yup
      .string()
      .required(),
  number:
    Yup
      .string()
      .max(6)
      .required(),
  complement:
    Yup
      .string(),
  district:
    Yup
      .string()
      .required(),
  city:
    Yup.string()
      .required(),
  uf:
    Yup
      .string()
      .max(2)
      .required(),
})

export default schema
