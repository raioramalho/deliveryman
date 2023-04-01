import { Request, Response } from "express";
import { FindAllDeliverymanDeliveryUseCase } from "./FindAllDeliverymanDeliveryUseCase";



export class FindAllDeliverymanDeliveryController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const findAllDeliverymanDeliveryUseCase = new FindAllDeliverymanDeliveryUseCase();
    try {
      const result = await findAllDeliverymanDeliveryUseCase.execute(+id_deliveryman);
      response.json(result);
    } catch (error) {
      throw new Error(`Handle returns: ${error}`)
    }
  }
}
