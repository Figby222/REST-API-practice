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

const users = [
    { name: "superCoolUser", email: "superCoolUser@user.com" }
];

const createUserPost = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        return res.status(400).json({ error: "User already exists" });
    }
    res.json(req.body);
})

export { indexRouteGet, articlesListGet, createArticlePost, updateArticlePut, removeArticleDelete, articleCommentsGet, createUserPost };