import { prisma } from "../../../../database/prismaClient";



export class FindAllDeliveriesUseCase {
  async execute(id_client: number) {
    try {
      const deliveries = await prisma.clients.findMany({
        where: {
          id: id_client,
        },
        select: {
          id: true,
          username: true,
          deliveries: true,
          _count: true,
        }
      });

      if(!deliveries) {
        throw new Error('No deliveries founded!')
      }

      return deliveries;
    } catch (error) {
      throw new Error(`Execute returns: ${error}`);
    }
  }
}
