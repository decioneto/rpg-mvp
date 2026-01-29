import { AttributeCode, AttributeValue } from "../components/Attributes";

export function distributeAttributes(
  allAttributes: AttributeCode[],
  priorityAttributes: AttributeCode[],
  values: number[],
): AttributeValue[] {
  const sortedValues = [...values].sort((a, b) => b - a);
  const result: AttributeValue[] = [];
  let valueIndex = 0;

  priorityAttributes.forEach((attr) => {
    result.push({
      attribute: attr,
      value: sortedValues[valueIndex],
    });
    valueIndex++;
  });

  allAttributes
    .filter((attr) => !priorityAttributes.includes(attr))
    .forEach((attr) => {
      result.push({
        attribute: attr,
        value: sortedValues[valueIndex],
      });
      valueIndex++;
    });

  return result;
}
