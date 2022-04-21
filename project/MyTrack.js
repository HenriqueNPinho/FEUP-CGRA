
  import {CGFobject} from '../lib/CGF.js';
  /**
   * MyDiamond
   * @constructor
   * @param scene - Reference to MyScene object
   */
  export class MyTrack extends CGFobject {
      constructor(scene, track) {
          super(scene);
          
          segs=[]
          for(var i=1; i<length(track); i++){
            this.segs+=(track[i-1].x, track[i-1].z, track[i].x, track[i].z)
          }
          this.initBuffers();
      }
      
      initBuffers() {
        print(segs)
      }
  }
  