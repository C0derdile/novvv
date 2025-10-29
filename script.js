let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let cars = document.getElementById('cars');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    
     // limit hill1 movement beyond certain scroll (e.g., 500px)
    if (value <= 700) {
     hill1.style.top = value * 1 + 'px';
     text.style.marginTop = value * 1.5 + 'px';
     leaf.style.top = value * -0.4 + 'px';
     leaf.style.left = value * 0.4 + 'px';
     hill5.style.left = value * 0.7 + 'px';
     hill4.style.left = value * -0.7 + 'px';
     
      } else {
     hill1.style.top = '300px'; // stops moving after this point
     text.style.marginTop = '500px';
     leaf.style.top = '500px';
     leaf.style.left = '500px';
     hill5.style.left = '500px';
     hill4.style.left = '-500px';
     
     }
    
     if (value <= 1000) {
        cars.style.left = value * 1 + 'px'

     } else {
        cars.style.left = '1000px';
     }
});
