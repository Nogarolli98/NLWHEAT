import { Request, Response } from "express";
import { CreateMassageService } from "../services/CreateMessageService";
import { io } from "../app";

class CreateMessageController {
  async handle(request: Request, response: Response) {
    const { message } = request.body;
    const { user_id } = request;

    const service = new CreateMassageService();

    const result = await service.execute(message, user_id);

    return response.json(result);
  }
}

export { CreateMessageController };
