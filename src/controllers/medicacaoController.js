var medicacaoModel = require("../models/medicacaoModel");


function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var desc = req.body.descServer;
    var hora = req.body.horaServer;
    var qtd = req.body.qtdServer;
    var id = req.body.idServer;

    // Faça as validações dos valores
    if (desc == undefined) {
        res.status(400).send("Seu desc está undefined!");
    } else if (hora == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (qtd == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (id == undefined) {
        res.status(400).send("Sua data de Nascimento está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        medicacaoModel.cadastrar(desc, hora, qtd, id)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listar(req, res) {
    var id = req.body.id;
  
    medicacaoModel.listar(id).then((resultado) => {
      res.status(200).json(resultado);
    });
  }

module.exports = {
    cadastrar,
    listar
}