export class AppointmentConfirmedDto {
 constructor(
  public readonly patientName: string,
  public readonly appointmentTime: string,
  public readonly doctorName: string
 ) {}
}
