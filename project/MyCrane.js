import {CGFtexture, CGFobject, CGFappearance} from '../lib/CGF.js';
import { MySphere } from "./MySphere.js";
import { MyCylinder } from "./MyCylinder.js";

export class MyCrane extends CGFobject {
	constructor(scene) {
		super(scene);
        this.angRot = 0;
        this.angInc = 0;
		this.initBuffers();
	}

    initBuffers() {

        //cilindro vertical
        this.cylinderText = new CGFtexture(this.scene, 'images/cubeText.jpg');
        this.cylinder = new MyCylinder(this.scene, 10, 2, 0.3);
        this.cylinderAppearance = new CGFappearance(this.scene);
        this.cylinderAppearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.cylinderAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.cylinderAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.cylinderAppearance.setShininess(120);
        this.cylinderAppearance.setTexture(this.cylinderText);
        this.cylinderAppearance.setTextureWrap('LINEAR', 'LINEAR');

        //esfera
        this.sphereText = new CGFtexture(this.scene, 'images/cubeText.jpg');
        this.sphere = new MySphere(this.scene, 10, 10);
        this.sphereAppearance = new CGFappearance(this.scene);
        this.sphereAppearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.sphereAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.sphereAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.sphereAppearance.setShininess(120);
        this.sphereAppearance.setTexture(this.sphereText);
        this.sphereAppearance.setTextureWrap('LINEAR', 'LINEAR');

        //cilindro movel
        this.cylinderMovelText = new CGFtexture(this.scene, 'images/cubeText.jpg');
        this.cylinderMovel = new MyCylinder(this.scene, 10, 3, 0.2);
        this.cylinderMovelAppearance = new CGFappearance(this.scene);
        this.cylinderMovelAppearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.cylinderMovelAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.cylinderMovelAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.cylinderMovelAppearance.setShininess(120);
        this.cylinderMovelAppearance.setTexture(this.cylinderMovelText);
        this.cylinderMovelAppearance.setTextureWrap('LINEAR', 'LINEAR');

        //cilindro cabo
        this.caboText = new CGFtexture(this.scene, 'images/cordaText.jpg');
        this.cabo = new MyCylinder(this.scene, 10, 3, 0.1);
        this.caboAppearance = new CGFappearance(this.scene);
        this.caboAppearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.caboAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.caboAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.caboAppearance.setShininess(120);
        this.caboAppearance.setTexture(this.caboText);
        this.caboAppearance.setTextureWrap('LINEAR', 'LINEAR');

        //lenha
        /*this.lenhaText = new CGFtexture(this.scene, 'images/lenhaText.jpg');
        this.lenha = new MyCylinder(this.scene, 10, 3, 0.7);
        this.lenhaAppearance = new CGFappearance(this.scene);
        this.lenhaAppearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.lenhaAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.lenhaAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.lenhaAppearance.setShininess(120);
        this.lenhaAppearance.setTexture(this.lenhaText);
        this.lenhaAppearance.setTextureWrap('LINEAR', 'LINEAR');*/
    }

    display(){
        this.scene.pushMatrix()

        //thid.translate()
        this.scene.rotate(this.angRot*Math.PI/180,0,1,0) //rotacao
        //cilindro vertical
        this.scene.pushMatrix();
        this.scene.translate(0, 3, 0);
        this.cylinderAppearance.apply();
        this.cylinder.display();
        this.scene.popMatrix();

        //esfera
        this.scene.pushMatrix();
        this.scene.scale(0.4, 0.4, 0.4);
        this.scene.translate(0, 13, 0);
        this.sphereAppearance.apply();
        this.sphere.display();
        this.scene.popMatrix();

        //cilindro movel
        this.scene.pushMatrix();
      
        this.scene.translate(0, 5.2, 0);
        //this.scene.rotate(this.angRot*Math.PI/180,0,0,1) //rotacao
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.cylinderMovelAppearance.apply();
        this.cylinderMovel.display();
        this.scene.popMatrix();

        //cabo
        this.scene.pushMatrix();
        this.scene.translate(-2.9, 2.3, 0)
        this.caboAppearance.apply();
        this.cabo.display();
        this.scene.popMatrix();
        this.scene.popMatrx();

        //lenha
        /*this.scene.pushMatrix();
        this.scene.translate(0, 2, -2.7);
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.lenhaAppearance.apply();
        this.lenha.display();
        this.scene.popMatrix();*/

    }
    turn(val){ //alterar angulo rotacao
        this.angRot+=val*10;
    }
    tilt(val){ //alterar angulo inclinacao
    }
    reset(){ //voltar ao inicial 

    }
}