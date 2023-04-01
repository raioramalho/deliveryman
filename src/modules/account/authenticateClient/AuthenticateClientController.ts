import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";



export class AuthenticateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

  const authenticateClientUseCase = new AuthenticateClientUseCase();
  try {
    const result = await authenticateClientUseCase.execute({
      username,
      password
    });
    return response.json(result);
  } catch (error) {
    throw new Error(`Execute returns: ${error}`)
  }
  }
}
