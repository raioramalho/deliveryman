import { Deliveryman } from "@prisma/client";
import { prisma } from '../../../../database/prismaClient';
import { hashSync } from 'bcrypt';

interface ICreateDeliveryman {
  username: string;
  password: string;
}

export class CreateDeliveryManUseCase {
  async execute({username, password}: ICreateDeliveryman): Promise<Deliveryman> {
    //Validar se o usuário existe
    const checkExist = await prisma.deliveryman.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive"
        }
      },
    });

    if(checkExist) {
      throw new Error('Deliveryman already exists');
    }

    //Hashear o password
    const hashPassword = await hashSync(password, 10);

    //Salvar o deliveryman
    try {
      return await prisma.deliveryman.create({
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
