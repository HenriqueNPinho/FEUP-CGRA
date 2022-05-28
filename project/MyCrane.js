import {CGFtexture, CGFobject, CGFappearance} from '../lib/CGF.js';
import { MyCircle } from "./MyCircle.js";
import { MySphere } from "./MySphere.js";
import { MyCylinder } from "./MyCylinder.js";
import { MyUnitCubeQuad } from "./MyUnitCubeQuad.js";

export class MyCrane extends CGFobject {
	constructor(scene) {
		super(scene);
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
    }

    display(){

        //cilindro vertical
        this.scene.pushMatrix();
        this.scene.translate(0, 3, -1);
        this.cylinderAppearance.apply();
        this.cylinder.display();
        this.scene.popMatrix();

        //esfera
        this.scene.pushMatrix();
        this.scene.scale(0.4, 0.4, 0.4);
        this.scene.translate(0, 13, -2.5);
        this.sphereAppearance.apply();
        this.sphere.display();
        this.scene.popMatrix();

        //cilindro movel
        this.scene.pushMatrix();
        this.scene.translate(0, 5.2, -1);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.cylinderMovelAppearance.apply();
        this.cylinderMovel.display();
        this.scene.popMatrix();

        //cabo
        this.scene.pushMatrix();
        this.scene.translate(2.9, 2.3, -1)
        this.caboAppearance.apply();
        this.cabo.display();
        this.scene.popMatrix();
    }
}