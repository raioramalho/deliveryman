import { Request, Response } from "express";
import { FindAllAvailableUseCase } from "./FindAllAvailableUseCase";



export class FindAllAvailableController {
  async handle(request: Request, response: Response) {
    const findAllAvailableUseCase = new FindAllAvailableUseCase();
    try {
      const deliveries = await findAllAvailableUseCase.execute();
      response.json(deliveries);
    } catch (error) {
      throw new Error(`Handle error: ${error}`);
    }
  }
}
