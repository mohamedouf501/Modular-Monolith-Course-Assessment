import { Application } from "express";
import { AppointmentWebService } from "./AppointmentWebService";

export class CreateAppointmentFramework {
 public static bind(app: Application): void {
  const controller = AppointmentWebService.createController();
  app.post("/appointments", controller.handle.bind(controller));
 }
}
