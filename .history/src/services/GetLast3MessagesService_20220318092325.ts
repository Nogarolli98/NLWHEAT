import prismaClient from "../prisma";

class GetLast3MassageService {
  async execute() {
      const messages = await prismaClient.message.findFirst({
        take:3,
        orderBy: {
            create_at: "desc"
        },
        include {
            user: true
        }
      })
  }
}

export { GetLast3MassageService };
