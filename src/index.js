import './sass/main.scss';
import colors from './color.js'


const btnStartRef = document.querySelector('#start');
const btnStopRef = document.querySelector('#stop');


const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };