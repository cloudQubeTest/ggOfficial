"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess = (function () {
    function DataAccess() {
        DataAccess.connect();
    }
    DataAccess.connect = function () {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.on("open", function () {
            console.log("Connected to mongodb.");
        });
        this.mongooseInstance = Mongoose.connect(this.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    };
    return DataAccess;
}());
//static DB_CONNECTION_STRING:string = 'mongodb://dbAdmin:test@localhost:3000/recipeSample/?authSource=admin';
DataAccess.DB_CONNECTION_STRING = 'mongodb://admintest:Amyandtheboyz@ds064799.mlab.com:64799/gainzgoalzdb';
DataAccess.connect();
exports["default"] = DataAccess;
