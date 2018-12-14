const Pet = require('./models');

module.exports ={
    pets: (req,res)=>{
        Pet.find().sort( { type: -1 } )
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },
    view: (req,res)=>{
        Pet.findById(req.params.id)
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },
    new: (req,res)=>{
        Pet.create(req.body)
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },
    update: (req,res)=>{
        Pet.findByIdAndUpdate(req.params.id, req.body, {runValidators:true})
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },
    destroy: (req,res)=>{
        Pet.findByIdAndDelete(req.params.id)
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
    },

}