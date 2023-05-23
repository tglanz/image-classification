import { Router, Request, Response } from "express";

const router = Router();

router.get("/api/status", function(req: Request, res: Response) {
  res.status(200).send({ message: "ok" });
});

export default router;