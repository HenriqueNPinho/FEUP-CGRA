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
		
        this.face1 = new MyQuad(this.scene);
        this.face2 = new MyQuad(this.scene);
        this.face3 = new MyQuad(this.scene);
        this.face4 = new MyQuad(this.scene);
        this.face5 = new MyQuad(this.scene);
        this.face6 = new MyQuad(this.scene);
	}
 }