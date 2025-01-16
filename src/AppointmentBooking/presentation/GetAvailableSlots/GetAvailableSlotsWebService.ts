import { PrismaClient } from "@prisma/client";
import { PrismaSlotsRepository } from "../../infrastructure/PrismaSlotsRepository";
import { GetAvailableSlotsController } from "./GetAvailableSlotsController";
import { GetAvailableSlotsUseCase } from "../../application/GetAvailableSlotsUseCase/GetAvailableSlotsUseCase";

export class GetAvailableSlotsWebService {
 static createController(): GetAvailableSlotsController {
  const repo = new PrismaSlotsRepository(new PrismaClient());
  const useCase = new GetAvailableSlotsUseCase(repo);
  return new GetAvailableSlotsController(useCase);
 }
}
