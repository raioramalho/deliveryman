import { prisma } from "../../../../database/prismaClient";

interface IUpdateDeliveryman {
  id_delivery: string;
  id_deliveryman: number;
}

export class UpdateDeliverymanUseCase {
  async execute({id_delivery, id_deliveryman}: IUpdateDeliveryman) {
    try {
      const result = await prisma.deliveries.update({
        where: {
          id: +id_delivery
        },
        data: {
          id_deliveryman
        }
      });

      return result;
    } catch (error) {
      throw new Error(`Execute returns: ${error}`);
    }
  }
}
