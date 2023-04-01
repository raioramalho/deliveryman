import { prisma } from "../../../../database/prismaClient";

export class FindAllAvailableUseCase {
  async execute() {
    try {
      return await prisma.deliveries.findMany({
        where: {
          end_at: null,
          id_deliveryman: null,
        }
      });
    } catch (error) {
      throw new Error(`Execute returns: ${error}`);    }
  }
}
