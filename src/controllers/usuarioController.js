var usuarioModel = require("../models/usuarioModel");
var consultaModel = require("../models/consultaModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {


        usuarioModel.autenticar(email, senha)
        
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {

                                    res.json({
                                        id: resultadoAutenticar[0].idPaciente,
                                        email: resultadoAutenticar[0].emailPaciente,
                                        nome: resultadoAutenticar[0].nomePaciente,
                                        senha: resultadoAutenticar[0].senhaPaciente,
                                        dataNasc: resultadoAutenticar[0].dtNasc,
                                        tipoCancer: resultadoAutenticar[0].tipoCancer
                                    });
                            
                        

                        //aquarioModel.buscarAquariosPorEmpresa(resultadoAutenticar[0].empresaId)
                            //.then((resultadoAquarios) => {
                                //if (resultadoAquarios.length > 0) {
                                    // res.json({
                                    //     id: resultadoAutenticar[0].id,
                                    //     email: resultadoAutenticar[0].email,
                                    //     nome: resultadoAutenticar[0].nome,
                                    //     senha: resultadoAutenticar[0].senha,
                                    //     //aquarios: resultadoAquarios
                                    // });
                                //} else {
                                //    res.status(204).json({ aquarios: [] });
                               // }
                            //})
                    } else if (resultadoAutenticar.length == 0) {
                        usuarioModel.autenticarFamiliar(email, senha)
                        .then(
                            function (resultadoAutenticar) {
                                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

                                
                                            res.json({
                                                id: resultadoAutenticar[0].idFamiliar,
                                                email: resultadoAutenticar[0].emailFamiliar,
                                                nome: resultadoAutenticar[0].nomeFamiliar,
                                                senha: resultadoAutenticar[0].senhaFamiliar,
                                                parentesco: resultadoAutenticar[0].parentesco,
                                                idPaciente: resultadoAutenticar[0].idPaciente
                                            });
                            }
                        ); 
                        
                        //res.status(403).send("Email e/ou senha inválido(s)");
                    } else if(resultadoAutenticar >= 2) {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }else{
                        res.status(403).send("Email e/ou senha inválido(s)");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

// function cadastrar(req, res) {
//     // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
//     var nome = req.body.nomeServer;
//     var email = req.body.emailServer;
//     var senha = req.body.senhaServer;
//     var empresaId = req.body.empresaServer;

//     // Faça as validações dos valores
//     if (nome == undefined) {
//         res.status(400).send("Seu nome está undefined!");
//     } else if (email == undefined) {
//         res.status(400).send("Seu email está undefined!");
//     } else if (senha == undefined) {
//         res.status(400).send("Sua senha está undefined!");
//     } else if (empresaId == undefined) {
//         res.status(400).send("Sua empresa está undefined!");
//     } else {

//         // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
//         usuarioModel.cadastrar(nome, email, senha, empresaId)
//             .then(
//                 function (resultado) {
//                     res.json(resultado);
//                 }
//             ).catch(
//                 function (erro) {
//                     console.log(erro);
//                     console.log(
//                         "\nHouve um erro ao realizar o cadastro! Erro: ",
//                         erro.sqlMessage
//                     );
//                     res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }
// }

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var dataNasc = req.body.dataNascServer;
    var tipoCancer = req.body.tipoCancerServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (dataNasc == undefined) {
        res.status(400).send("Sua data de Nascimento está undefined!");
    }else if (tipoCancer == undefined) {
        res.status(400).send("O tipo de câncer escolhido está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, dataNasc, tipoCancer)
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

function cadastrarFamiliar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var parentesco = req.body.parentescoServer;
    var codigoPaciente = req.body.codigoPacienteServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (codigoPaciente == undefined) {
        res.status(400).send("O codigo do Paciente está undefined!");
    }else if (parentesco == undefined) {
        res.status(400).send("O parentesco escolhido está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarFamiliar(nome, email, senha, parentesco, codigoPaciente)
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

function buscarFamiliares(req, res) {
    var id = req.body.id;
  
    usuarioModel.buscarFamiliares(id).then((resultado) => {
      res.status(200).json(resultado);
    });
  }

module.exports = {
    autenticar,
    cadastrar,
    cadastrarFamiliar,
    buscarFamiliares
}