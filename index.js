const express = require("express");
const cors = require("cors")
const mongodb = require("mongodb")
const mongoose = require("mongoose")
const app = express();
const dotenv = require("dotenv").config();

const URL = process.env.DB || "mongodb://localhost:27017";
mongoose.connect(URL);

const { Recipe } = require("./model/recipe");

app.use(express.json());
app.use(cors({ origin: "*", }));

let recipes = [];

app.get("/recipes", async (req, res) => {
    let recipes = await Recipe.find()
    res.status(200).json(recipes)
});

app.post("/recipe", async (req, res) => {
    try {
        let recipe = new Recipe({
            title: req.body.title,
            cuisine: req.body.cuisine,
            preparationTime: req.body.preparationTime,
            cookingTime: req.body.cookingTime,
            servings: req.body.servings,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
        })
        await recipe.save();
        res.status(200).json({ message: "Recipe added successfully" });

    } catch (error) {
        console.log('Error:', error);
        res.status(400).json({ message: "Validation Error" });
    }
});

app.get("/recipe/:id", async (req, res) => {
    try {
        let recipe = await Recipe.findOne({ _id: req.params.id });
        res.status(200).json(recipe);
    } catch (error) {
        res.status(404).json({ message: "Recipe not found" });
    }
});

app.put("/recipe/:id", async (req, res) => {
    let recipe = await Recipe.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).json(recipe);
})

app.delete("/recipe/:id", async (req, res) => {
    try {
        await Recipe.findOneAndDelete({ _id: req.params.id });
        res.status(200).json({ message: "successfully deleted" });
    } catch (error) {
        res.status(404).json({ message: "Recipe not found" });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})