import {CGFobject} from '../lib/CGF.js';
import { MyQuad } from './MyQuad.js';
/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {

    constructor(scene) {
		super(scene);
		
        this.face1 = new MyQuad(this.scene); //frente
        this.face2 = new MyQuad(this.scene); //tras
        this.face3 = new MyQuad(this.scene); //cima
        this.face4 = new MyQuad(this.scene); //direito
        this.face5 = new MyQuad(this.scene); //esquerdo
        this.face6 = new MyQuad(this.scene); //baixo
	} 
 }