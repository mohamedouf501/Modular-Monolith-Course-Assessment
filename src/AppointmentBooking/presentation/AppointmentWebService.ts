import { InMemoryAppointmentRepository } from "../infrastructure/InMemoryAppointmentRepository";
import { PrismaAppointmentRepository } from "../infrastructure/PrismaAppointmentRepository";
import { CreateAppointmentUseCase } from "../application/CreateAppointmentUseCase";
import { CreateAppointmentController } from "./CreateAppointmentController";
import { PrismaClient } from "@prisma/client";

export class AppointmentWebService {
 static createController(): CreateAppointmentController {
  const repo = new PrismaAppointmentRepository(new PrismaClient());
  const useCase = new CreateAppointmentUseCase(repo);
  return new CreateAppointmentController(useCase);
 }
}
