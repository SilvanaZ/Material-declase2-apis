function qs(element){
    return document.querySelector(element)
}

let $main = qs('main');
let $h2 = qs('h2');
let $a = qs('a');
let $p = qs('p');
let $body = qs('body');

let username = prompt('Ingresa tu nombre');
$h2.innerHTML += `<a href="http://google.com">${username.trim()}`;
$h2.style.textTransform = 'uppercase';
$astyle.color = 'green';

let background = confirm('¿Desea colocar un fondo de pantalla?');

background && $body.classList.add('fondo')

/* for(let i=0; i <$p.length; i++){
    if(index % 2 == 0){
        element.classList.add('destacadoPar');
    }else{
        element.classList.add('destacadoImpar')
    }
} */





$main.style.display = "block"