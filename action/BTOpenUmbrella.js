const BTActionNode = require("../node/BTActionNode");
class BTOpenUmbrella extends BTActionNode {
  constructor() {
    super();
  }

  Tick() {
    console.log(" BTOpenUmbrella ");
    return true;
  }
}

module.exports = BTOpenUmbrella;
