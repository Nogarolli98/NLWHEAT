import prismaClient from "../prisma";

class GetLast3MassageService {
  async execute() {
    const messages = await prismaClient.message.findFirst({
      take: 3,
      orderBy: {
        create_at: "desc",
      },
      include: {
        user: true,
      },
    });

    // SELECT * FROM MESSAGES LIMIT 3 ORDER BY CREATED_AT DESC

    return messages;
  }
}

export { GetLast3MassageService };
