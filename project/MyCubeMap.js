import {CGFobject, CGFappearance} from '../lib/CGF.js';
import { MyQuad } from './MyQuad.js';
/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyCubeMap extends CGFobject {

    constructor(scene, textures) {
		super(scene);
        this.textures=textures;
		
        this.face1 = new MyQuad(this.scene); //frente
        this.face2 = new MyQuad(this.scene); //tras
        this.face3 = new MyQuad(this.scene); //cima
        this.face4 = new MyQuad(this.scene); //direito
        this.face5 = new MyQuad(this.scene); //esquerdo
        this.face6 = new MyQuad(this.scene); //baixo

        this.myMaterial = new CGFappearance(this.scene);
       /* this.myMaterial.setAmbient(0.3, 0.3, 0.3, 1);
        this.myMaterial.setDiffuse(0.7, 0.7, 0.7, 1);
        this.myMaterial.setSpecular(0.0, 0.0, 0.0, 1);
        this.myMaterial.setShininess(120);*/
        this.myQuad = new MyQuad(this.scene);
        this.textures=textures;
	}
  
  display(){

    this.myMaterial.setTexture(this.textures[0]);
    this.myMaterial.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
    //cima
    this.scene.scale (50,50,50);
    this.scene.pushMatrix();
    this.scene.translate(0,0.5,0);
    this.scene.rotate(Math.PI/2,1,0,0);
    this.face3.display();
    this.scene.popMatrix();

    this.myMaterial.setTexture(this.textures[1]);
    this.myMaterial.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
    //frente
    this.scene.pushMatrix();
    this.scene.translate(0,0,-0.5);
    this.face1.display();
    this.scene.popMatrix();

    this.myMaterial.setTexture(this.textures[2]);
    this.myMaterial.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
    //direita
    this.scene.pushMatrix();
    this.scene.translate(0.5,0,0);
    this.scene.rotate(-Math.PI/2,0,1,0);
    this.face4.display();
    this.scene.popMatrix(); 

    this.myMaterial.setTexture(this.textures[3]);
    this.myMaterial.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
    //tras
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI, 0,1,0);
    this.scene.translate(0,0,-0.5);
    this.face2.display();
    this.scene.popMatrix();

    this.myMaterial.setTexture(this.textures[4]);
    this.myMaterial.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
    //esquerda
    this.scene.pushMatrix();
    this.scene.translate(-0.5,0,0);
    this.scene.rotate(Math.PI/2,0,1,0);
    this.face5.display();
    this.scene.popMatrix();

    this.myMaterial.setTexture(this.textures[5]);
    this.myMaterial.apply();
    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
    //baixo
    this.scene.pushMatrix();
    this.scene.translate(0,-0.5,0);
    this.scene.rotate(-Math.PI/2,1,0,0);
    this.face6.display();
    this.scene.popMatrix();
    
    
  }
  updateTexture(texture) {
    this.textures = texture;
}

 }