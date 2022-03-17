import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMassageController";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages", new CreateMessageController().handle);

export { router };
