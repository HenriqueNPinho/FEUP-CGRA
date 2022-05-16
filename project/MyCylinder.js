import {CGFobject} from '../lib/CGF.js';

export class MyCylinder extends CGFobject {
    constructor(scene, slices, height, radius) {
        super(scene);
        this.slices = slices;
        this.height = height;
        this.radius = radius;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;

        for (var i = 0; i < this.slices*2; i+=2){
          this.indices.push(i+1, i, i+2);
          this.indices.push(i+2, i+3, i+1);
        }

        for(var i = 0; i <= this.slices; i++){

          this.vertices.push(Math.cos(ang)*this.radius, 0, -Math.sin(ang)*this.radius);
          this.vertices.push(Math.cos(ang)*this.radius, this.height, -Math.sin(ang)*this.radius);
          this.normals.push(Math.cos(ang), 0, -Math.sin(ang));
          this.normals.push(Math.cos(ang), 0, -Math.sin(ang));
          
          ang+=alphaAng;
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity);

        this.initBuffers();
        this.initNormalVizBuffers();
    }
}