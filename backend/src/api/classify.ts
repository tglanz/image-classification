import { Router, Request, Response } from "express";
import * as classifier from "../services/classifier";
import * as imageRepository from "../services/image-repository";

const router = Router();

// TODO: different routers. Image speciality 
router.post("/api/classify/image", async function(req: Request, res: Response) {
  const file = (req as any).files.image;

  const classification = await classifier.classifyImage(file.data);

  const imageId = await imageRepository.putImage({
    // name: file.name as string,
    data: file.data as Buffer,
    mimeType: file.mimetype as string,
    classification,
  });

  const similarities = await imageRepository.fetchClass(classification, [imageId], 3);
  
  res
    .status(200)
    .send({ message: "ok", imageId, similarities, classification });
});

export default router;