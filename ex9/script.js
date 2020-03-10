'use strict';

let box = document.querySelector('div.box'),
    btn = document.querySelector('.btn'),
    pos =0;

function timing(timeFraction){

}

function animate({timing, draw, duration}) {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      // вычисление текущего состояния анимации
      let progress = timing(timeFraction);
  
      draw(progress); // отрисовать её
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  }

btn.addEventListener('click',function(event){

    let start = performance.now();

    animate({
        duration: 1000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw: function(progress) {
          box.style.top = progress * 100 + '%';
        }
      });

    /*
    let idInterval = setInterval(() => {
        if (pos<300){
            console.log('pos: '+pos);
            box.style.top = ++pos+'px';    
            box.style.left = pos+'px';    
        } else {
            clearInterval(idInterval);
        }
    }, 20);*/
    
});