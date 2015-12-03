import GomlTreeNodeBase = require("../../GomlTreeNodeBase");
import OrderedTopLevelNodeBase = require("./OrderedTopLevelNodeBase");
class CanvasesNode extends OrderedTopLevelNodeBase {
  constructor(elem: HTMLElement, parent: GomlTreeNodeBase) {
    super(elem, parent);
  }

  public get loadPriorty():number
  {
    return 2000;
  }

}

export = CanvasesNode;