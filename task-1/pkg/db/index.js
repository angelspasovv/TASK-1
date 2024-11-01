const mongoose = require("mongoose");
const { getSection } = require("../config");
const { MONGO_USERNAME, MONGO_PASSWORD } = getSection("development");
const uri = `mongodb+srv://angelspasovv:test1234555@cluster0.ebkja6l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;`

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected!");
  } catch (err) {
    console.error(err.message);
  }
}

connect();