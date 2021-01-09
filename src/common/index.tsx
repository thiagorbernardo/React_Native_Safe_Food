export const removeMaskFromPrice = (price: string) => {
  const regex: RegExp = /R\$ (\d+),(\d+)/;

  const match = price.match(regex);
  if (!match) throw 5000;

  const result = `${match[1]}.${match[2]}`;

  return +result;
};
