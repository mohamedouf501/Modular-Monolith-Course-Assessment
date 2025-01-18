import { PrismaAppointmentRepository } from "../../infrastructure/PrismaAppointmentRepository";
import { CreateAppointmentUseCase } from "../../application/CreateAppointmentUseCase/CreateAppointmentUseCase";
import { CreateAppointmentController } from "./CreateAppointmentController";
import { PrismaClient } from "@prisma/client";
import { AppointmentPublisher } from "../../infrastructure/AppointmentPublisher";
import { IEventBus } from "../../../shared/IEventBus";

export class AppointmentWebService {
 static createController(eventBus: IEventBus): CreateAppointmentController {
  const appointmentPublisher = new AppointmentPublisher(eventBus);
  const repo = new PrismaAppointmentRepository(new PrismaClient());
  const useCase = new CreateAppointmentUseCase(repo, appointmentPublisher);
  return new CreateAppointmentController(useCase);
 }
}
