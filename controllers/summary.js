const Summary = require("../models/summary");


module.exports = {

    index: (req,res) => {
        Summary.find({}).then(x =>{
            res.json(x);
        });
    },
    create: (req,res) => {
        const newSummary = req.body; 

        Summary.create(newSummary).then(x => res.json(x));
    },
    show: (req,res) => {
        Summary.findOne({name: req.params.name}).then(x =>
            res.json(x));
    },
    update: (req,res) => {
        const updatedSummary = req.body;

        Summary.findOneAndUpdate({name: req.params.name}, updatedSummary, {
            new: true
        }).then(x => res.json(x));
    },
    destroy: (req,res) => {
        Summary.findOneAndDelete({name: req.params.name}).then(x => res.json(x));
    }
}