import Yup from 'lib/validation'

const nameRegex = /^[A-ZãõâêîôûÃÕÂÊÎÔÛáéíóúÁÉÍÓÚa-z\s]+$/
const phoneRegex = /^\(?[1-9]{2}\)\s?9?\d{4}-?\d{4}$/

const schema = Yup.object().shape({
  firstName:
    Yup.string()
      .min(2)
      .max(40)
      .matches(nameRegex, 'Nome inválido')
      .required(),
  lastName:
    Yup.string()
      .min(2)
      .max(100)
      .matches(nameRegex, 'Sobrenome inválido')
      .required(),
  phone:
    Yup.string()
      .matches(phoneRegex, 'Telefone inválido, tente o formato DDD + Número')
      .required(),
  email:
    Yup.string()
      .email('Email inválido')
      .required(),
  password:
    Yup.string()
      .min(4)
      .max(15)
      .required()
})

export default schema
