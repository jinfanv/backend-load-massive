"use strict";

const connectDb = require("./db");
const { ObjectID } = require("mongodb");

async function createColecction(data, collection) {
  let db;
  
  try {
    db = await connectDb();
   
   // await db.collection(collection).drop();
    await db.collection(collection).insertMany(data);

    console.log("Create [ " + collection + " ] Succesfull");
  } catch (error) {
    console.log("Error [ " + collection + " ] Fail" + error);
  }
}

async function getColecction(collection) {
  let db;
  let data
  try {
    db = await connectDb();
   
   // await db.collection(collection).drop();
    data = await db.collection(collection).find({});

    return data.toArray()
  } catch (error) {
    console.log("Error [ " + collection + " ] Fail" + error);
  }
}


module.exports = {
  createColecction,
  getColecction
};
