import { prisma } from "../../../../database/prismaClient";

interface ICreateDelivery {
  item_name: string;
  id_client: number;
}

export class CreateDeliveryUseCase {
  async execute({item_name, id_client}: ICreateDelivery) {
    try {
      return await prisma.deliveries.create({
        data: {
          item_name,
          id_client
        }
      });
    } catch (error) {
      throw new Error(`Execute returns: ${error}`)
    }
  }
}
