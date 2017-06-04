import Mongoose = require("mongoose");

interface IRecipeModel extends Mongoose.Document {
    recipeTitle: string;
    recipeId: number;
    ingredients: string;
    instructions: string;
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    sugar: number;
}
export default IRecipeModel;