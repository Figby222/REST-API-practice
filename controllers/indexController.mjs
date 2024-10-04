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

const employees = [
    { firstName: "John", lastName: "Doe", age: 20 },
    { lastName: "Jane", lastName: "Doe", age: 30 },
    { firstName: "Mary", lastName: "HadALittleLamb", age: 2349877493287327 }
];

const employeesSearchGet = asyncHandler(async (req, res) => {
    const { firstName, lastName, age } = req.query;
    let results = [ ...employees ];
    if (firstName) {
        results = results.filter(result => result.firstName === firstName);
    }

    if (lastName) {
        results = results.filter(result => result.lastName === lastName);
    }

    if (age) {
        results = results.filter(result => +result.age === +age);
    }
    res.json(results);
})

export { indexRouteGet, articlesListGet, createArticlePost, updateArticlePut, removeArticleDelete, articleCommentsGet, createUserPost, employeesSearchGet };