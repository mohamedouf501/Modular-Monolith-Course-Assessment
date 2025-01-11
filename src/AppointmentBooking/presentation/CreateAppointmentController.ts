import { Request, Response } from "express";
import { CreateAppointmentUseCase } from "../application/CreateAppointmentUseCase";
import { CreateAppointmentDto } from "./CreateAppointmentDto";

export class CreateAppointmentController {
 constructor(private readonly _usecase: CreateAppointmentUseCase) {}

 public async handle(req: Request, res: Response) {
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
 }
}
