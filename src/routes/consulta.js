var express = require("express");
var router = express.Router();

var consultaController = require("../controllers/consultaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    consultaController.cadastrar(req, res);
})

router.post("/BuscarConsultas", function (req, res) {
    consultaController.buscarConsultas(req, res);
})

router.post("/BuscarDatas", function (req, res) {
    consultaController.buscarDatas(req, res);
})

router.post("/BuscarDados", function (req, res) {
    consultaController.buscarDados(req, res);
});

module.exports = router;