const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});



//NIGHT MODE
document.getElementById('btn-moon').onclick = function () {
    document.getElementById('container').classList.add('dark-mode')
    document.getElementById('btn-sun').classList.remove('inactive')
    this.classList.add('inactive')
}

document.getElementById('btn-sun').onclick = function () {
    document.getElementById('container').classList.remove('dark-mode')
    document.getElementById('btn-moon').classList.remove('inactive')
    this.classList.add('inactive')
}
//NIGHT MODE
