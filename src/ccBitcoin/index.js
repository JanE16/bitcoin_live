/* eslint-disable no-console,import/prefer-default-export,no-undef */
import getMoney from './services';

export function name() {
  getMoney().then(obj => obj.name)
    .then((v) => {
      const bitcoin = document.querySelector('.bitcoin');
      bitcoin.innerText = v;
    });
}

export function disclaimer() {
  getMoney().then(obj => obj.disclaimer)
    .then((v) => {
      const bitcoin = document.querySelector('.disclaimer');
      bitcoin.innerText = v;
    });
}
export function dolar() {
  getMoney().then(obj => (`${obj.dolarName} : ${obj.dolarRate}`))
    .then((v) => {
      const bitcoin = document.querySelector('.dolar');
      bitcoin.innerText = v;
    });
}

export function euro() {
  getMoney().then(obj => (`${obj.euroName} : ${obj.euroRate}`))
    .then((v) => {
      const bitcoin = document.querySelector('.euro');
      bitcoin.innerText = v;
    });
}

export function pound() {
  getMoney().then(obj => (`${obj.poundName} : ${obj.poundRate}`))
    .then((v) => {
      const bitcoin = document.querySelector('.pound');
      bitcoin.innerText = v;
    });
}
