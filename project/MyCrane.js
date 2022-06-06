import {CGFtexture, CGFobject, CGFappearance} from '../lib/CGF.js';
import { MySphere } from "./MySphere.js";
import { MyCylinder } from "./MyCylinder.js";

export class MyCrane extends CGFobject {
	constructor(scene) {
		super(scene);
        this.angRot = 0;
        this.angInc = 0;

        this.picking = 0;
        this.madeiraBox = 0;
		this.initBuffers();
	}

    initBuffers() {

        //cilindro vertical
        this.cylinderText = new CGFtexture(this.scene, 'images/trainModel/cubeText.jpg');
        this.cylinder = new MyCylinder(this.scene, 10, 2, 0.3);
        this.cylinderAppearance = new CGFappearance(this.scene);
        this.cylinderAppearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.cylinderAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.cylinderAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.cylinderAppearance.setShininess(120);
        this.cylinderAppearance.setTexture(this.cylinderText);
        this.cylinderAppearance.setTextureWrap('LINEAR', 'LINEAR');

        //esfera
        this.sphereText = new CGFtexture(this.scene, 'images/trainModel/cubeText.jpg');
        this.sphere = new MySphere(this.scene, 10, 10);
        this.sphereAppearance = new CGFappearance(this.scene);
        this.sphereAppearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.sphereAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.sphereAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.sphereAppearance.setShininess(120);
        this.sphereAppearance.setTexture(this.sphereText);
        this.sphereAppearance.setTextureWrap('LINEAR', 'LINEAR');

        //cilindro movel
        this.cylinderMovelText = new CGFtexture(this.scene, 'images/trainModel/cubeText.jpg');
        this.cylinderMovel = new MyCylinder(this.scene, 10, 3, 0.2);
        this.cylinderMovelAppearance = new CGFappearance(this.scene);
        this.cylinderMovelAppearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.cylinderMovelAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.cylinderMovelAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.cylinderMovelAppearance.setShininess(120);
        this.cylinderMovelAppearance.setTexture(this.cylinderMovelText);
        this.cylinderMovelAppearance.setTextureWrap('LINEAR', 'LINEAR');

        //cilindro cabo
        this.caboText = new CGFtexture(this.scene, 'images/trainModel/cordaText.jpg');
        this.cabo = new MyCylinder(this.scene, 10, 3.3, 0.1);
        this.caboAppearance = new CGFappearance(this.scene);
        this.caboAppearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.caboAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.caboAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.caboAppearance.setShininess(120);
        this.caboAppearance.setTexture(this.caboText);
        this.caboAppearance.setTextureWrap('LINEAR', 'LINEAR');

        //lenha
        this.lenhaText = new CGFtexture(this.scene, 'images/trainModel/lenhaText.jpg');
        this.lenha = new MyCylinder(this.scene, 10, 1.5, 0.2);
        this.lenhaAppearance = new CGFappearance(this.scene);
        this.lenhaAppearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.lenhaAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.lenhaAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.lenhaAppearance.setShininess(120);
        this.lenhaAppearance.setTexture(this.lenhaText);
        this.lenhaAppearance.setTextureWrap('LINEAR', 'LINEAR');
        
    }

    display(){

        this.scene.pushMatrix();

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

        //corda e cilindro
        this.scene.pushMatrix();
        this.scene.translate(0, 5.2, 0);

        //cilindro movel
        this.scene.pushMatrix();
        this.scene.rotate(this.angInc*Math.PI/180,0,0,1) //rotacao
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.cylinderMovelAppearance.apply();
        this.cylinderMovel.display();
        this.scene.popMatrix();

        //cabo
        this.scene.pushMatrix();
        this.scene.translate(Math.sin(-this.angInc* Math.PI/180),Math.tan(-this.angInc* Math.PI/180*2),0);
        this.scene.scale(1,-1,1)
        this.scene.translate(-2.9, 0, 0)
        this.caboAppearance.apply();
        this.cabo.display();
        this.scene.popMatrix();
        this.scene.popMatrix();

        //mexer lenha, sempre que o picking está a 1
        if(this.picking == 1){
            this.scene.pushMatrix();
            this.scene.translate(Math.sin(-this.angInc* Math.PI/180),Math.tan(-this.angInc* Math.PI/180*2),0)
            
            this.scene.pushMatrix();
            this.scene.translate(-2.7, 1.5, -0.7);
            this.scene.rotate(Math.PI/2, 1, 0, 0);
            this.lenhaAppearance.apply();
            this.lenha.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-2.9, 0.4+1.5, -0.7);
            this.scene.rotate(Math.PI/2, 1, 0, 0);
            this.lenhaAppearance.apply();
            this.lenha.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-3.1, 1.5, -0.7);
            this.scene.rotate(Math.PI/2, 1, 0, 0);
            this.lenhaAppearance.apply();
            this.lenha.display();
            this.scene.popMatrix();
            this.scene.popMatrix();

            this.scene.popMatrix();
        }

        //lenha dento da caixa, nao aparece no primeiro picking = 0, porque ainda nao apanhou lenha
        else if(this.madeiraBox == 1){
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(0.7, 2, -2.5);
            this.scene.rotate(-Math.PI/2, 0, 1, 0);
            this.scene.rotate(Math.PI/2, 1, 0, 0);
            this.lenhaAppearance.apply();
            this.lenha.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(0.7, 2, -2.9);
            this.scene.rotate(-Math.PI/2, 0, 1, 0);
            this.scene.rotate(Math.PI/2, 1, 0, 0);
            this.lenhaAppearance.apply();
            this.lenha.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(0.7, 2.3, -2.7);
            this.scene.rotate(-Math.PI/2, 0, 1, 0);
            this.scene.rotate(Math.PI/2, 1, 0, 0);
            this.lenhaAppearance.apply();
            this.lenha.display();
            this.scene.popMatrix();
        }
        console.log("inc : " + this.angInc + "rot:  " + this.angRot);
    }
    turn(val){ 
        this.angRot+=val*10;
    }
    tilt(val){ 
        if(this.angInc>=-20 && this.angInc<=0){
            this.angInc+=val*5
        }
        else if(this.angInc<-20 && val>0){
            this.angInc+=val*5 //-40 limite em cima

        }
        else if(this.angInc>0 && val<0){
            this.angInc+=val*5 //_5 limite em baixo
        
        }
        
    }
    reset(){ //voltar ao inicial 

    }
    pCrane(){
        if(this.angRot >= 360) this.angRot = this.angRot - 360;
        if(this.angRot <= -360) this.angRot = this.angRot + 360;
        if(this.picking == 0 && this.angInc >= -5 && (this.angRot >= -10 && this.angRot <= 10)){
            this.picking = 1; //com a lenha a mexer
            
        }
        else if(this.picking == 1 && (this.angRot <= -85 && this.angRot >= -95) && this.angInc >= -10){
            this.picking = 0; //sem lenha a mexer
            this.madeiraBox = 1; //lenha na caixa
            return 1;
        } 
        return 0;
    }
}