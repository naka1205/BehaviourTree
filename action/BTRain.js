const BTConditionNode = require("../node/BTConditionNode");
class BTRain extends BTConditionNode {
  constructor() {
    super();
  }

  Tick(input,out) {
    console.log(" BTRain ");
    return input.hasOwnProperty("rain");
  }
}

module.exports = BTRain;
