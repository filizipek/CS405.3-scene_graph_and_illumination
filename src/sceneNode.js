/**
 * @class SceneNode
 * @desc A SceneNode is a node in the scene graph.
 * @property {MeshDrawer} meshDrawer - The MeshDrawer object to draw
 * @property {TRS} trs - The TRS object to transform the MeshDrawer
 * @property {SceneNode} parent - The parent node
 * @property {Array} children - The children nodes
 */

class SceneNode {
    constructor(meshDrawer, trs, parent = null) {
        this.meshDrawer = meshDrawer;
        this.trs = trs;
        this.parent = parent;
        this.children = [];

        if (parent) {
            this.parent.__addChild(this);
        }
    }

    __addChild(node) {
        this.children.push(node);
    }

    draw(mvp, modelView, normalMatrix, modelMatrix) {
        /**
         * @Task1 : Implement the draw function for the SceneNode class.
         */
    
        var transformedMvp = mvp;
        var transformedModelView = modelView;
        var transformedNormals = normalMatrix;
        var transformedModel = modelMatrix;
    
        // Computing the updated transformations for the current node
        const currentModelMatrix = MatrixMult(transformedModel, this.trs.getTransformationMatrix());
        const currentModelViewMatrix = MatrixMult(transformedModelView, this.trs.getTransformationMatrix());
        const currentNormalMatrix = MatrixMult(transformedNormals, this.trs.getTransformationMatrix());
        const currentMvp = MatrixMult(transformedMvp, this.trs.getTransformationMatrix());
    
        // Drawing the MeshDrawer if it exists
        if (this.meshDrawer) {
            this.meshDrawer.draw(currentMvp, currentModelViewMatrix, currentNormalMatrix, currentModelMatrix);
        }
    
        // Recursively drawing all child nodes
        for (const child of this.children) {
            child.draw(currentMvp, currentModelViewMatrix, currentNormalMatrix, currentModelMatrix);
        }
    }
    

}