import { IUseCase } from "../../../shared/IUseCase";
import { IGetAvailableSlotsResult } from "./IGetAvailableSlotsResult";
import { ISlotsRepository } from "./ISlotsRepository";

export class GetAvailableSlotsUseCase
 implements IUseCase<any, IGetAvailableSlotsResult>
{
 constructor(private readonly _slotsRepository: ISlotsRepository) {}
 public async execute(): Promise<IGetAvailableSlotsResult> {
  const result = await this._slotsRepository.findAvailableSlots();
  return {
   Slots: result || [],
  };
 }
}
