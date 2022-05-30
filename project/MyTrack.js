
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

            this.segs.push( { x: track[i-1].x, z:track[i-1].z, x1: track[i].x, z1:track[i].z, type: track[i].type, 
              dist:  Math.sqrt( Math.pow((track[i-1].x-track[i].x),2) + Math.pow((track[i-1].z-track[i].z),2))} )
          }
        this.segs.push( { x: track[track.length-1].x, z:track[track.length-1].z, x1: track[0].x, z1:track[0].z, type: track[0].type,
          dist:  Math.sqrt( Math.pow((track[track.length-1].x-track[0].x),2) + Math.pow((track[track.length-1].z-track[0].z),2))})

          this.initBuffers();
      }
      
      initBuffers() {
        this.trackSeg=[]
        for( var i=0 ; i<this.segs.length; i++){
          this.trackSeg.push( new MyTrackSegment(this.scene, this.segs[i]))
        }
      }

      display(){
        for( let i=0 ; i<this.segs.length; i++){
          this.trackSeg[i].display()
        }
      }
  }
  