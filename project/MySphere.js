import { CGFobject } from '../lib/CGF.js';

export class MySphere extends CGFobject {
  /**
   * @method constructor
   * @param  {CGFscene} scene - MyScene object
   * @param  {integer} slices - number of slices around Y axis
   * @param  {integer} stacks - number of stacks along Y axis, from the center to the poles (half of sphere)
   */
  constructor(scene, slices, stacks) {
    super(scene);
    this.latDivs = stacks * 2;
    this.longDivs = slices;

    this.initBuffers();
  }

  initBuffers() {
    this.vertices = [];
    this.indices = [];
    this.normals = [];
    this.texCoords = [];

    var phi = 0;
    var theta = 0;

    for (let latitude = 0; latitude <= this.latDivs; latitude++) {

      theta = 0;
      for (let longitude = 0; longitude <= this.longDivs; longitude++) {
        //vertices
        var x = Math.cos(theta) * (Math.sin(phi));
        var y = Math.cos(phi);
        var z = Math.sin(-theta) * (Math.sin(phi));
        this.vertices.push(x, y, z);

        //indices
        if (latitude < this.latDivs && longitude < this.longDivs) {
          var current = latitude * (this.longDivs + 1) + longitude;
          var next = current + (this.longDivs + 1);

          this.indices.push(current + 1, current, next);
          this.indices.push(current + 1, next, next + 1);
        }

        //normais
        this.normals.push(x, y, z);
        theta += ((2 * Math.PI) / this.longDivs);

        this.texCoords.push(longitude / this.longDivs, latitude / this.latDivs);
      }

      phi += (Math.PI / this.latDivs);
    }

    this.primitiveType = this.scene.gl.TRIANGLES;
    this.initGLBuffers();
  }
}
