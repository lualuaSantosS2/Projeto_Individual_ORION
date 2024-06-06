const total_fotos = 4;
let currentIndex = 0;

const posicoes = document.querySelectorAll('.posicoes button');
const imagens = document.querySelectorAll('.imagens img');

function mostrarSlide(index) {
    imagens.forEach(image => image.style.display = 'none');
    posicoes.forEach(posicao => posicao.style.backgroundColor = 'transparent');

    imagens[index].style.display = 'block';
    posicoes[index].style.backgroundColor = '#000';
}

function gotoSlide(index) {
    currentIndex = (total_fotos + index) % total_fotos;
    mostrarSlide(currentIndex);
}

function proximo() {
    gotoSlide(currentIndex + 1);
}

function anterior() {
    gotoSlide(currentIndex - 1);
}

function posicaoClicar(index) {
    gotoSlide(index);
}

posicoes.forEach((posicao, index) => {
    posicao.addEventListener('click', () => posicaoClicar(index));
});

function posicao(index) {
    posicaoClicar(index);
}

mostrarSlide(currentIndex);
