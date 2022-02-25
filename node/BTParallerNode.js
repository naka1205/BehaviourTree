const BTNode = require("./BTNode");
class BTParallerNode extends BTNode {
  constructor() {
    super();
  }

  Tick(input, out) {
    for (var i = 0; i < this.Children.length; i++) {
      this.Children[i].Tick(input, out);
    }
    return false;
  }
}

module.exports = BTParallerNode;
