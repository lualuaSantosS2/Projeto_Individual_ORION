var consultaModel = require("../models/consultaModel");



function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var desc = req.body.descServer;
    var dataHora = req.body.dataHoraServer;
    var cep = req.body.cepServer;
    var numero = req.body.numeroServer;
    var logradouro = req.body.logradouroServer;
    var bairro = req.body.bairroServer;
    var id = req.body.idServer;

    // Faça as validações dos valores
    if (desc == undefined) {
        res.status(400).send("A descrição está undefined!");
    } else if (dataHora == undefined) {
        res.status(400).send("A data e hora está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("O CEP está undefined!");
    } else if (numero == undefined) {
        res.status(400).send("O número está undefined!");
    }else if (logradouro == undefined) {
        res.status(400).send("O endereço escolhido está undefined!");
    }else if (bairro == undefined) {
        res.status(400).send("O bairro escolhido está undefined!");
    }else if (id == undefined) {
        res.status(400).send("O id escolhido está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        consultaModel.cadastrar(desc, dataHora, cep, logradouro, numero, bairro, id)
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

function buscarDatas(req, res) {
    var id = req.body.id;
  
    consultaModel.buscarDatas(id).then((resultado) => {
      res.status(200).json(resultado);
    });
  }

  function buscarConsultas(req, res) {
    var data = req.body.data;
    var id = req.body.id;
  
    consultaModel.buscarConsultas(data, id).then((resultado) => {
      res.status(200).json(resultado);
    });
  }

  function buscarDados(req, res) {
    var id = req.body.id;
  
    consultaModel.buscarDados(id).then((resultado) => {
      res.status(200).json(resultado);
    });
  }

module.exports = {
    cadastrar,
    buscarDatas,
    buscarConsultas,
    buscarDados
}