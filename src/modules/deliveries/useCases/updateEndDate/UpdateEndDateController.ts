import { Request, Response } from "express";
import { UpdateDeliverymanUseCase } from "../updateDeliveryman/UpdateDelierymanUseCase";
import { UpdateEndDateUseCase } from "./UpdateEndDateUseCase";



export class UpdateEndDateController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;
    const updateEndDateUseCase = new UpdateEndDateUseCase();
    try {
      const result = await updateEndDateUseCase.execute(+id_delivery, +id_deliveryman);
      response.json(result);
    } catch (error) {
      throw new Error(`Handle returns: ${error}`);
    }
  }
}
