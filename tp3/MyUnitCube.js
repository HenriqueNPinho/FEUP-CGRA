import {CGFobject} from '../lib/CGF.js';
/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
    
		this.vertices=[ 
      0.5, -0.5, -0.5,         //0  0- inferior direito trás
      0.5,  0.5, -0.5,         //1  1- superior direito trás 
      -0.5, -0.5, -0.5,        //2  2- inferior esquerdo trás
      -0.5,  0.5, -0.5,        //3  3- superior esquerdo trás
      0.5, -0.5,  0.5,         //4  4- inferior direito frente
      0.5,  0.5,  0.5,         //5  5- superior direito frente
      -0.5, -0.5,  0.5,        //6  6- inferior esquerdo frente
      -0.5,  0.5,  0.5,        //7  7- superior esquerdo  frente

      0.5, -0.5, -0.5,         //8  0- inferior direito trás
      0.5,  0.5, -0.5,         //9  1- superior direito trás 
      -0.5, -0.5, -0.5,        //10 2- inferior esquerdo trás
      -0.5,  0.5, -0.5,        //11 3- superior esquerdo trás
      0.5, -0.5,  0.5,         //12 4- inferior direito frente
      0.5,  0.5,  0.5,         //13 5- superior direito frente
      -0.5, -0.5,  0.5,        //14 6- inferior esquerdo frente
      -0.5,  0.5,  0.5,        //15 7- superior esquerdo  frente

      0.5, -0.5, -0.5,         //16 0- inferior direito trás
      0.5,  0.5, -0.5,         //17 1- superior direito trás 
      -0.5, -0.5, -0.5,        //18 2- inferior esquerdo trás
      -0.5,  0.5, -0.5,        //19 3- superior esquerdo trás
      0.5, -0.5,  0.5,         //20 4- inferior direito frente
      0.5,  0.5,  0.5,         //21 5- superior direito frente
      -0.5, -0.5,  0.5,        //22 6- inferior esquerdo frente
      -0.5,  0.5,  0.5         //23 7- superior esquerdo  frente
    ]

    this.indices=[
      1, 5, 4,
      1, 4, 0,

      7, 3, 6,
      3, 2, 6,

      13, 9, 11,
      11, 15, 13,

      8, 12, 14,
      14, 10, 8,

      20, 21, 23,
      23, 22, 20,

      19, 17, 16,
      16, 18, 19
    ];

    this.normals = [

      1, 0, 0,
      1, 0, 0,
      -1, 0, 0,
      -1, 0, 0,
      1, 0, 0,
      1, 0, 0,
      -1, 0, 0,
      -1, 0, 0,

      0, -1, 0,
      0, 1, 0,
      0, -1, 0,
      0, 1, 0,
      0, -1, 0,
      0, 1, 0,
      0, -1, 0,
      0, 1, 0,

      0, 0, -1,
      0, 0, -1,
      0, 0, -1,
      0, 0, -1,
      0, 0, 1,
      0, 0, 1,
      0, 0, 1,
      0, 0, 1
    ];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}
