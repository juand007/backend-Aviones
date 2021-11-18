const { Router } = require("express");
const { check } = require("express-validator");
const {
    aeropuertoGet,
    aeropuertoPost,
    aeropuertoPut,
    aeropuertoDelete
} = require("../controllers/aeropuertos");
const { existeAeropuerto } = require("../helpers/db-validators");
const { validarCampos } = require("../Middlewares/index");
const { Aeropuerto } = require("../models");
const router = Router();

// {{url}}/api/aeropuerto

router.get("/", aeropuertoGet);

router.get("/:id", [
    check("id", "El id no es validos").isMongoId(),
    check("id").custom((id) => existeProducto(id)),
    validarCampos,
], aeropuertoGet);

router.post("/", [
    check("airport", "El airport es obligatorio").not().isEmpty(),
    check("city", "El city es obligatorio").not().isEmpty(),
    check("state", "El state es obligatorio").not().isEmpty(),
    check("country", "El country es obligatorio").not().isEmpty(),
    validarCampos,
], aeropuertoPost);

router.put("/:id", [
    check("id", "El id no es validos").isMongoId(),
    check("id").custom((id) => existeAeropuerto(id)),
    validarCampos,
], aeropuertoPut);

router.delete("/:id", [
    check("id", "El id no es valido").isMongoId(),
    check("id").custom((id) => existeAeropuerto(id)),
    validarCampos,
], aeropuertoDelete);

module.exports = router;