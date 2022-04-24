
import {CGFobject} from '../lib/CGF.js';
import { MyQuad } from './MyQuad.js';
 
  export class MyTrackSegment extends CGFobject {
      constructor(scene, seg) {
          super(scene);

          this.initBuffers(seg.x, seg.x1, seg.z, seg.z1);
         
      }
      
      initBuffers(x, x1, z,z1) {
        this.x=x
        this.x1=x1
        this.z=z
        this.z1=z1
        this.quad= new MyQuad(this.scene)
      }

      display(){
        this.quad.display()
      }
  }
  