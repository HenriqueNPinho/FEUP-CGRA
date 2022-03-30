import {CGFobject} from '../lib/CGF.js';
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
	}

    display(){

        var diamondMatrix = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            -2, 2, 0, 1
           ];
       
        this.scene.pushMatrix();
        this.scene.translate(0,-1,0);
        this.scene.rotate(Math.PI, 1,0,0)
        this.parallelogram.display();
        this.scene.popMatrix();
    
        this.scene.pushMatrix();
        this.scene.translate(-1,-2,0);
        this.triangleBig.display();
        this.scene.popMatrix();
    
        this.scene.pushMatrix();
        this.scene.translate(-3,-1,0);
        this.scene.rotate(Math.PI,0,0,1);
        this.triangleSmall.display();
        this.scene.popMatrix();
    
        this.scene.pushMatrix()
        this.scene.translate(0,1,0);
        this.scene.translate(-2,0,0);
        this.scene.rotate(Math.PI,0,0,1);
        this.triangleBig.display();
        this.scene.popMatrix(); 
    
        this.scene.pushMatrix();
        this.scene.multMatrix(diamondMatrix);
        this.diamond.display();
        this.scene.popMatrix();
    
        this.scene.pushMatrix();
        this.scene.translate(3,-1,0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.triangleSmall.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(4, -1, 0);
        this.scene.rotate(3*Math.PI/2, 0,0,1);
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
}
