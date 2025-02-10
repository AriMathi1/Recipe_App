Method: Get : http://localhost:3000/recipes
the method used in this API is GET. this will respond by retrieving all the data that is stored in the database in the folder named "recipes". in this project when this GET api is sent it will retrieve all the recipes if there are no recipes it will return an empty array. the status code for that will be 200


hz8PdysQjr6Dqp4U

Method: POST: http://localhost:3000/recipe

Request Body should like the example below
title: req.body.title,
cuisine: req.body.cuisine,
preparationTime: req.body.preparationTime,
cookingTime: req.body.cookingTime,
servings: req.body.servings,
ingredients: req.body.ingredients,
instructions: req.body.instructions,

Expected response likely returns the created recipe with a newly assigned ID
- Success response example:
{
  "_id": {
    "$oid": "67a8ed499615ef58cc3530f5"
  },
  "title": "Spaghetti Carbonara",
  "cuisine": "Italian",
  "preparationTime": 20,
  "cookingTime": 15,
  "servings": 4,
  "ingredients": [
    "400g spaghetti",
    "150g pancetta (cubed)",
    "2 large eggs",
    "50g Parmesan cheese (grated)",
    "2 cloves garlic (minced)",
    "Salt & black pepper to taste",
    "Fresh parsley (chopped, optional)"
  ],
  "instructions": [
    "Cook the spaghetti in salted boiling water until al dente",
    "In a pan, cook pancetta until crispy, then add garlic",
    "Whisk eggs with grated Parmesan and black pepper",
    "Drain pasta and mix with pancetta (off heat)",
    "Quickly stir in the egg mixture to create a creamy sauce",
    "Serve hot, garnished with extra Parmesan and parsley"
  ],
  "__v": 0
}

it will be used to create a new recipe in the database
Status Codes will be 201: "Successfully Created"
The API will take recipe details, validate them, and store a new recipe in the database.


Method: GET: http://localhost:3000/recipe/id
Requires specific recipe ID in URL. replace "id" with id value.
it will be used to retrieve details of a specific recipe by its unique ID.
Status Codes will be 200: "Success" and 404: when "Recipe Not Found"
The API will fetch and return complete details for a single recipe matching the provided ID.

1. Method: PUT: http://127.0.0.1:3000/recipe/id

Request Body:
{
  "name": "string",
  "ingredients": ["string"],
  "instructions": "string",
  "cookingTime": "string",
  "difficulty": "string"
}

Expected Response:
{
  "id": "specific_id",
  "message": "Recipe updated successfully",
  "updatedRecipe": {
    "name": "New Recipe Name",
    "ingredients": [...],
    "instructions": "..."
  }
}

it will be used to update an existing recipe's details, modify recipe information like ingredients, instructions, etc.
Status Codes will be 200: "Successfully Updated"
The API will update the recipe matching the provided ID with new information.


Method: DELETE: http://localhost:3000/recipe/id
Requires specific recipe ID in URL. replace "id" with id value.
it will be used to remove a specific recipe from the database, delete unwanted or incorrect recipe entries.
Status Codes will be 200: "Successfully Deleted" and 404: when "Recipe Not Found"
The API will delete the recipe matching the provided ID.
