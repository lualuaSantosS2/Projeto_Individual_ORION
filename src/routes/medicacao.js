var express = require("express");
var router = express.Router();

var medicacaoController = require("../controllers/medicacaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    medicacaoController.cadastrar(req, res);
})

router.post("/listar", function (req, res) {
    medicacaoController.listar(req, res);
});

module.exports = router;