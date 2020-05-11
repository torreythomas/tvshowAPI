const summary = require("../models/summary");
const data = require("./json_files/shows.json");


let summaryData = data.map(x => {
    let myData = {
        network: x.network,
        image: x.image,
        summary: x.summary
    };
return myData;
});

summary.remove({}).then(x => {
   summary.collection.insert(summaryData).then(x => {
        console.log(x);
    });
});