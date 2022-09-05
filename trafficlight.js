
let red = document.querySelector('#red');
let yellow = document.querySelector('#yellow');
let green = document.querySelector('#green');
let counter = document.querySelector('.countter');
let timer = 10;
let light = 'red';

 red.style.backgroundColor = 'red'
 yellow.style.backgroundColor = 'black'
 green.style.backgroundColor = 'black'
 
Traffic = setInterval(() => {

    if (timer == 0 && light == 'red') {
        green.style.backgroundColor = 'green'
        red.style.backgroundColor = 'black'
         yellow.style.backgroundColor = 'black'
         light = 'green'
    }
   else if (timer > 0 && timer <= 4 && light == 'red' ) {
      yellow.style.backgroundColor = 'yellow'
    }
    else if (timer == 0 && light == 'green' ) {
        red.style.backgroundColor = 'red' 
        green.style.backgroundColor = 'black'

        light = 'red'
    } 
    if (timer < 0) {
        timer = 10 
    }  

    counter.innerHTML = timer

     timer-- ;

}, 1000);








