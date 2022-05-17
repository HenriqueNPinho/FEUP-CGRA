import { CGFscene, CGFcamera, CGFaxis, CGFappearance, CGFtexture } from "../lib/CGF.js";
import { MyPlane } from "./MyPlane.js";
import {CGFcamera2} from "./CFGcamera2.js";
import { MyTrack } from "./MyTrack.js";
import { MyCircle } from "./MyCircle.js";
import { MyCylinder } from "./MyCylinder.js";
import { MySphere } from "./MySphere.js";
import { MyUnitCubeQuad } from "./MyUnitCubeQuad.js";

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

        this.setUpdatePeriod(50);
        
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.plane = new MyPlane(this, 20, 0,1,0,1);

        //Objects connected to MyInterface
        this.displayAxis = true;

        this.track=[
            {x: 15, z: -20, type: 'simple'}, //A

            {x: 0, z: -20, type: 'station'}, //B
          
            {x: -15, z: -20, type: 'curve'}, //C
          
            {x: -20, z: -15, type: 'simple'}, //D

            {x: -20, z: 5, type: 'curve'}, //E

           // {x:0, z: 20, type: 'simple'}, //F
            
            {x:-10, z: 20, type: 'station'}, //G

            {x: 15, z: 10, type: 'simple'}, //
          

        ]

       
        
        /*Textures  */

            //ambiente
        this.top = new CGFtexture(this,'images/cubeText.jpg');
        this.front = new CGFtexture(this, 'images/cubeText.jpg');
        this.back = new CGFtexture(this, 'images/cubeText.jpg');
        this.left = new CGFtexture(this, 'images/cubeText.jpg');
        this.right = new CGFtexture(this,'images/cubeText.jpg');
        this.bottom = new CGFtexture(this, 'images/cubeText.jpg');

        this.circleText = new CGFtexture(this, 'images/circle.jpg');
        this.earthText = new CGFtexture(this, 'images/earth.jpg');
        this.cylinderText = new CGFtexture(this, 'images/cilindroText.jpg');


        this.myTrack =  new MyTrack(this, this.track)
       

        //Circle
        this.myCircle = new MyCircle(this, 10, 1)

        this.circleAppearance = new CGFappearance(this);
        this.circleAppearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.circleAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.circleAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.circleAppearance.setShininess(120);
        this.circleAppearance.setTexture(this.circleText);
        //this.circleAppearance.setTextureWrap('LINEAR', 'LINEAR');

        //Earth
        this.myEarth = new MySphere(this, 16, 8);
        this.displayEarth=false;

        this.earthAppearance = new CGFappearance(this);
        this.earthAppearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.earthAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.earthAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.earthAppearance.setShininess(120);
        this.earthAppearance.setTexture(this.earthText);
        this.earthAppearance.setTextureWrap('LINEAR', 'LINEAR');

        //cylinder
        this.myCylinder = new MyCylinder(this, 10, 3, 0.5)

        this.cylinderAppearance = new CGFappearance(this);
        this.cylinderAppearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.cylinderAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.cylinderAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.cylinderAppearance.setShininess(120);
        this.cylinderAppearance.setTexture(this.cylinderText);
        this.cylinderAppearance.setTextureWrap('LINEAR', 'LINEAR');

        //cube map
        this.cubeTexture=[this.top, this.front, this.right, this.back, this.left, this.bottom];
        this.myCube = new MyUnitCubeQuad(this, this.cubeTexture);

    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera2(0.4, 0.1, 500, vec3.fromValues(30,30,30), vec3.fromValues(0, 0, 0));
    }

    setDefaultAppearance() {
        this.setAmbient(0.9, 0.9, 0.9, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setEmission(0,0,0,1);
        this.setShininess(10.0);
    }

    // called periodically (as per setUpdatePeriod() in init())
    update(t){
        //To be done...
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
        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        /*this.pushMatrix();
        this.scale(50,1,50);
        this.rotate(-Math.PI*0.5, 1,0,0);
        this.plane.display();
        this.popMatrix();*/
        // ---- END Primitive drawing section
        this.myTrack.display()
        this.myCube.display()
        if(this.displayEarth){
            this.earthAppearance.apply()
            this.myEarth.display()
        }
        else{
       
        this.circleAppearance.apply();
        this.myCircle.display();

        this.cylinderAppearance.apply();
        this.myCylinder.display(); }
    }
}
