import { CGFscene, CGFcamera, CGFaxis, CGFappearance, CGFtexture } from "../lib/CGF.js";
import { MyPlane } from "./MyPlane.js";
import {CGFcamera2} from "./CFGcamera2.js";
import { MyTrack } from "./MyTrack.js";
import { MyCircle } from "./MyCircle.js";
import { MyCylinder } from "./MyCylinder.js";
import { MySphere } from "./MySphere.js";
import { MyUnitCubeQuad } from "./MyUnitCubeQuad.js";
import { MyCubeMap } from "./MyCubeMap.js";
import { MyTrainModel } from "./MyTrainModel.js";
import { MyMovingTrain } from "./MyMovingTrain.js";
import { MyCrane } from "./MyCrane.js";

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
        this.displayEarth=false;
        this.displayCubeMap=true;

        this.track=[
          
            {x: 20, z: -25, type: 'simple'}, //A

            {x: 0, z: -25, type: 'station'}, //B
          
            {x: -20, z: -25, type: 'simple'}, //C

            {x: -25, z: -20, type: 'simple'}, //D

            {x: -25, z: 10, type: 'simple'}, //E
            
            {x:-15, z: 30, type: 'simple'}, //F

            {x: 6, z: 24.75, type: 'station'}, //G

           {x: 25, z: 20, type: 'simple'}, // H

           {x: 22.5, z: -2.5, type: 'station'}, //G
          
        ] 
        this.displayAll=false;

      
 
        //Track
        this.myTrack =  new MyTrack(this, this.track);

        //Train
        this.myTrainModel = new MyTrainModel(this);

        this.myMovingTrain = new MyMovingTrain(this, this.track);
        //Crane
        //this.myCrane = new MyCrane(this);

        //Earth
        this.earthText = new CGFtexture(this, 'images/earth.jpg');
        this.myEarth = new MySphere(this, 16, 8);
       
        this.earthAppearance = new CGFappearance(this);
        this.earthAppearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.earthAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.earthAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.earthAppearance.setShininess(120);
        this.earthAppearance.setTexture(this.earthText);
        this.earthAppearance.setTextureWrap('LINEAR', 'LINEAR');

        //cube map
        this.top = new CGFtexture(this,'images/demo_cubemap/top.png');
        this.front = new CGFtexture(this, 'images/demo_cubemap/front.png');
        this.back = new CGFtexture(this, 'images/demo_cubemap/back.png');
        this.left = new CGFtexture(this, 'images/demo_cubemap/left.png');
        this.right = new CGFtexture(this,'images/demo_cubemap/right.png');
        this.bottom = new CGFtexture(this, 'images/demo_cubemap/bottom.png');

        this.top1 = new CGFtexture(this,'images/castle/posy.jpg');
        this.front1 = new CGFtexture(this, 'images/castle/posz.jpg');
        this.back1 = new CGFtexture(this, 'images/castle/negz.jpg');
        this.left1 = new CGFtexture(this, 'images/castle/negx.jpg');
        this.right1 = new CGFtexture(this,'images/castle/posx.jpg');
        this.bottom1 = new CGFtexture(this, 'images/castle/negy.jpg');

        this.top2 = new CGFtexture(this,'images/field/posy.jpg');
        this.front2 = new CGFtexture(this, 'images/field/posz.jpg');
        this.back2 = new CGFtexture(this, 'images/field/negz.jpg');
        this.left2 = new CGFtexture(this, 'images/field/negx.jpg');
        this.right2 = new CGFtexture(this,'images/field/posx.jpg');
        this.bottom2 = new CGFtexture(this,'images/field/negy.jpg');


        this.demo_cubemap=[this.top, this.front, this.right, this.back, this.left, this.bottom];
        this.demo_cubemap1=[this.top1, this.front1, this.right1, this.back1, this.left1, this.bottom1];
        this.demo_cubemap2=[this.top2, this.front2, this.right2, this.back2, this.left2, this.bottom2];
        this.selectedMap = 0;
        this.objectsIds = { 'Default': 0, 'Castle': 1, 'Field':2 };
        this.cubeMaps = [this.demo_cubemap, this.demo_cubemap1, this.demo_cubemap2];
        this.myCubeMap = new MyCubeMap(this, this.cubeMaps[this.selectedMap]);
     
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

    checkKeys() {

        var text = "Keys pressed: ";
        var keysPressed = false;

        if(this.gui.isKeyPressed("KeyA")){ //esquerda
            text += " A ";
            keysPressed = true;
            this.myMovingTrain.train.myCrane.turn(1);
        }
        if(this.gui.isKeyPressed("KeyD")){ //direita
            text += " D ";
            keysPressed = true;
            this.myMovingTrain.train.myCrane.turn(-1);
        }
        if(this.gui.isKeyPressed("KeyW")){ //cima
            text += " W ";
            keysPressed = true;
        }
        if(this.gui.isKeyPressed("KeyS")){ //baixo
            text += " S ";
            keysPressed = true;
        }
        if(this.gui.isKeyPressed("KeyP")){ //agarrar e largar
            text += " P ";
            keysPressed = true;
        }
        if(this.gui.isKeyPressed("KeyR")){ //reset
            text += " R ";
            keysPressed = true;
        }
        if(this.gui.isKeyPressed("KeyC")){ //partir sem carga
            text += " C ";
            keysPressed = true;
            if(this.myMovingTrain.currState=='stoped'){
                this.myMovingTrain.currState='accelaration'
            }
        }
        if(keysPressed){
            console.log(text);
        }
    }

    // called periodically (as per setUpdatePeriod() in init())
    update(t){
        this.checkKeys();
        //To be done...
        this.myMovingTrain.update(t)
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

        //Cube map
        if(this.displayCubeMap){
        this.pushMatrix();
        this.scale(1.5,1.5,1.5)
        this.myCubeMap.display()
        this.popMatrix();
        }

       if(this.displayEarth){
            this.earthAppearance.apply()
            this.myEarth.display()
        }
        else{
           // this.translate(0,-37,0)
            this.myTrack.display()
           // this.myTrainModel.display();
            //this.myCrane.display();
        }
        this.myMovingTrain.display()
    }

    updateCubeMapTexture() {
        this.myCubeMap.updateTexture(this.cubeMaps[this.selectedMap]);
    }
}

//Checklist
//cena da luz do cubo
//rodas a andar
//tirar tampa da caixa - usar cubos
//lenha
