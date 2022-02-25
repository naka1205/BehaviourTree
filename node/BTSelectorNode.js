const BTNode = require("./BTNode");
class BTSelectorNode extends BTNode {
  constructor() {
    super();
  }

  Tick(input, out) {
    for (var i = 0; i < this.Children.length; i++) {
      if (this.Children[i].Tick(input, out)) {
        return true;
      }
    }
    return false;
  }
}

module.exports = BTSelectorNode;
