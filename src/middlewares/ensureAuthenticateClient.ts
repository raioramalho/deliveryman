import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: number;
}

export async function ensureAuthenticateClient(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  //Verificando se há token

  if(!authHeader) {
    return response.status(401).json({
      message: 'Token is missing!',
    });
  }

  //Bearer {TOKEN}
  //[0] Bearer
  //[1] Token
  const token = authHeader.split(' ')[1];

  //Validar token
  try {
    const { sub } = verify(token, 'raio2023-client') as unknown as IPayload;

    request.id_client = sub;

    return next();

  } catch (error) {
    return response.status(401).json({
      message: 'Token is not valid!',
    });
  }
}
