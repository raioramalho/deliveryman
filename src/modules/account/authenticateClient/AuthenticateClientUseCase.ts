import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";
import { compare } from 'bcrypt';

interface IAuthenticateCLient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateCLient) {
    //Receber username, password.
    //Verificar credênciais
    const checkClient = await prisma.clients.findFirst({
      where: {
        username
      }
    });

    if(!checkClient) {
      throw new Error('Invalid  credêntials! [01]');
    }

    //Validar password
    const passwordMatch = await compare(password, checkClient.password);

    if(!passwordMatch) {
      throw new Error('Invalid credêntials! [02]');
    }

    //Gerar o token JSON
    try {
      const token = sign({username}, 'raio2023-client', {
        subject: `${checkClient.id}`,
        expiresIn: '1d'
      });
      return token;
    } catch (error) {
      throw new Error(`Token returns: ${error}`);
    }
  }
}
