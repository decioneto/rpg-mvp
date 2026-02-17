import { AttributeDTO } from "../dtos/Attributes";
import { getAllAttributes } from "../repositories/AttributesRepository";

type FetchAllAttributesResponse = {
  attributes: AttributeDTO[];
};

export async function fetchAllAttributes(): Promise<FetchAllAttributesResponse> {
  try {
    const attributes = await getAllAttributes();
    const attributesDto: AttributeDTO[] = attributes.map((item) => ({
      id: item.id,
      code: item.code,
      name: item.name,
    }));

    return { attributes: attributesDto };
  } catch (error) {
    console.log(error);
    return { attributes: [] };
  }
}
