import { randomUUID } from "crypto";

interface Slot {
  id: string;
  startTime: Date;
  endTime: Date;
  isReserved: boolean;
}

let slots: Slot[] = [];

export class DoctorRepository {
  
  getAvailableSlots() {
    return slots.filter(
      (slot) => !slot.isReserved && new Date(slot.startTime) > new Date()
    );
  }

  createSlot(slot: Omit<Slot, "id" | "isReserved">) {
    const newSlot = { id: randomUUID(), ...slot, isReserved: false };
    slots.push(newSlot);
    return newSlot;
  }
}
