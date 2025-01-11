import { Appointment } from "../domain/appointment.entity";

export interface ManagementRepositoryPort {
  findAllAppointments(): Promise<Appointment[]>;
  findAppointmentById(appointmentId: string): Promise<Appointment | null>;
  saveAppointment(appointment: Appointment): Promise<void>;
}
