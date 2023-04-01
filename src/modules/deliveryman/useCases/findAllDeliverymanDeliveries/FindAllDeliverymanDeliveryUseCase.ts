import { prisma } from "../../../../database/prismaClient"



export class FindAllDeliverymanDeliveryUseCase {
  async execute(id_deliveryman: number) {
    try {
      const result = await prisma.deliveryman.findMany({
        where: {
          id: id_deliveryman,
        },
        select: {
          id: true,
          username: true,
          deliveries: true,
          _count: true,
        }
      });
      return result;
    } catch (error) {
      throw new Error(`Execute returns: ${error}`)
    }
  }
}
