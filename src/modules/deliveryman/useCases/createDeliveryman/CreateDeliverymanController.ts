import { Request, Response } from "express";
import { CreateDeliveryManUseCase } from "./CreateDeliverymanUseCase";



export class CreateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;
    const createDeliverymanUseCase = new CreateDeliveryManUseCase();
    try {
      const result = await createDeliverymanUseCase.execute({
        username,
        password,
      });
      return response.json(result);
    } catch (error) {
      throw new Error(`Execute returns: ${error}`)
    }

  }
}
