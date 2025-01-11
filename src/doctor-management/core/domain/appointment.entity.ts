export interface Appointment {
    id: string;
    slotId: string;
    patientId: string;
    patientName: string;
    reservedAt: Date; 
    isCompleted: boolean;
    isCanceled: boolean;
    date: Date;
    doctorId: number;
}
  