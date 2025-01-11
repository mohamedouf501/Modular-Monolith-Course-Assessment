import { Appointment } from "../domain/Appointment";
import { IAppointmentRepository } from "../application/IAppointmentRepository";
import { PrismaClient } from "@prisma/client";

export class PrismaAppointmentRepository implements IAppointmentRepository {
 constructor(private readonly _client: PrismaClient) {}
 public async save(appointment: Appointment): Promise<boolean> {
  try {
   await this._client.appointment.create({
    data: appointment,
   });
   return true;
  } catch (err) {
   console.log(err);
   return false;
  }
 }

 public async find(id: string): Promise<Appointment | null> {
  return this._client.appointment.findUnique({ where: { Id: id } }) ?? null;
 }
}
