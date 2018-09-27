/* eslint-disable no-console */

import convertInfo from './converter';

const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

export default async function () {
  try {
    // eslint-disable-next-line no-undef
    const response = await fetch(URL);
    if (response.ok) {
      const btc = await response.json();
      return convertInfo(btc);
    }
    throw Error('response not ok');
  } catch (err) {
    console.warn('zjebało się');
    return '';
  }
}
