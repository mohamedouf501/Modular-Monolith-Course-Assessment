import { randomUUID } from "crypto";

export class Slot {
 public constructor(
  public readonly DoctorId: string,
  public readonly Cost: any,
  public readonly IsReserved: boolean = false,
  public readonly Id: string = randomUUID(),
  public readonly Time: Date = new Date()
 ) {}
}
