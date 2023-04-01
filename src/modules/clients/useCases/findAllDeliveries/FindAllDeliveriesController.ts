import { Request, Response } from "express";
import { FindAllDeliveriesUseCase } from "./FindAllDeliveriesUseCase";



export class FindAllDeliveriesController {
  async handle(request: Request, response: Response) {
    const { id_client } = request;
    const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase();
    try {
      const result = await findAllDeliveriesUseCase.execute(+id_client);
      response.json(result);
    } catch (error) {
      throw new Error(`Handle returns: ${error}`);
    }
  }
}
