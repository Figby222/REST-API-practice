import { Router } from "express";
import * as indexController from "../controllers/indexController.mjs";

const indexRouter = Router();

indexRouter.get("/", indexController.indexRouteGet);

indexRouter.get("/articles", indexController.articlesListGet);

indexRouter.post("/articles", indexController.createArticlePost)

indexRouter.put("/articles/:id", indexController.updateArticlePut);

export default indexRouter;