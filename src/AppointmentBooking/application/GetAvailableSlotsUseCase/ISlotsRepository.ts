import { Slot } from "../../domain/Slot";

export interface ISlotsRepository {
 findAvailableSlots(): Promise<Slot[] | null>;
}
