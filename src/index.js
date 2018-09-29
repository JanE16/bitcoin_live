/* eslint-disable no-unused-vars */

import {
  name, disclaimer, dolar, euro, pound,
} from './ccBitcoin/index';

setInterval(function(){
    name();
    disclaimer();
    dolar();
    euro();
    pound();
}, 3000);

