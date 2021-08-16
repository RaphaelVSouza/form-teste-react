import * as Yup from 'yup'

Yup.setLocale({
  mixed: {
    default: 'Não é válido',
    required: 'Campo obrigatório',
  },
  string: {
    // eslint-disable-next-line
    min: 'Deve ter no mínimo ${min} caractéres',
    // eslint-disable-next-line
    max: 'Deve ter no máximo ${max} caractéres',
  },
});

export default Yup
