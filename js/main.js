/*Домашка на четверг 14.10.21
 1)Сделать квадрат по центру страницы, рядом 4 кнопки (up, down, left,right). При клике на соответствующую кнопку квадрат приходит в движение. Далее проделать аналогичное для клавиш на клавиатуре. 
2) При нажатии на пробел квадрат увеличивается, когда пробел отпускаем его величина фиксируется (нажали когда было 50 px, когда отпустили 250px)*/

const btnUp = document.querySelector('.box__2-up');
const btnLeft = document.querySelector('.box__2-left');
const btnDown = document.querySelector('.box__2-down');
const btnRight = document.querySelector('.box__2-right');
const box = document.querySelector('.box__1');

btnUp.addEventListener('mousedown', () => {
  box.classList.add('move-up');
});
btnUp.addEventListener('mouseup', () => {
  box.classList.remove('move-up');
});
btnLeft.addEventListener('mousedown', () => {
  box.classList.add('move-left');
});
btnLeft.addEventListener('mouseup', () => {
  box.classList.remove('move-left');
});
btnDown.addEventListener('mousedown', () => {
  box.classList.add('move-down');
});
btnDown.addEventListener('mouseup', () => {
  box.classList.remove('move-down');
});
btnRight.addEventListener('mousedown', () => {
  box.classList.add('move-right');
});
btnRight.addEventListener('mouseup', () => {
  box.classList.remove('move-right');
});

const handleKeys = (event) => {
  console.log(event);
  if(event.key === 'ArrowUp'){
    box.classList.add('move-up');
  } else {
    box.classList.remove('move-up');
  };  
  if (event.key === 'ArrowLeft'){
    box.classList.add('move-left');
  } else {
    box.classList.remove('move-left');
  };
  if (event.key === 'ArrowDown'){
    box.classList.add('move-down');
  } else {
    box.classList.remove('move-down');
  }  
  if (event.key === 'ArrowRight'){
    box.classList.add('move-right');
  } else {
    box.classList.remove('move-right');
  };  
  if (event.key === 32){
    box.classList.add('change-size');
  } else {
    box.classList.remove('change-size');
  };
};
document.addEventListener('keydown', handleKeys);


