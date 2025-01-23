import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

import { Appointment } from "../../../core/domain/appointment.entity";
import { ManagementRepositoryPort } from "../../../core/ports/management.repository.port";

export class PrismaManagementRepository implements ManagementRepositoryPort {
  private _client = new PrismaClient();

  public async findAllAppointments(): Promise<Appointment[]> {
    const appointments = await this._client.appointment.findMany({
      include: {
        Slot: true, // Include related slot data if needed
      },
    });

    return appointments.map((appt) => ({
      id: appt.Id,
      slotId: appt.SlotId,
      patientId: appt.PatientId,
      patientName: appt.PatientName,
      status: appt.status,
      reservedAt: appt.ReservedAt,
    }));
  }

  public async findAppointmentById(
    appointmentId: string
  ): Promise<Appointment | null> {
    const appt = await this._client.appointment.findUnique({
      where: { Id: appointmentId },
      include: {
        Slot: true, // Include related slot data if needed
      },
    });

    if (!appt) return null;

    return {
      id: appt.Id,
      slotId: appt.SlotId,
      patientId: appt.PatientId,
      patientName: appt.PatientName,
      status: appt.status,
      reservedAt: appt.ReservedAt,
      date: appt.Date, // Assuming appt.Date exists in your database schema
      doctorId: appt.DoctorId, // Assuming appt.DoctorId exists in your database schema
    };
  }

  public async saveAppointment(appointment: Appointment): Promise<void> {
    if (!appointment.id) {
      // Create new appointment
      await this._client.appointment.create({
        data: {
          Id: randomUUID(),
          SlotId: appointment.slotId,
          PatientId: appointment.patientId,
          PatientName: appointment.patientName,
          status: appointment.status,
          ReservedAt: appointment.reservedAt || new Date(),
        },
      });
    } else {
      // Update existing appointment
      await this._client.appointment.upsert({
        where: { Id: appointment.id },
        update: {
          SlotId: appointment.slotId,
          PatientId: appointment.patientId,
          PatientName: appointment.patientName,
          status: appointment.status,
          ReservedAt: appointment.reservedAt,
        },
        create: {
          Id: appointment.id,
          SlotId: appointment.slotId,
          PatientId: appointment.patientId,
          PatientName: appointment.patientName,
          status: appointment.status,
          ReservedAt: appointment.reservedAt || new Date(),
        },
      });
    }
  }
}
