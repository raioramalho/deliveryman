import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";



export class CreateDeliveryController {
  async handle(request: Request, response: Response) {
    const { item_name } = request.body;
    const createDeliveryUseCase = new CreateDeliveryUseCase();
    try {
      const result = await createDeliveryUseCase.execute({
        item_name,
        id_client: +request.id_client,
      });
      return response.json(result);
    } catch (error) {
      throw new Error(`Handle returns: ${error}`);
    }
  }
}
