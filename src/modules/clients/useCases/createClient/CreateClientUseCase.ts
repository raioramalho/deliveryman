import { Clients } from '@prisma/client';
import { prisma } from '../../../../database/prismaClient';
import { hashSync } from 'bcrypt';

interface ICreateClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({username, password}: ICreateClient): Promise<Clients> {
    //Validar se o usuário existe
    const checkExist = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive"
        }
      },
    });

    if(checkExist) {
      throw new Error('Client already exists');
    }

    //Hashear o password
    const hashPassword = await hashSync(password, 10);

    //Salvar o client
    try {
      return await prisma.clients.create({
        data: {
          username,
          password: hashPassword,
        }
      });
    } catch (error) {
      throw new Error(`Prisma returns ${error}`);
    }
  }
}
