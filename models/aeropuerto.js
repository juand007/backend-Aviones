const {Schema, model} = require("mongoose");

const AeropuertoSchema = Schema({
    iata:{
        type: String,
        require: true
    },
    airport:{
        type: String,
        require: true
    },
    city:{
        type: String,
        require: true
    },
    state:{
        type: String,
        require: true
    },
    country:{
        type: String,
        require: true
    },
    lat:{
        type: String,
        require: true
    },
    long:{
        type: String,
        require: true
    }
});

module.exports = model("Aeropuerto", AeropuertoSchema); 