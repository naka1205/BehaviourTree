const BTNode = require("./BTNode");
const BTResult = require("./BTResult");
class BTActionNode extends BTNode {
  State = 0;
  constructor() {
    super();
    this.State = BTResult.Idle;
  }

  Enter() {
    this.State = BTResult.Executing;
    this.translateIn();
    return true;
  }

  Exit() {
    this.State = BTResult.Completed;
    this.translateOut();
    return true;
  }

  translateIn() {}

  translateOut() {}
}

module.exports = BTActionNode;
