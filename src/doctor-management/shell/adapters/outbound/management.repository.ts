import { randomUUID } from 'crypto';

import { Appointment } from '../../../core/domain/appointment.entity';
 import { ManagementRepositoryPort } from '../../../core/ports/management.repository.port';

export class ManagementRepository implements ManagementRepositoryPort {
  private static appointments: Appointment[] = [];

  public async findAllAppointments(): Promise<Appointment[]> {
    return ManagementRepository.appointments;
  }

  public async findAppointmentById(appointmentId: string): Promise<Appointment | null> {
    const appt = ManagementRepository.appointments.find((a) => a.id === appointmentId);
    return appt || null;
  }

  public async saveAppointment(appointment: Appointment): Promise<void> {
    const index = ManagementRepository.appointments.findIndex((a) => a.id === appointment.id);

    if (!appointment.id) {
      appointment.id =  randomUUID()
      ManagementRepository.appointments.push(appointment);
      return;
    }

    if (index !== -1) {
      ManagementRepository.appointments[index] = appointment;
    } else {
      ManagementRepository.appointments.push(appointment);
    }
  }

  public static seed(appointments: Appointment[]) {
    this.appointments = appointments;
  }
}
