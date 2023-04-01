import { sign } from "jsonwebtoken";
import { compare } from 'bcrypt';
import { prisma } from "../../../database/prismaClient";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    //Receber username, password.
    //Verificar credênciais
    const checkDeliveryman = await prisma.deliveryman.findFirst({
      where: {
        username
      }
    });

    if(!checkDeliveryman) {
      throw new Error('Invalid  credêntials! [01]');
    }

    //Validar password
    const passwordMatch = await compare(password, checkDeliveryman.password);

    if(!passwordMatch) {
      throw new Error('Invalid credêntials! [02]');
    }

    //Gerar o token JSON
    try {
      const token = sign({username}, 'raio2023-deliveryman', {
        subject: `${checkDeliveryman.id}`,
        expiresIn: '1d'
      });
      return token;
    } catch (error) {
      throw new Error(`Token returns: ${error}`);
    }
  }
}
