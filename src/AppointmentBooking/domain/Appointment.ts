import { randomUUID } from "crypto";
import { Slot } from "./Slot";

export class Appointment {
 public constructor(
  public readonly PatientId: string,
  public readonly PatientName: string,
  public readonly SlotId: string,
  public readonly Slot?: Slot,
  public readonly Id: string = randomUUID(),
  public readonly ReservedAt: Date = new Date()
 ) {}
}
