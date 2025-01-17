import { Appointment } from "../../domain/Appointment";

export interface IAppointmentRepository {
 find(id: string): Promise<Appointment | null>;
 save(appointment: Appointment): Promise<Appointment>;
}
