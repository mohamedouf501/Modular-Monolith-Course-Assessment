import { randomUUID } from "crypto";
import { PrismaClient, Slot } from "@prisma/client";

export class DoctorRepository {
  private _client = new PrismaClient();

  async getAvailableSlots(): Promise<Slot[]> {
    const slots = await this._client.slot.findMany();
    return slots;
  }

  async createSlot(data: Slot): Promise<Slot> {
    try {
      // Check if the doctor already exists
      let doctor = await this._client.doctor.findFirst({
        where: {
          Name: "Dr. John Doe",
        },
      });

      // If the doctor doesn't exist, create it
      if (!doctor) {
        doctor = await this._client.doctor.create({
          data: {
            Name: "Dr. John Doe",
          },
        });
      }

      // Create a new slot linked to the existing doctor
      const newSlot = await this._client.slot.create({
        data: {
          Time: data.Time,
          DoctorName: data.DoctorName,
          IsReserved: data.IsReserved,
          Cost: data.Cost,
          Doctor: {
            connect: {
              Id: doctor.Id,
            },
          },
        },
      });

      return newSlot;
    } catch (error) {
      console.error("Error creating slot:", error);
      throw new Error("Failed to create slot");
    }
  }
}
