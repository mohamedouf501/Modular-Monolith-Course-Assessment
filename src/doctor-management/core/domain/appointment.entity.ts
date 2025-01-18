export interface Appointment {
  id: string;
  slotId: string;
  patientId: string;
  patientName: string;
  reservedAt: Date;
  status: string;
  date: Date;
  doctorId: number;
}
