import { IGetAvailableSlotsResult } from "../../application/GetAvailableSlotsUseCase/IGetAvailableSlotsResult";
import { Slot } from "../../domain/Slot";

export class GetAvailableSlotsDto implements IGetAvailableSlotsResult {
 constructor(public readonly Slots: Slot[]) {}
}
