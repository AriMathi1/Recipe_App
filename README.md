Method: Get : https://recipe-app-057j.onrender.com/recipes
the method used in this API is GET. this will respond by retrieving all the data that is stored in the database in the folder named "recipes". in this project when this GET api is sent it will retrieve all the recipes if there are no recipes it will return an empty array. the status code for that will be 200

Method: POST: https://recipe-app-057j.onrender.com/recipe

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


Method: GET: https://recipe-app-057j.onrender.com/recipe/67aa90caa0c60f2254fec4bf
Requires specific recipe ID in URL. replace "id" with id value.
it will be used to retrieve details of a specific recipe by its unique ID.
Status Codes will be 200: "Success" and 404: when "Recipe Not Found"
The API will fetch and return complete details for a single recipe matching the provided ID.

Method: PUT: https://recipe-app-057j.onrender.com/recipe/67aa90caa0c60f2254fec4bf

Request Body:
{
  "name": "string",
  "ingredients": ["string"],
  "instructions": "string",
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


Method: DELETE: https://recipe-app-057j.onrender.com/recipe/67aa90caa0c60f2254fec4bf
Requires specific recipe ID in URL. replace "id" with id value.
it will be used to remove a specific recipe from the database, delete unwanted or incorrect recipe entries.
Status Codes will be 200: "Successfully Deleted" and 404: when "Recipe Not Found"
The API will delete the recipe matching the provided ID.

Here are some sample data that can be used to test the APIs.
{
   "title": "Avocado Toast with Poached Egg",
   "cuisine": "Healthy / Breakfast",
   "preparationTime": 10,
   "cookingTime": 5,
   "servings": 2,
   "ingredients": [
       "2 slices sourdough bread",
       "1 ripe avocado",
       "2 eggs",
       "½ tsp lemon juice",
       "Salt & black pepper to taste",
       "1 tbsp olive oil"
   ],
   "instructions": [
       "Toast the bread slices",
       "Mash the avocado with lemon juice, salt, and pepper",
       "Poach eggs in simmering water for 3-4 minutes",
       "Spread avocado on toast and top with a poached egg",
       "Drizzle with olive oil and serve"
   ]
}
{
   "title": "Chocolate Chip Cookies",
   "cuisine": "American",
   "preparationTime": 15,
   "cookingTime": 12,
   "servings": 12,
   "ingredients": [
       "1 cup all-purpose flour",
       "½ cup butter (melted)",
       "½ cup brown sugar",
       "¼ cup white sugar",
       "1 egg",
       "½ tsp baking soda",
       "½ tsp vanilla extract",
       "1 cup chocolate chips"
   ],
   "instructions": [
       "Preheat oven to 180°C (350°F)",
       "Mix melted butter, sugars, egg, and vanilla in a bowl",
       "Add flour and baking soda, mixing until combined",
       "Fold in chocolate chips",
       "Scoop dough onto a baking tray and bake for 10-12 minutes",
       "Let cool before serving"
   ]
}
{
   "title": "Vegetable Stir-Fry",
   "cuisine": "Asian",
   "preparationTime": 10,
   "cookingTime": 10,
   "servings": 2,
   "ingredients": [
       "1 cup broccoli florets",
       "1 carrot (julienned)",
       "1 red bell pepper (sliced)",
       "1 zucchini (sliced)",
       "2 tbsp soy sauce",
       "1 tbsp sesame oil",
       "1 tsp garlic (minced)",
       "1 tsp ginger (grated)",
       "1 tsp honey"
   ],
   "instructions": [
       "Heat sesame oil in a pan and sauté garlic and ginger",
       "Add all vegetables and stir-fry for 5 minutes",
       "Mix in soy sauce and honey, cooking for another 2 minutes",
       "Serve hot with rice or noodles"
   ]
}
{
   "title": "Classic Margherita Pizza",
   "cuisine": "Italian",
   "preparationTime": 120,
   "cookingTime": 15,
   "servings": 2,
   "ingredients": [
       "500g pizza dough",
       "1 cup tomato sauce",
       "200g fresh mozzarella (sliced)",
       "Fresh basil leaves",
       "2 tbsp olive oil",
       "Salt to taste"
   ],
   "instructions": [
       "Preheat oven to 220°C (430°F)",
       "Roll out the pizza dough and place it on a baking tray",
       "Spread tomato sauce evenly and place mozzarella slices",
       "Drizzle olive oil and season with salt",
       "Bake for 12-15 minutes until golden and bubbly",
       "Garnish with fresh basil before serving"
   ]
}
{
   "title": "Chicken Tikka Masala",
   "cuisine": "Indian", 
   "preparationTime": 30,
   "cookingTime": 25,
   "servings": 4,
   "ingredients": [
       "500g boneless chicken (cubed)",
       "1 cup yogurt",
       "2 tbsp tikka masala spice mix",
       "1 onion (chopped)",
       "2 tomatoes (pureed)",
       "½ cup heavy cream",
       "2 cloves garlic (minced)",
       "1 tbsp ginger (grated)", 
       "2 tbsp oil",
       "Salt & black pepper to taste"
   ],
   "instructions": [
       "Marinate chicken with yogurt and spice mix for 1 hour",
       "Cook marinated chicken in a pan until browned",
       "In another pan, sauté onions, garlic, and ginger",
       "Add tomato puree and cook for 5 minutes",
       "Mix in cream, season, and add chicken. Simmer for 10 minutes",
       "Serve hot with rice or naan"
   ]
}
{
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
    ]
}
