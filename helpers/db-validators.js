const { Aeropuerto  } = require("../models");

//verificar si existe un producto por id
const existeAeropuerto = async (id = "")=>{
    const existe = await Aeropuerto.findById(id);
    if (!existe || existe.estado == false){
        throw new Error(`El id ${id} no existe (validation)`);
    }
}

module.exports = {
    existeAeropuerto
}