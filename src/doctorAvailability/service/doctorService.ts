import { Slot } from "@prisma/client";
import { DoctorRepository } from "../repository/doctorRepository";

export class DoctorService {
  constructor(private readonly repository: DoctorRepository) {}

  async getSlots() {
    return await this.repository.getAvailableSlots();
  }

  async addSlot(slot: Slot) {
    return await this.repository.createSlot(slot);
  }
}
