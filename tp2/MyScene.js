import { CGFscene, CGFcamera, CGFaxis } from "../lib/CGF.js";
import { MyDiamond } from "./MyDiamond.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";
import { MyTriangleBig } from "./MyTriangleBig.js";

/**
 * MyScene
 * @constructor
 */
export class MyScene extends CGFscene {
  constructor() {
    super();
  }
  init(application) {
    super.init(application);
    
    this.initCameras();
    this.initLights();

    //Background color
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

    this.gl.clearDepth(100.0);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.depthFunc(this.gl.LEQUAL);

    //Initialize scene objects
    this.axis = new CGFaxis(this);
    this.diamond = new MyDiamond(this);

    //ex1
    this.triangle = new MyTriangle(this);
    this.parallelogram = new MyParallelogram(this);
    this.triangleSmall = new MyTriangleSmall(this);
    this.triangleBig = new MyTriangleBig(this);

    //Objects connected to MyInterface
    this.displayAxis = true;
    this.scaleFactor = 1;
    //ex1
    
    this.displayDiamond = false;
    this.displayTriangle = false;
    this.displayParallelogram = false;
    this.displayTriangleSmall = false;
    this.displayTriangleBig = false;
  }
  initLights() {
    this.lights[0].setPosition(15, 2, 5, 1);
    this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
    this.lights[0].enable();
    this.lights[0].update();
  }
  initCameras() {
    this.camera = new CGFcamera(
      0.4,
      0.1,
      500,
      vec3.fromValues(15, 15, 15),
      vec3.fromValues(0, 0, 0)
    );
  }
  
  //vermelho
  /*setDefaultAppearance() {
    this.setAmbient(1, 0, 0, 1);
    this.setDiffuse(1, 0, 0, 1);
    this.setSpecular(1, 0, 0, 1);
    this.setShininess(10.0);
  }*/

  //azul
  setDefaultAppearance() {
    this.setAmbient(0, 0, 1, 1);
    this.setDiffuse(0, 0, 1, 1);
    this.setSpecular(0, 0, 1, 1);
    this.setShininess(10.0);
  }

  display() {
    // ---- BEGIN Background, camera and axis setup
    // Clear image and depth buffer everytime we update the scene
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    // Initialize Model-View matrix as identity (no transformation
    this.updateProjectionMatrix();
    this.loadIdentity();
    // Apply transformations corresponding to the camera position relative to the origin
    this.applyViewMatrix();

    // Draw axis
    if (this.displayAxis) this.axis.display();

    this.setDefaultAppearance();

    var sca = [
      this.scaleFactor,
      0.0,
      0.0,
      0.0,
      0.0,
      this.scaleFactor,
      0.0,
      0.0,
      0.0,
      0.0,
      this.scaleFactor,
      0.0,
      0.0,
      0.0,
      0.0,
      1.0,
    ];

    this.multMatrix(sca);
    /*
    this.pushMatrix();
    this.scale(2,2,2);
    this.diamond.display();
    this.popMatrix();
    this.diamond.display();
    */

    this.pushMatrix();
    this.rotate(Math.PI, 1,0,0)
    this.parallelogram.display();
    this.popMatrix();
    this.pushMatrix();
    this.translate(-1,-1,0);
    this.triangleBig.display();
    this.popMatrix();
    this.pushMatrix();
    this.translate(-3,0,0);
    this.rotate(Math.PI,1,0,0);
    this.triangleSmall.display();
    this.popMatrix();
    this.pushMatrix()
    this.translate(0,2,0);
    this.rotate(Math.PI,1,0,0);
    this.translate(-2,0,0);
    this.triangleBig.display();
    this.popMatrix(); 
    this.pushMatrix();
    this.translate(-2,3,0);
    this.diamond.display();
    this.popMatrix();
    this.pushMatrix();
    this.translate(3,0,0);
    this.rotate(Math.PI/2, 0, 0, 1);
    this.triangleSmall.display();
    this.popMatrix();
    this.pushMatrix();
    this.translate(4, 0, 0);
    this.rotate(3*Math.PI/2, 0,0,1);
    this.triangle.display();
    this.popMatrix();


    
    // ---- BEGIN Primitive drawing section ex1
    
    if(this.displayDiamond) this.diamond.display();
    if(this.displayTriangle) this.triangle.display();
    if(this.displayParallelogram) this.parallelogram.display();
    if(this.displayTriangleSmall) this.triangleSmall.display();
    if(this.displayTriangleBig) this.triangleBig.display();
    
    // ---- END Primitive drawing section
  }
}
