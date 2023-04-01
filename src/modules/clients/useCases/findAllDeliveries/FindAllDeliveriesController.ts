import { Request, Response } from "express";
import { FindAllAvailableUseCase } from "../../../deliveries/useCases/findAllAvailable/FindAllAvailableUseCase";



export class FindAllDeliveriesController {
  async handle(request: Request, response: Response) {
    const { id_client } = request;
    const findAllAvailableUseCase = new FindAllAvailableUseCase();
    try {
      const result = await findAllAvailableUseCase.execute();
      response.json(result);
    } catch (error) {
      throw new Error(`Handle returns: ${error}`);
    }
  }
}
