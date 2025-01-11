import express from "express";
import { CreateAppointmentFramework } from "./AppointmentBooking/presentation/CreateAppointmentFramework";
import managementRouter from './doctor-management/shell/framework/index'

export async function main(): Promise<void> {
 const app = express();

 app.use(express.json());

 await CreateAppointmentFramework.bind(app);
 app.use('/management', managementRouter);

 const port = 3000;

 app.listen(port, () => {
  console.log(`Server running on port ${port}`);
 });
}

main();
