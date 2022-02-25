const BTResult = require("./BTResult");
class BTNode {
  Parent = null;
  Children = null;
  constructor() {
    this.Children = [];
  }

  Tick() {
    return true;
  }

  AddChild(p) {
    p.Parent = this;
    this.Children.push(p);
  }

  RemoveChild(p) {
    for (var i = 0; i < this.Children.length; i++) {
      if (this.Children[i] == p) {
        p.Parent = null;
        this.Children.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}

module.exports = BTNode;
