import { Application } from "express";
import { AppointmentWebService } from "./AppointmentWebService";
import { IEventBus } from "../../../shared/IEventBus";

export class CreateAppointmentFramework {
 public static bind(app: Application, eventBus: IEventBus): void {
  const controller = AppointmentWebService.createController(eventBus);
  app.post("/appointments", controller.handle.bind(controller));
 }
}
