import { Request, Response } from "express";
import { GetAvailableSlotsUseCase } from "../../application/GetAvailableSlotsUseCase/GetAvailableSlotsUseCase";
import { GetAvailableSlotsDto } from "./GetAvailableSlotsDto";

export class GetAvailableSlotsController {
 constructor(private readonly _usecase: GetAvailableSlotsUseCase) {}

 public async handle(req: Request, res: Response) {
  try {
   const result = await this._usecase.execute();

   const response: GetAvailableSlotsDto = new GetAvailableSlotsDto(
    result.Slots
   );
   return res.status(200).json(response);
  } catch (err: any) {
   return res.status(500).json({ message: err.message || "Server Error" });
  }
 }
}
