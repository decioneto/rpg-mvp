export function getModifier(attributeValue: number) {
  const value = Math.floor((attributeValue - 10) / 2);
  return value > 0 ? `+${value}` : value;
}
