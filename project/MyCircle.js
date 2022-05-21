import {CGFobject} from '../lib/CGF.js';

export class MyCircle extends CGFobject {
    constructor(scene, slices, radius) {
        super(scene);
        this.slices = slices;
		this.radius = radius;
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

		var ang = 0;

        for(var i = 0; i < this.slices; i++){

            this.vertices.push(Math.cos(ang)*this.radius, 0, -Math.sin(ang)*this.radius);
            this.indices.push(i, (i+1) % this.slices, this.slices);
            this.normals.push(0, 1, 0);
            this.texCoords.push(0.5 + Math.cos(ang)*0.5, 0.5 - Math.sin(ang)*0.5);
            
            ang+=(2*Math.PI/this.slices);
        }

        this.vertices.push(0,0,0);
        this.normals.push(0,1,0);
        this.texCoords.push(0.5, 0.5);

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    
    /**
     * Called when user interacts with GUI to change object's complexity.
     * @param {integer} complexity - changes number of slices
     */
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); 

        this.initBuffers();
        this.initNormalVizBuffers();
    }
}
