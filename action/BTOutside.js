const BTConditionNode = require("../node/BTConditionNode");
class BTOutside extends BTConditionNode {
  constructor() {
    super();
  }

  Tick(input,out) {
    console.log(" BTOutside ");
    return input.hasOwnProperty("outside");
  }
}

module.exports = BTOutside;
