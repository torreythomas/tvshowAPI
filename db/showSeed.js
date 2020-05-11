  
const shows = require("../models/shows");
const data = require("./json_files/shows.json");


let showsData = data.map(x => {
    let myData = {
        id: x.id,
        url: x.url,
        name: x.name,
        genres: x.genres,
        officialSite: x.officialSite
    };
return myData;
});

shows.remove({}).then(x => {
   shows.collection.insert(showsData).then(x => {
        console.log(x);
    });
});