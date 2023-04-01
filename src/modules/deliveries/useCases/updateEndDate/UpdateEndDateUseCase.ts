import { prisma } from "../../../../database/prismaClient";

export class UpdateEndDateUseCase {
  async execute(id_delivery: number, id_deliveryman:number) {
    try {
      const result = await prisma.deliveries.updateMany({
        where: {
          id: id_delivery,
          id_deliveryman,
        },
        data: {
          end_at: new Date(),
        }
      });

      return await prisma.deliveries.findUnique({
        where:{
          id: id_delivery,
        }
      });
    } catch (error) {
      throw new Error(`Execute returns: ${error}`);
    }
  }
}
