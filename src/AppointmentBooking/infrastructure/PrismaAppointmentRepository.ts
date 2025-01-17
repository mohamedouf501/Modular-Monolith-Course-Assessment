import { Appointment } from "../domain/Appointment";
import { IAppointmentRepository } from "../application/CreateAppointmentUseCase/IAppointmentRepository";
import { PrismaClient } from "@prisma/client";

export class PrismaAppointmentRepository implements IAppointmentRepository {
 constructor(private readonly _client: PrismaClient) {}
 public async save(appointment: Appointment): Promise<Appointment> {
  try {
   const result = await this._client.appointment.create({
    data: {
     SlotId: appointment.SlotId,
     PatientName: appointment.PatientName,
     PatientId: appointment.PatientId,
    },
    include: {
     Slot: true,
    },
   });

   await this._client.slot.update({
    where: {
     Id: appointment.SlotId,
    },
    data: {
     IsReserved: true,
    },
   });

   return result;
  } catch (err) {
   console.log(err);
   throw err;
  }
 }

 public async find(id: string): Promise<Appointment | null> {
  return (
   this._client.appointment.findUnique({
    where: { Id: id },
    include: {
     Slot: true,
    },
   }) ?? null
  );
 }
}
