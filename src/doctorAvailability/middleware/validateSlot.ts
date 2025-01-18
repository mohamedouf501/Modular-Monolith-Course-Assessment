import { Request, Response, NextFunction } from "express";

export function validateSlot(req: Request, res: Response, next: NextFunction) {
  const { startTime, endTime } = req.body;
  if (!startTime || !endTime) {
    return res.status(400).json({ error: "Missing required slot fields" });
  }
  if (new Date(startTime) >= new Date(endTime)) {
    return res.status(400).json({ error: "Invalid slot time range" });
  }
  next();
}
