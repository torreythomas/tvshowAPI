const Shows = require("../models/shows");


module.exports = {

    index: (req,res) => {
        Shows.find({}).then(x =>{
            res.json(x);
        });
    },
    create: (req,res) => {
        const newShows = req.body; 

        Shows.create(newShows).then(x => res.json(x));
    },
    show: (req,res) => {
        Shows.findOne({name: req.params.name}).then(x =>
            res.json(x));
    },
    update: (req,res) => {
        const updatedShows = req.body;

        Shows.findOneAndUpdate({name: req.params.name}, updatedShows, {
            new: true
        }).then(x => res.json(x));
    },
    destroy: (req,res) => {
        Shows.findOneAndDelete({name: req.params.name}).then(x => res.json(x));
    }
}