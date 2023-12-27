const pdfService = require("../services/pdfService")

const Model = require("../models/Pokemon")

const get = async (req,res) =>{
    try {
        const pokemons = await Model.find({});
        res.status(200).json(pokemons);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const remove = async (req,res) =>{
    try {
        const pokemons = await Model.findByIdAndDelete(req.params.id);
        res.status(200).json(pokemons);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const patch = async (req,res) =>{
    try {
        const pokemons = await Model.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json(pokemons);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getById= async (req,res) =>{
    try {
        const pokemons = await Model.findById(req.params.id);
        res.status(200).json(pokemons);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const create = async (req,res) =>{
    console.log(req.body)
    try {
        const pokemons = await Model.create(req.body);
        res.status(200).json(pokemons);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const createPdf = async (req,res) =>{
    try {
        const pokemon = await Model.findById(req.params.id);
        if(!pokemon) return res.status(404).json(pokemons);

        const stream = res.writeHead(200, {
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment;filename=${pokemon.name}.pdf`,
          });

          pdfService.createPDF(
            (data) => stream.write(data),
            () => stream.end(),
            pokemon
          );

        
    } catch (error) {
        // res.status(500).json({message: error.message})
        console.log(error)
    }
}

module.exports = {
    get,
    remove,
    patch,
    getById,
    create,
    createPdf
}