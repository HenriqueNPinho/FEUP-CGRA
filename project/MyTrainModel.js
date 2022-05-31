import {CGFtexture, CGFobject, CGFappearance} from '../lib/CGF.js';
import { MyCircle } from "./MyCircle.js";
import { MyCylinder } from "./MyCylinder.js";
import { MyUnitCubeQuad } from "./MyUnitCubeQuad.js";
import { MyCrane } from "./MyCrane.js";

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
        this.circle = new MyCircle(this.scene, 20, 1.5/2)
        this.circleAppearance = new CGFappearance(this.scene);
        this.circleAppearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.circleAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.circleAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.circleAppearance.setShininess(120);
        this.circleAppearance.setTexture(this.circleText);

        //tampa
        this.tampaText = new CGFtexture(this.scene, 'images/cubeText.jpg');
        this.tampa = new MyCircle(this.scene, 20, 0.9)
        this.tampaAppearance = new CGFappearance(this.scene);
        this.tampaAppearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.tampaAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.tampaAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.tampaAppearance.setShininess(120);
        this.tampaAppearance.setTexture(this.tampaText);

        //cilindro rodas
        this.cylinderText = new CGFtexture(this.scene, 'images/cilindroText.jpg');
        this.cylinder = new MyCylinder(this.scene, 10, 2.5, 1.5/2);
        this.cylinderAppearance = new CGFappearance(this.scene);
        this.cylinderAppearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.cylinderAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.cylinderAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.cylinderAppearance.setShininess(120);
        this.cylinderAppearance.setTexture(this.cylinderText);
        this.cylinderAppearance.setTextureWrap('LINEAR', 'LINEAR');

        //cilindro cima
        this.cylinderTextCima = new CGFtexture(this.scene, 'images/cilindroText.jpg');
        this.cylinderCima = new MyCylinder(this.scene, 10, 3.5, 0.9);
        this.cylinderAppearanceCima = new CGFappearance(this.scene);
        this.cylinderAppearanceCima.setAmbient(0.3, 0.3, 0.3, 1);
        this.cylinderAppearanceCima.setDiffuse(0.7, 0.7, 0.7, 1);
        this.cylinderAppearanceCima.setSpecular(0.0, 0.0, 0.0, 1);
        this.cylinderAppearanceCima.setShininess(120);
        this.cylinderAppearanceCima.setTexture(this.cylinderTextCima);
        this.cylinderAppearanceCima.setTextureWrap('LINEAR', 'LINEAR');

        //gancho
        this.myCrane = new MyCrane(this.scene);

        //caixa
        this.topC = new CGFtexture(this.scene,'images/metalText.jpg');
        this.frontC = new CGFtexture(this.scene, 'images/metalText.jpg');
        this.backC = new CGFtexture(this.scene, 'images/metalText.jpg');
        this.leftC = new CGFtexture(this.scene, 'images/metalText.jpg');
        this.rightC = new CGFtexture(this.scene,'images/metalText.jpg');
        this.bottomC = new CGFtexture(this.scene, 'images/metalText.jpg');
        this.caixaTexture = [this.topC, this.frontC, this.rightC, this.backC, this.leftC, this.bottomC];
        this.caixa = new MyUnitCubeQuad(this.scene, this.caixaTexture);

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
        this.scene.translate(0, 2.35, -0.1);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.cylinderAppearanceCima.apply();
        this.cylinderCima.display();
        this.scene.popMatrix();

        //chamine
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.scene.scale(0.3, 1, 0.3);
        this.scene.translate(0, -3.7, 8);
        this.cylinderAppearance.apply();
        this.cylinder.display();
        this.scene.popMatrix();

        //cubo cima
        this.scene.pushMatrix();
        this.scene.translate(0, 2.7, 0);
        this.scene.scale(2.0, 2.5, 1.8);
        this.cube.display();
        this.scene.popMatrix();
        
        //tampa frente
        this.scene.pushMatrix();
        this.scene.translate(0, 2.35, 3.4);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.tampaAppearance.apply();
        this.tampa.display();
        this.scene.popMatrix();

        //roda direita tras
        this.scene.pushMatrix();
        this.scene.translate(1.26, 0.6, -1.95);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.circleAppearance.apply();
        this.circle.display();
        this.scene.popMatrix();

        //roda direita frente
        this.scene.pushMatrix();
        this.scene.translate(1.26, 0.6, 1.95);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.circleAppearance.apply();
        this.circle.display();
        this.scene.popMatrix();

        //roda esquerda tras
        this.scene.pushMatrix();
        this.scene.translate(-1.26, 0.6, -1.95);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.circleAppearance.apply();
        this.circle.display();
        this.scene.popMatrix();

        //roda esquerda frente
        this.scene.pushMatrix();
        this.scene.translate(-1.26, 0.6, 1.95);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.circleAppearance.apply();
        this.circle.display();
        this.scene.popMatrix();

        //cilindro roda tras
        this.scene.pushMatrix();
        this.scene.translate(-1.25, 0.7, -2);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.cylinderAppearance.apply();
        this.cylinder.display();
        this.scene.popMatrix();

        //cilindro roda frente
        this.scene.pushMatrix();
        this.scene.translate(-1.25, 0.7, 2);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.cylinderAppearance.apply();
        this.cylinder.display();
        this.scene.popMatrix();
        //gancho
        this.scene.pushMatrix();
        this.myCrane.display();
        this.scene.popMatrix();

        //caixa
        this.scene.pushMatrix();
        this.scene.translate(2.25/2, 2, -2.7);
        this.scene.scale(0, 1, 1.25);
        this.caixa.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-2.25/2, 2, -2.7);
        this.scene.scale(0, 1, 1.25);
        this.caixa.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 2, -2.7+1.25/2);
        this.scene.scale(2.25, 1, 0);
        this.caixa.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 2, -2.7-1.25/2);
        this.scene.scale(2.25, 1, 0);
        this.caixa.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 1.6, -2.7);
        this.scene.scale(2.25, 0, 1.25);
        this.caixa.display();
        this.scene.popMatrix();
    }
}
////this.scene.scale(2.25, 1, 1.25);
