/* eslint-disable no-console,import/prefer-default-export,no-undef */
import getMoney from './services';


export function disclaimer() {
  getMoney().then(obj => obj.disclaimer)
    .then((v) => {
      const bitcoin = document.querySelector('.disclaimer');
      bitcoin.innerText = v;
    });
}
export function dolar() {
  getMoney().then(obj => (`${obj.dolarRate}`))
    .then((v) => {
      const bitcoin = document.querySelector('.dolar');
      const upDown = document.querySelector('.up-down');
      const arrow = document.querySelector('.arrow');
      const arrowWrapper = document.querySelector('.arrow-wrapper');
      if(bitcoin.innerText <= v) {
          bitcoin.style.color = 'green';
          upDown.innerText = 'UP';
          upDown.style.color = 'green';
          arrow.style.fill = 'green';
          arrowWrapper.style.transform = 'rotate(90deg)';
          arrowWrapper.style.transformOrigin = '50% 50%';

      } else {
          bitcoin.style.color = 'red';
          upDown.innerText = 'DOWN';
          upDown.style.color = 'red';
          arrow.style.fill = 'red';
          arrowWrapper.style.transform = 'rotate(270deg)';
          arrowWrapper.style.transformOrigin = '30% 50%';
      }
      bitcoin.innerText = `${v}`;
    });
}

export function euro() {
  getMoney().then(obj => (`${obj.euroRate}`))
    .then((v) => {
      const bitcoin = document.querySelector('.euro');
        if(bitcoin.innerText <= v) {
            bitcoin.style.color = 'green'
        } else {
            bitcoin.style.color = 'red';
        }
      bitcoin.innerText = `${v}`;
    });
}

export function pound() {
  getMoney().then(obj => (`${obj.poundRate}`))
    .then((v) => {
      const bitcoin = document.querySelector('.pound');
        if(bitcoin.innerText <= v) {
            bitcoin.style.color = 'green'
        } else {
            bitcoin.style.color = 'red';
        }
      bitcoin.innerText = `${v}`;
    });
}
