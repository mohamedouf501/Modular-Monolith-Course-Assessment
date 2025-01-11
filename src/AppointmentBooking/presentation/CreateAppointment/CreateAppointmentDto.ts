import { ICreateAppointmentResult } from "../../application/CreateAppointmentUseCase/ICreateAppointmentResult";

export class CreateAppointmentDto implements ICreateAppointmentResult {
 constructor(public readonly appointmentId: string) {}
}
