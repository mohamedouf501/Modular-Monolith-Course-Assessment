import { ICreateAppointmentResult } from "../application/ICreateAppointmentResult";

export class CreateAppointmentDto implements ICreateAppointmentResult {
 constructor(public readonly appointmentId: string) {}
}
