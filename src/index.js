import './sass/main.scss';
import colors from './color.js'


const btnStartRef = document.querySelector('#start');
const btnStopRef = document.querySelector('#stop');
const bodyRef = document.querySelector('body');
let switchId = null;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };


  const onBtnStartClick = function (){
    btnStartRef.disabled = true;
    btnStopRef.disabled = false;
    switchId = setInterval(()=>{
    let idx = randomIntegerFromInterval(0, colors.length-1)
    setBodyBgColor (colors[idx])
  }, 2000)
  };
  
  function setBodyBgColor(color) {
    bodyRef.style.backgroundColor = color;
  }


  btnStartRef.addEventListener('click', onBtnStartClick)
  btnStopRef.addEventListener('click', () => {
    clearInterval(switchId);
    btnStartRef.disabled = false;
    btnStopRef.disabled = true;
  });

  