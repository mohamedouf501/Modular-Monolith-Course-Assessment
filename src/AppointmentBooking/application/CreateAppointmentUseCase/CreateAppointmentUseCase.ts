import { Appointment } from "../../domain/Appointment";
import { IUseCase } from "../../../shared/IUseCase";
import { IAppointmentRepository } from "./IAppointmentRepository";
import { ICreateAppointmentDto } from "../CreateAppointmentUseCase/ICreateAppointmentDto";
import { ICreateAppointmentResult } from "../CreateAppointmentUseCase/ICreateAppointmentResult";
import { IEventPublisher } from "../IEventPublisher";

export class CreateAppointmentUseCase
 implements IUseCase<ICreateAppointmentDto, ICreateAppointmentResult>
{
 public constructor(
  private readonly _appointmentRepo: IAppointmentRepository,
  private readonly _eventPublisher: IEventPublisher
 ) {}

 public async execute(
  input: ICreateAppointmentDto
 ): Promise<ICreateAppointmentResult> {
  const appointment = new Appointment(
   input.patientId,
   input.patientName,
   input.slotId
  );

  const result = await this._appointmentRepo.save(appointment);

  if (!result) {
   throw new Error("Could not save appointment.");
  }

  this._eventPublisher.publish(
   {
    patientName: appointment.PatientName,
    appointmentTime: result.Slot?.Time,
    doctorName: result.Slot?.DoctorName,
   },
   "appointmentConfirmed"
  );

  return {
   appointmentId: appointment.Id,
  };
 }
}
