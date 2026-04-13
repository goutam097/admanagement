export const calculateNumberInK = (value: number): string | number => {
  if (!value || value < 1000) return value;

  const valueInK = Math.floor(value / 1000);
  const remainder = value % 1000;

  return remainder < 100
    ? `${valueInK}K`
    : `${valueInK}.${Math.floor(remainder / 100)}K`;
};
