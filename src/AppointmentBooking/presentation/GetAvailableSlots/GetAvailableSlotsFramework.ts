import { Application } from "express";
import { GetAvailableSlotsWebService } from "./GetAvailableSlotsWebService";

export class GetAvailableSlotsFramework {
 public static bind(app: Application): void {
  const controller = GetAvailableSlotsWebService.createController();
  app.get("/available-slots", controller.handle.bind(controller));
 }
}
