const imgArray= ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

//stringa vuota che conterrà tutto l'elenco dei tag
let images ='';

const box = document.querySelector('.box');

//ciclo:

for(i = 0; i < imgArray.length; i++){
  //inserire foto
  

}
//contatore immagini inizializzato a zero
let counterImages = 0;
// tasto per andare avanti
const next = document.querySelector('btn-up');
//tasto per andare indietro
const prev = document.querySelector('btn-down');
console.log(next);

//aggiungo le foto nell'html
box.innerHTML += images;


const items = document.getElementsByClassName('item');

items[counterImages].classList.add('active');

next.addEventListener('click',function(){
  console.log('NEXT');

});


