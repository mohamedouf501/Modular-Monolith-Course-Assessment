import { randomUUID } from "crypto";

export class Appointment {
 public constructor(
  public readonly PatientId: string,
  public readonly PatientName: string,
  public readonly SlotId: string,
  public readonly Id: string = randomUUID(),
  public readonly ReservedAt: Date = new Date()
 ) {}
}
