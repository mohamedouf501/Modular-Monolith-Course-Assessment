import { Request, Response } from "express";
import { DoctorService } from "../service/doctorService";

export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  async getSlots(req: Request, res: Response) {
    try {
      const slots = await this.doctorService.getSlots();
      res.json(slots);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch slots" });
    }
  }

  async addSlot(req: Request, res: Response) {
    try {
      const slot = req.body;
      const newSlot = await this.doctorService.addSlot(slot);
      res.status(201).json(newSlot);
    } catch (error) {
      res.status(500).json({ error: "Failed to add slot" });
    }
  }
}
