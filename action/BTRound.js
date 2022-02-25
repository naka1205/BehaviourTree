const BTActionNode = require("../node/BTActionNode");
class BTRound extends BTActionNode {
  constructor() {
    super();
  }

  Tick() {
      console.log(" BTRound ");
      return true;
  }

}

module.exports = BTRound;
