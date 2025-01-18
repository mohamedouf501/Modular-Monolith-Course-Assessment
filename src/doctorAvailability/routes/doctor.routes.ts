import { Application } from "express";
import { DoctorController } from "../controller/doctorController";
import { DoctorService } from "../service/doctorService";
import { DoctorRepository } from "../repository/doctorRepository";
import { validateSlot } from "../middleware/validateSlot";

export class DoctorRoutes {
  public static routes(
    app: Application,
    doctorController: DoctorController
  ): void {
    app.get("/slots", doctorController.getSlots.bind(doctorController));
    app.post(
      "/slots",
      validateSlot,
      doctorController.addSlot.bind(doctorController)
    );
  }
}

// Initialize dependencies and pass them to the routes
const doctorRepository = new DoctorRepository();
const doctorService = new DoctorService(doctorRepository);
const doctorController = new DoctorController(doctorService);

export const doctorRoutes = (app: Application): void => {
  DoctorRoutes.routes(app, doctorController);
};
