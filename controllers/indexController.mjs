import asyncHandler from "express-async-handler";

function indexRouteGet(req, res) {
    res.render("index", { title: "Node Template" });
}

const articlesListGet = asyncHandler(async (req, res) => {
    console.log("Do stuff to get articles");
    const articles = [];

    res.json(articles);
})

export { indexRouteGet, articlesListGet };