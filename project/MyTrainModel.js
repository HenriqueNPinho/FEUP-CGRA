import {CGFtexture, CGFobject, CGFappearance} from '../lib/CGF.js';
import { MyCircle } from "./MyCircle.js";
import { MyCylinder } from "./MyCylinder.js";
import { MyUnitCubeQuad } from "./MyUnitCubeQuad.js";

export class MyTrainModel extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}

    initBuffers() {

        //cubo
        this.top = new CGFtexture(this.scene,'images/cubeText.jpg');
        this.front = new CGFtexture(this.scene, 'images/cubeText.jpg');
        this.back = new CGFtexture(this.scene, 'images/cubeText.jpg');
        this.left = new CGFtexture(this.scene, 'images/cubeText.jpg');
        this.right = new CGFtexture(this.scene,'images/cubeText.jpg');
        this.bottom = new CGFtexture(this.scene, 'images/cubeText.jpg');
        this.cubeTexture = [this.top, this.front, this.right, this.back, this.left, this.bottom];
        this.cube = new MyUnitCubeQuad(this.scene, this.cubeTexture);

        //circulo roda
        this.circleText = new CGFtexture(this.scene, 'images/circle.jpg');
        this.circle = new MyCircle(this.scene, 20, 0.7)
        this.circleAppearance = new CGFappearance(this.scene);
        this.circleAppearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.circleAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.circleAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.circleAppearance.setShininess(120);
        this.circleAppearance.setTexture(this.circleText);

        //tampa
        this.tampaText = new CGFtexture(this.scene, 'images/cubeText.jpg');
        this.tampa = new MyCircle(this.scene, 20, 1.3/2)
        this.tampaAppearance = new CGFappearance(this.scene);
        this.tampaAppearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.tampaAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.tampaAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.tampaAppearance.setShininess(120);
        this.tampaAppearance.setTexture(this.tampaText);

        //cilindro
        this.cylinderText = new CGFtexture(this.scene, 'images/cilindroText.jpg');
        this.cylinder = new MyCylinder(this.scene, 10, 1, 0.5)
        this.cylinderAppearance = new CGFappearance(this.scene);
        this.cylinderAppearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.cylinderAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.cylinderAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.cylinderAppearance.setShininess(120);
        this.cylinderAppearance.setTexture(this.cylinderText);
        this.cylinderAppearance.setTextureWrap('LINEAR', 'LINEAR');
    }

    display(){

        //retangulo
        this.scene.pushMatrix();
        this.scene.translate(0, 1, 0);
        this.scene.scale(2.5, 1, 7.5);
        this.cube.display();
        this.scene.popMatrix();

        //cilindro cima
        this.scene.pushMatrix();
        this.scene.translate(0, 2.1, -0.1);
        this.scene.scale(1.3, 1.3, 3.5);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.cylinderAppearance.apply();
        this.cylinder.display();
        this.scene.popMatrix();

        //chamine
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.scene.scale(0.5, 1, 0.5);
        this.scene.translate(0, -3.5, 4.5);
        this.cylinderAppearance.apply();
        this.cylinder.display();
        this.scene.popMatrix();

        //cubo cima
        this.scene.pushMatrix();
        this.scene.translate(0, 2.7, -1);
        this.scene.scale(2.0, 2.5, 1.8);
        this.cube.display();
        this.scene.popMatrix();
        
        //tampa frente
        this.scene.pushMatrix();
        this.scene.translate(0, 2.1, 3.4);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.tampaAppearance.apply();
        this.tampa.display();
        this.scene.popMatrix();

        //roda direita tras
        this.scene.pushMatrix();
        this.scene.translate(1.26, 1.5/2, -1.95);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.circleAppearance.apply();
        this.circle.display();
        this.scene.popMatrix();

        //roda direita frente
        this.scene.pushMatrix();
        this.scene.translate(1.26, 1.5/2, 1.95);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.circleAppearance.apply();
        this.circle.display();
        this.scene.popMatrix();

        //roda esquerda tras
        this.scene.pushMatrix();
        this.scene.translate(-1.26, 1.5/2, -1.95);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.circleAppearance.apply();
        this.circle.display();
        this.scene.popMatrix();

        //roda esquerda frente
        this.scene.pushMatrix();
        this.scene.translate(-1.26, 1.5/2, 1.95);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.circleAppearance.apply();
        this.circle.display();
        this.scene.popMatrix();

        //cilindro roda tras
        this.scene.pushMatrix();
        this.scene.scale(2.5, 1.5, 1.5)
        this.scene.translate(-0.5, 0.5, -1.3);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.cylinderAppearance.apply();
        this.cylinder.display();
        this.scene.popMatrix();

        //cilindro roda frente
        this.scene.pushMatrix();
        this.scene.scale(2.5, 1.5, 1.5)
        this.scene.translate(-0.5, 0.5, 1.3);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.cylinderAppearance.apply();
        this.cylinder.display();
        this.scene.popMatrix();
    }
}

