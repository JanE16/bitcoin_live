export default class Currency {
  constructor({
    euroRate, euroName, dolarRate, dolarName, name, disclaimer, poundRate, poundName,
  }) {
    this.euroRate = euroRate;
    this.euroName = euroName;
    this.dolarRate = dolarRate;
    this.dolarName = dolarName;
    this.poundName = poundName;
    this.poundRate = poundRate;
    this.name = name;
    this.disclaimer = disclaimer;
  }
  //
  // get bitcoinInfo() {
  //   return this.name;
  // }
  //
  // toString() {
  //   return `${this.bitcoinInfo}`;
  // }
}
