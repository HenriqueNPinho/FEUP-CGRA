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
                0.5, -0.5, -0.5,         //0- inferior direito trás
                0.5,  0.5, -0.5,        //1- superior direito ""
               -0.5, -0.5, -0.5,       //2- inferior esquerdo ""
               -0.5,  0.5, -0.5,      //3- superior ""
    0.5, -0.5,  0.5,     //4- inferior direito frente
    0.5,  0.5,  0.5,    //5- superior direito ""
   -0.5, -0.5,  0.5,   //6- inferior esquerdo ""
   -0.5,  0.5,  0.5   //7- superior esquerdo  ""
    ]
    this.indices=[
        //frente
         4, 5, 6,
        5, 7, 6,
        
        //trás
        0, 1, 2,
        1, 3, 2,

        //cima
        5, 1, 7,
        3, 7, 1,
        
        //baixo
        4, 0, 6,
        2, 6, 0,

        //esquerda
        6, 2, 7,
        3, 7, 2,

        //direita
        4, 0, 5,
        1, 5, 0
    ];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

