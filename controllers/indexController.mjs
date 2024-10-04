import asyncHandler from "express-async-handler";

function indexRouteGet(req, res) {
    res.render("index", { title: "Node Template" });
}
const articlesListGet = asyncHandler(async (req, res) => {
    console.log("Do stuff to get articles");
    const articles = [];

    res.json(articles);
})

const createArticlePost = asyncHandler(async (req, res) => {
    console.log("Do stuff to create article");
    res.json(req.body);
})

const updateArticlePut = asyncHandler(async (req, res) => {
    console.log("Do stuff to update article");
    const { id } = req.params;

    res.json(req.body);
})

const removeArticleDelete = asyncHandler(async (req, res) => {
    console.log("Do stuff to delete article");
    const { id } = req.params;

    res.json({ deleted: id });
})

const articleCommentsGet = asyncHandler(async (req, res) => {
    console.log("Do stuff get article comments");
    const { articleId } = req.params;
    const comments = [];
    
    res.json(comments);
})

export { indexRouteGet, articlesListGet, createArticlePost, updateArticlePut, removeArticleDelete, articleCommentsGet };