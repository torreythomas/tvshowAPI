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