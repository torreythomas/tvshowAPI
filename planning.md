## Project Idea

# Using the tvmaze api, I am going to create an api that allows users to search shows and cast from tv. Users will be able to create a cast member. They will also have the ability to update , change, and delete a show. 

## Models

# Shows Model

const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const showsSchema = new Schema ({
    id: String,
    url: String,
    name: String,
    genres: String,
    officialSite: String,
});

const Shows = mongoose.model("Shows", showsSchema);
module.exports = Shows;


const summarySchema = new Schema ({
      network: {
        name: String
    },
    image: {
        original: String
    },
    summary: String
});

const Summary = mongoose.model("Summary", summarySchema);
module.exports = Summary;