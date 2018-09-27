/* eslint-disable no-console,import/prefer-default-export,no-undef */
import getMoney from './services';


// document.addEventListener('DOMContentLoaded', () => {
// const bitcoin = document.querySelector('.bitcoin');
// });


export function name() {
  getMoney().then(obj => obj.name)
    .then((v) => {
      const bitcoin = document.querySelector('.bitcoin');
      bitcoin.innerText = v;
    });
}

// export function disclaimer() {
//   getMoney().then(obj => obj.disclaimer);
// }
// export function dolarName() {
//   getMoney().then(obj => obj.dolarName);
// }
// export function dolarRate() {
//   getMoney().then(obj => obj.dolarRate);
// }
// export function euroName() {
//   getMoney().then(obj => obj.euroName);
// }
// export function euroRate() {
//   getMoney().then(obj => obj.euroRate);
// }
// export function poundName() {
//   getMoney().then(obj => obj.poundName);
// }
// export function poundRate() {
//   getMoney().then(obj => obj.poundRate);
// }
