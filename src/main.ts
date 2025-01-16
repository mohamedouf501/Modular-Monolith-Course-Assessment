import express from "express";
import managementRouter from "./doctor-management/shell/framework/index";
import { CreateAppointmentFramework } from "./AppointmentBooking/presentation/CreateAppointment/CreateAppointmentFramework";
import { GetAvailableSlotsFramework } from "./AppointmentBooking/presentation/GetAvailableSlots/GetAvailableSlotsFramework";

export async function main(): Promise<void> {
  const app = express();

  app.use(express.json());

  app.use("/management", managementRouter);
  CreateAppointmentFramework.bind(app);
  GetAvailableSlotsFramework.bind(app);

  const port = 3000;

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

main();
