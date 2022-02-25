const BTActionNode = require("../node/BTActionNode");
class BTIdle extends BTActionNode {
  constructor() {
    super();
  }

  Tick() {
    console.log(" BTIdle ");
    return true;
  }
}

module.exports = BTIdle;
