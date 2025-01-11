import { Appointment } from '../domain/appointment.entity';
import { ManagementRepositoryPort } from '../ports/management.repository.port';
 
export class ManagementService {
  constructor(private readonly repository: ManagementRepositoryPort) {}
  public async getUpcomingAppointments(): Promise<Appointment[]> {
    const all = await this.repository.findAllAppointments();
    const upcoming = all.filter(
      (appt) => !appt.isCompleted && !appt.isCanceled
    );
    return upcoming;
  }

  public async markAppointmentAsCompleted(appointmentId: string): Promise<Appointment> {
    const appointment = await this.repository.findAppointmentById(appointmentId);
    if (!appointment) {
      throw new Error('Appointment not found');
    }

    appointment.isCompleted = true;
    await this.repository.saveAppointment(appointment);
    return appointment;
  }

  public async cancelAppointment(appointmentId: string): Promise<Appointment> {
    const appointment = await this.repository.findAppointmentById(appointmentId);
    if (!appointment) {
      throw new Error('Appointment not found');
    }

    appointment.isCanceled = true;
    await this.repository.saveAppointment(appointment);
    return appointment;
  }
}
