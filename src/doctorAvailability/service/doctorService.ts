import { DoctorRepository } from "../repository/doctorRepository";

interface Slot {
  startTime: Date;
  endTime: Date;
}

export class DoctorService {
  constructor(private readonly repository: DoctorRepository) {}

  async getSlots() {
    return this.repository.getAvailableSlots();
  }

  async addSlot(slot: Slot) {
    if (new Date(slot.startTime) >= new Date(slot.endTime)) {
      throw new Error("Invalid slot time range");
    }
    return this.repository.createSlot(slot);
  }
}
