import {CGFappearance, CGFobject} from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";
import { MyTriangleBig } from "./MyTriangleBig.js";
/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.diamond = new MyDiamond(this.scene);   
        this.triangle = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.triangleSmall = new MyTriangleSmall(this.scene);
        this.triangleBig = new MyTriangleBig(this.scene);

        //aplicar cor
        this.purple = new CGFappearance(this.scene);
        var color = this.scene.hexToRgbA('#8100a5');
        this.purple.setAmbient(color[0], color[1], color[2], 1.0);
        this.purple.setSpecular(color[0], color[1], color[2], 1.0);
        this.purple.setDiffuse(0, 0, 0, 1.0);
        this.purple.setShininess(10.0);

        this.orange = new CGFappearance(this.scene);
        color = this.scene.hexToRgbA('#ffaf0b');
        this.orange.setAmbient(color[0], color[1], color[2], 1.0);
        this.orange.setSpecular(color[0], color[1], color[2], 1.0);
        this.orange.setDiffuse(0, 0, 0, 1.0);
        this.orange.setShininess(10.0);

        this.blue = new CGFappearance(this.scene);
        color = this.scene.hexToRgbA('#0b9cff');
        this.blue.setAmbient(color[0], color[1], color[2], 1.0);
        this.blue.setSpecular(color[0], color[1], color[2], 1.0);
        this.blue.setDiffuse(0, 0, 0, 1.0);
        this.blue.setShininess(10.0);

        this.green = new CGFappearance(this.scene);
        color = this.scene.hexToRgbA('#03ff17');
        this.green.setAmbient(color[0], color[1], color[2], 1.0);
        this.green.setSpecular(color[0], color[1], color[2], 1.0);
        this.green.setDiffuse(0, 0, 0, 1.0);
        this.green.setShininess(10.0);

        this.red = new CGFappearance(this.scene);
        color = this.scene.hexToRgbA('#ff2f08');
        this.red.setAmbient(color[0], color[1], color[2], 1.0);
        this.red.setSpecular(color[0], color[1], color[2], 1.0);
        this.red.setDiffuse(0, 0, 0, 1.0);
        this.red.setShininess(10.0);

        this.yellow = new CGFappearance(this.scene);
        color = this.scene.hexToRgbA('#ffff00');
        this.yellow.setAmbient(color[0], color[1], color[2], 1.0);
        this.yellow.setSpecular(color[0], color[1], color[2], 1.0);
        this.yellow.setDiffuse(0, 0, 0, 1.0);
        this.yellow.setShininess(10.0);

        this.pink = new CGFappearance(this.scene);
        color = this.scene.hexToRgbA('#ff5ae4');
        this.pink.setAmbient(color[0], color[1], color[2], 1.0);
        this.pink.setSpecular(color[0], color[1], color[2], 1.0);
        this.pink.setDiffuse(0, 0, 0, 1.0);
        this.pink.setShininess(10.0);
	}

    initMaterials(){
        //ex1
        this.texture = new CGFtexture(this, 'images/tangram.png');
        this.myMaterial = new CGFappearance(this.scene);
    }

    display(){

        var diamondMatrix = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            -2, 2, 0, 1
           ];

        this.myMaterial.setTexture(this.texture)
        this.scene.pushMatrix();
        this.scene.translate(0,-1,0);
        this.scene.rotate(Math.PI, 1,0,0);
        this.yellow.apply();
        this.parallelogram.display();
        this.scene.popMatrix();
    
        //triangulo cima
        this.scene.pushMatrix();
        this.scene.translate(-1,-2,0);
        this.blue.apply();
        this.triangleBig.display();
        this.scene.popMatrix();
    
        //triangulo esquerda
        this.scene.pushMatrix();
        this.scene.translate(-3,-1,0);
        this.scene.rotate(Math.PI,0,0,1);
        this.purple.apply();
        this.triangleSmall.display();
        this.scene.popMatrix();
    
        //triangulo baixo
        this.scene.pushMatrix()
        this.scene.translate(0,1,0);
        this.scene.translate(-2,0,0);
        this.scene.rotate(Math.PI,0,0,1);
        this.orange.apply();
        this.triangleBig.display();
        this.scene.popMatrix(); 
    
        this.scene.pushMatrix();
        this.scene.multMatrix(diamondMatrix);
        this.myMaterial.apply();
        //this.green.apply();
        this.scene.customMaterial.apply();
        this.diamond.display();
        this.scene.popMatrix();
    
        //triangulo direita
        this.scene.pushMatrix();
        this.scene.translate(3,-1,0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.red.apply();
        this.triangleSmall.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(4, -1, 0);
        this.scene.rotate(3*Math.PI/2, 0,0,1);
        this.pink.apply();
        this.triangle.display();
        this.scene.popMatrix();
    }
    //ex 3
    enableNormalViz(){
        this.parallelogram.enableNormalViz();
        this.triangle.enableNormalViz();
        this.triangleBig.enableNormalViz();
        this.triangleSmall.enableNormalViz();
        this.diamond.enableNormalViz();
    }

    disableNormalViz(){
        this.parallelogram.disableNormalViz();
        this.triangle.disableNormalViz();
        this.triangleBig.disableNormalViz();
        this.triangleSmall.disableNormalViz();
        this.diamond.disableNormalViz();
    }

}
