import DebugSprite = require("../../../Core/Materials/DebugSpriteMaterial");
import GomlTreeNodeBase = require("../../GomlTreeNodeBase");
import GomlLoader = require("../../GomlLoader");
import Color4 = require("../../../Base/Color/Color4");
import JThreeID = require("../../../Base/JThreeID");
import MaterialNodeBase = require('./MaterialNodeBase');
import Material = require('../../../Core/Materials/Material')
import JThreeContextProxy = require('../../../Core/JThreeContextProxy');
import ViewportNode = require('../Renderers/ViewPortNode');
class SpriteNode extends MaterialNodeBase {
    material: DebugSprite;

    constructor(elem: HTMLElement, loader: GomlLoader, parent: GomlTreeNodeBase) {
        super(elem, loader, parent);
        this.attributes.defineAttribute({
            "target": {
                value: "rb1", converter: "string"
            },
            "viewport":
            {//TODO implement texture node
                value: "viewport", converter: "string", handler: (v) => {
                    var context = JThreeContextProxy.getJThreeContext();
                    var viewportTargets = loader.getNodeByQuery(v.Value);
                    if (viewportTargets.length > 0) {
                        var viewport = <ViewportNode>viewportTargets[0];
                        context.ResourceManager.getTextureHandler(viewport.TargetViewport.ID + ".deffered." + this.attributes.getValue("target"), (v) => {
                            this.material.Texture = v;
                        });
                    }
                }
            },
            "R":
            {
                value: "0", converter: "number", handler: (v) => { this.material.CTR = v.Value; }
            },

            "G":
            {
                value: "1", converter: "number", handler: (v) => { this.material.CTG = v.Value; }
            },

            "B":
            {
                value: "2", converter: "number", handler: (v) => { this.material.CTB = v.Value; }
            },

            "A":
            {
                value: "3", converter: "number", handler: (v) => { this.material.CTA = v.Value; }
            },
        });

    }

    protected ConstructMaterial(): Material {
        this.material = new DebugSprite();
        return this.material;
    }

    beforeLoad() {
        super.beforeLoad();
    }

}

export =SpriteNode;
