import { Router } from "express";
import * as indexController from "../controllers/indexController.mjs";

const indexRouter = Router();

indexRouter.get("/", indexController.indexRouteGet);

indexRouter.get("/articles", indexController.articlesListGet);

indexRouter.post("/articles", indexController.createArticlePost)

indexRouter.put("/articles/:id", indexController.updateArticlePut);

indexRouter.delete("/articles/:id", indexController.removeArticleDelete)

indexRouter.get("/articles/:articleId/comments", indexController.articleCommentsGet)

indexRouter.post("/users", indexController.createUserPost);

indexRouter.get("/employees", indexController.employeesSearchGet);

indexRouter.get("/v2/employees", indexController.employeesListGet);

export default indexRouter;