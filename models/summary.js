const mongoose = require("../db/connection");
const Schema = mongoose.Schema;


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