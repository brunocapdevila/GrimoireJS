import ViewCamera=require("./ViewCameraBase");
import Matrix = require("../../Math/Matrix");
import glm = require("gl-matrix");
class PerspectiveCamera extends ViewCamera
{
  private fovy:number=Math.PI/4;
  private aspect:number=1;
  private near:number=0.1;
  private far:number=10;

  private updateProjection() {
    glm.mat4.perspective(this.projectionMatrix.rawElements,this.fovy,this.aspect,this.near,this.far);
    this.updateViewProjectionMatrix();
  }

    public get Fovy():number
  {
    return this.fovy;
  }

    public set Fovy(fovy:number)
  {
    this.fovy=fovy;
    this.updateProjection();
  }

    public get Aspect():number
  {
    return this.aspect;
  }

    public set Aspect(aspect:number)
  {
    this.aspect=aspect;
    this.updateProjection();
  }

    public get Near():number
  {
    return this.near;
  }

    public set Near(near:number)
  {
    this.near=near;
    this.updateProjection();
  }

    public get Far():number
  {
    return this.far;
  }

    public set Far(far:number)
  {
    this.far=far;
    this.updateProjection();
  }
}

export=PerspectiveCamera;
