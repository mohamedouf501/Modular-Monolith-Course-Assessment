import { Request, Response } from "express";
import { CreateAppointmentUseCase } from "../../application/CreateAppointmentUseCase/CreateAppointmentUseCase";
import { CreateAppointmentDto } from "./CreateAppointmentDto";

export class CreateAppointmentController {
 constructor(private readonly _usecase: CreateAppointmentUseCase) {}

 public async handle(req: Request, res: Response) {
  try {
   const data = {
    patientId: req.body.patientId,
    patientName: req.body.patientName,
    slotId: req.body.slotId,
   };

   const result = await this._usecase.execute(data);

   const response: CreateAppointmentDto = new CreateAppointmentDto(
    result.appointmentId
   );

   return res.status(201).json(response);
  } catch (err: any) {
   return res.status(500).json({ message: err.message || "Server Error" });
  }
 }
}
