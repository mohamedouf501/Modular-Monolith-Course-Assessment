import { Slot } from "../domain/Slot";
import { ISlotsRepository } from "../application/GetAvailableSlotsUseCase/ISlotsRepository";
import { PrismaClient } from "@prisma/client";

export class PrismaSlotsRepository implements ISlotsRepository {
 constructor(private readonly _client: PrismaClient) {}
 async findAvailableSlots(): Promise<Slot[] | null> {
  try {
   const result = await this._client.slot.findMany({
    where: {
     IsReserved: false,
    },
   });
   return result;
  } catch (err) {
   console.log(err);
   throw new Error("Error while fetching slots");
  }
 }
}
