const BTConditionNode = require("../node/BTConditionNode");
class BTIsNight extends BTConditionNode {
  constructor() {
    super();
  }

  Tick(input,out) {
    console.log(" BTIsNight ");
    return input.hasOwnProperty("night");
  }
}

module.exports = BTIsNight;
