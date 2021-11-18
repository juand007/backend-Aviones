const { response } = require("express");
const { Aeropuerto } = require("../models/");

const aeropuertoGet = async (req, res = response) => {

    const query = {};

    const aeropuertos = await Aeropuerto.find(query);
    //.sort({_id:1});

    res.json({
        msg: "Api get  - aeropuerto",
        aeropuertos
    });
};

const aeropuertoPost = async (req, res = response) => {

    const data = req.body;

    /*     const data = {
            nombre: body.nombre.toUpperCase(),
            usuario: req.usuario._id,
            ...body
        } */

    const aeropuerto = new Aeropuerto(data);

    await aeropuerto.save();

    res.status(201).json({
        msg: "Api post  - aeropuerto",
        aeropuerto
    });
};

const aeropuertoPut = async (req, res = response) => {

    const { id } = req.params;
    const data = req.body;

    const aeropuerto = await Aeropuerto.findByIdAndUpdate(id, data, { new: true });

    res.json({
        msg: "Api put  - aeropuerto",
        aeropuerto,
    });
};

const aeropuertoDelete = async (req, res = response) => {

    const { id } = req.params;
    //const aeropuerto = await Aeropuerto.deleteOne({ _id }, {}, { new: true });
    const aeropuerto = await Aeropuerto.deleteOne({ _id: id });

    res.json({
        msg: "Api delete  - aeropuerto",
        aeropuerto,
    });

};

module.exports = {
    aeropuertoGet,
    aeropuertoPost,
    aeropuertoPut,
    aeropuertoDelete
}