import { Request, Response, NextFunction } from "express";

export function validateSlot(req: Request, res: Response, next: NextFunction) {
  next();
}
