import express from "express";
import managementRouter from "./doctor-management/shell/framework/index";
import { CreateAppointmentFramework } from "./AppointmentBooking/presentation/CreateAppointment/CreateAppointmentFramework";
import { GetAvailableSlotsFramework } from "./AppointmentBooking/presentation/GetAvailableSlots/GetAvailableSlotsFramework";
import { EventBus } from "./shared/EventBus";
import { NotificationApi } from "./Notification/internal/NotificationApi";
import { AppointmentConfirmedEventHandler } from "./AppointmentConfirmation/AppointmentConfirmedEventHandler";
import { AppointmentPublisher } from "./AppointmentBooking/infrastructure/AppointmentPublisher";

export async function main(): Promise<void> {
 const app = express();
 app.use(express.json());

 // Shared event bus
 const eventBus = new EventBus();
 const notificationApi = new NotificationApi();
 new AppointmentConfirmedEventHandler(eventBus, notificationApi);

 CreateAppointmentFramework.bind(app, eventBus);
 GetAvailableSlotsFramework.bind(app);
 app.use("/management", managementRouter);

 const port = 3000;

 app.listen(port, () => {
  console.log(`Server running on port ${port}`);
 });
}

main();
