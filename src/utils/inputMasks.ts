export function normalizeCnpjNumber(value: string) {

  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{2})(\d)/, '$1.$2')
  value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
  value = value.replace(/\.(\d{3})(\d)/, '.$1/$2')
  value = value.replace(/(\d{4})(\d)/, '$1-$2')

  return value.substr(0, 18);

}

export function normalizeCepNumber(value: string) {
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{5})(\d)/, '$1-$2')

  return value.substr(0, 9)
}

export function normalizePhoneNumber(value: string) {

  value = value.replace(/\D/g, '');

  value = value.replace(/^0/, '');

  value = value.replace(/^(\d{2})(\d{4,5})(\d{4}).*/, '($1) $2-$3');

  return value.substr(0, 15);
}

export function normalizeNames(value: string) {
  value = value.replace(/[!@#$%¨&*\-_)(\][?/\\0-9+-=.}{ªº°;:'"¹²³£¢¬]/g, '');
  value = value.replace(/^\s/, '')

  return value.replace(/(?:^|\s)\S/g, (string => string.toUpperCase()))
}

export function normalizeEmails(value: string) {
  value = value.replace(/[!#$%¨`^&*)(\][?/\\+=}ãõâêîôûÃÕÂÊÎÔÛáéíóúÁÉÍÓÚ{ªº°;:'¹²³£¢¬]/g, '');
  value = value.replace(/^\s/, '')

  return value.replace(/[a-zA-Z]/g, (string => string.toLowerCase()))
}

export function normalizeAddressNumber(value: string) {
  value = value.replace(/\D/g, '');
  return value.substr(0, 6)
}

export function normalizeUf(value: string) {
  value = value.replace(/[!\s@#$%¨&*\-_)(\][?/\\0-9+-=.}{ªº°;:'"¹²³£¢¬]/g, '');
  return value.substr(0, 2).toUpperCase();
}
