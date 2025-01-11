import { InMemoryAppointmentRepository } from "../infrastructure/InMemoryAppointmentRepository";
import { CreateAppointmentUseCase } from "../application/CreateAppointmentUseCase";
import { CreateAppointmentController } from "./CreateAppointmentController";

export class AppointmentWebService {
 static createController(): CreateAppointmentController {
  const repo = new InMemoryAppointmentRepository();
  const useCase = new CreateAppointmentUseCase(repo);
  return new CreateAppointmentController(useCase);
 }
}
