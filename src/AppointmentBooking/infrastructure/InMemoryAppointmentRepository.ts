import { Appointment } from "../domain/Appointment";
import { IAppointmentRepository } from "../application/CreateAppointmentUseCase/IAppointmentRepository";

export class InMemoryAppointmentRepository implements IAppointmentRepository {
 private readonly _appointments: Appointment[] = [];

 public async save(appointment: Appointment): Promise<boolean> {
  this._appointments.push(appointment);
  return true;
 }

 public async find(id: string): Promise<Appointment | null> {
  return this._appointments.find((x) => x.Id === id) ?? null;
 }
}
