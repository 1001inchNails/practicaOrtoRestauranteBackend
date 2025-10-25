import { Router } from "express";
import { router as postRouter } from "./post.js";
import { router as getRouter } from "./get.js";
import { router as deleteRouter } from "./delete.js";
import { router as patchRouter } from "./patch.js";
const router = Router();

router.use("/post", postRouter);
router.use("/get", getRouter);
router.use("/delete", deleteRouter);
router.use("/patch", patchRouter);

export { router };