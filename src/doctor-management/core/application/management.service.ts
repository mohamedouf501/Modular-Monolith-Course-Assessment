import { Appointment } from "../domain/appointment.entity";
import { ManagementRepositoryPort } from "../ports/management.repository.port";

export class 

  
  ManagementService {
  constructor(private readonly repository: ManagementRepositoryPort) {}
  public async getUpcomingAppointments(): Promise<Appointment[]> {
    const all = await this.repository.findAllAppointments();
    const upcoming = all.filter(
      (appt) => appt.status === "scheduled" && appt.reservedAt > new Date()
    );
    return upcoming;
  }

  public async markAppointmentAsCompleted(
    appointmentId: string
  ): Promise<Appointment> {
    const appointment = await this.repository.findAppointmentById(
      appointmentId
    );
    if (!appointment) {
      throw new Error("Appointment not found");
    }

    appointment.status = "completed";
    await this.repository.saveAppointment(appointment);
    return appointment;
  }

  public async cancelAppointment(appointmentId: string): Promise<Appointment> {
    const appointment = await this.repository.findAppointmentById(
      appointmentId
    );
    if (!appointment) {
      throw new Error("Appointment not found");
    }

    appointment.status = "cancelled";
    await this.repository.saveAppointment(appointment);
    return appointment;
  }
}
