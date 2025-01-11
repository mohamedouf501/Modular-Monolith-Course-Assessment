import { Appointment } from "../../domain/Appointment";
import { IUseCase } from "../../../shared/IUseCase";
import { IAppointmentRepository } from "./IAppointmentRepository";
import { ICreateAppointmentDto } from "../CreateAppointmentUseCase/ICreateAppointmentDto";
import { ICreateAppointmentResult } from "../CreateAppointmentUseCase/ICreateAppointmentResult";

export class CreateAppointmentUseCase
 implements IUseCase<ICreateAppointmentDto, ICreateAppointmentResult>
{
 public constructor(
  private readonly _appointmentRepo: IAppointmentRepository
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

  return {
   appointmentId: appointment.Id,
  };
 }
}
