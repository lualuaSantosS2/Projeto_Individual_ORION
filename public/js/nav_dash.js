const body = document. querySelector('body'),
    sidebar = body.querySelector('.sidebar'),
    toggle = body.querySelector('.toggle'),
    modeSwitch = body.querySelector('.toggle-switch'),
    modeText = body.querySelector('.mode-text');

    modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");

        if(body.classList.contains('dark')){
            modeText.innerText = 'Claro';
        }else{
            modeText.innerText = 'Escuro';
        }
    });

    toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
    });

const estrutura = document.getElementById('estrutura');
const btnConsulta = document.getElementById('consulta');
const btnMedicacao = document.getElementById('medicacao');

btnConsulta.addEventListener('click', () =>{
    estrutura.classList.add('active');
});

btnMedicacao.addEventListener('click', () =>{
    estrutura.classList.remove('active');
});