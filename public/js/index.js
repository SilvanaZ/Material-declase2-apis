function qs(element){
    return document.querySelector(element)
}

let $main = qs('main');
let $h2 = qs('h2');
let $a = qs('a');
let $p = qs('p');
let $body = qs('body');

let username = prompt('Ingresa tu nombre');
$h2.innertext += `${username.trim()}`;
$h2.style.textTransform = 'uppercase';
$astyle.color = 'green';

let background = confirm('¿Desea colocar un fondo de pantalla?');

background && $body.classList.add('fondo')


$main.style.display = "block"