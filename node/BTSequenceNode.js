const BTNode = require("./BTNode");
class BTSequenceNode extends BTNode {
  constructor() {
    super();
  }

  Tick(input, out) {
    for (var i = 0; i < this.Children.length; i++) {
      if (!this.Children[i].Tick(input, out)) {
        return false;
      }
    }
    return true;
  }
}

module.exports = BTSequenceNode;
