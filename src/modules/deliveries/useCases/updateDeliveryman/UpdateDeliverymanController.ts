import { Request, Response } from "express";
import { UpdateDeliverymanUseCase } from "./UpdateDelierymanUseCase";



export class UpdateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id } = request.params;
    const updateDeliverymanUseCase = new UpdateDeliverymanUseCase();
    try {
      const result = await updateDeliverymanUseCase.execute({
        id_delivery: +id,
        id_deliveryman: +id_deliveryman,
      });
      response.json(result);
    } catch (error) {
      throw new Error(`Handle returns: ${error}`)
    }
  }
}
