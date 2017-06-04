"use strict";
exports.__esModule = true;
var DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1["default"].mongooseInstance;
var mongooseConnection = DataAccess_1["default"].mongooseConnection;
var RecipeModel = (function () {
    function RecipeModel() {
        this.createSchema();
        this.createModel();
    }
    RecipeModel.prototype.createSchema = function () {
        this.schema = mongoose.Schema({
            recipeTitle: String,
            recipeId: Number,
            ingredients: String,
            instructions: String,
            calories: Number,
            protein: Number,
            fat: Number,
            carbs: Number,
            sugar: Number
        }, { collection: 'recipes' });
    };
    RecipeModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Recipes", this.schema);
    };
    RecipeModel.prototype.retrieveAllRecipes = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    RecipeModel.prototype.retrieveSingleRecipe = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return RecipeModel;
}());
exports["default"] = RecipeModel;
