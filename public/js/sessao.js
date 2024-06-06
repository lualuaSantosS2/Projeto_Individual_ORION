// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("name");
    var item = document.getElementById("page_familiar");
    var people = document.getElementById("profession");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;

        if(sessionStorage.PARENTESCO == undefined){
            item.innerHTML = `
                            <a href="listarFamiliares.html">
                                <ion-icon name="people-outline"></ion-icon>
                                <span class="text nav-text">Familiares</span>
                            </a>`;

            people.innerHTML = `Codigo Paciente:${sessionStorage.ID_PACIENTE}`;
        }else{
            people.innerHTML = ` ${sessionStorage.PARENTESCO}`; 
        }
    } else {
        window.location = "../cadastro_login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../cadastro_login.html";
}



