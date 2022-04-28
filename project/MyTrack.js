
  import {CGFobject} from '../lib/CGF.js';
import { MyTrackSegment } from './MyTrackSegment.js';
  /**
   * MyDiamond
   * @constructor
   * @param scene - Reference to MyScene object
   */
  export class MyTrack extends CGFobject {
      constructor(scene, track) {
          super(scene);
          

          this.segs=[]
          for(var i=1; i<track.length; i++){
            this.segs.push( { x: track[i-1].x, z:track[i-1].z, x1: track[i].x, z1:track[i].z, type: track[i-1].type} )

          }

          //this.segs.push( { x: track[0].x, z:track[0].z, x1: track[track.length-1].x, z1:track[track.length-1].z})
         console.log(track)
          console.log(this.segs)
          this.initBuffers();
      }
      
      initBuffers() {
        //console.log("aqui: "+this.track)
        this.trackSeg=[]
        for( var i=0 ; i<this.segs.length; i++){
              //fazer curvas
          this.trackSeg.push( new MyTrackSegment(this.scene, this.segs[i]))
        }
      }

      display(){
        for( let i=0 ; i<this.segs.length; i++){
        this.trackSeg[i].display()
        }
      }
  }
  