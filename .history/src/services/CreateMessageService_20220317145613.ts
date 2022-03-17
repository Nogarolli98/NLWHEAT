import prismaClient from "../prisma";
import { io } from "../app";

class CreateMassageService {
  async execute(text: string, user_id: string) {
    const message = await prismaClient.message.create({
      data: {
        text,
        user_id,
      },
      include: {
        user: true,
      },
    });

    const infoWS = {
      text: message.text,
      user_id: message,
    };

    io.emit("new_message");

    return message;
  }
}

export { CreateMassageService };
