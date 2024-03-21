export function currencyFormatter({
  currency,
  value,
}: {
  currency: string;
  value: number;
}) {
  const locale = (navigator && navigator.language) || 'en-US';
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    minimumFractionDigits: 2,
    currency,
  });
  return formatter.format(value).replace(/(\.|,)00$/g, '');
}
