import { IEventBus } from "../shared/IEventBus";
import { AppointmentConfirmedDto } from "./AppointmentConfirmedDto";
import { INotificationApi } from "../Notification/INotificationApi";

export class AppointmentConfirmedEventHandler {
 constructor(
  private readonly eventBus: IEventBus,
  private readonly notificationApi: INotificationApi
 ) {
  this.subscribe();
 }

 private subscribe(): void {
  this.eventBus.subscribe(
   "appointmentConfirmed",
   (event: AppointmentConfirmedDto) => this.handle(event)
  );
 }

 private handle(event: AppointmentConfirmedDto): void {
  console.log(`Processing appointment confirmation for ${event.patientName}`);
  this.notificationApi.notify(event, "appointment.confirmed");
 }
}
