import {CGFobject} from '../lib/CGF.js';
import { MyTrack } from './MyTrack.js';
import { MyTrainModel } from './MyTrainModel.js';


export class MyMovingTrain extends CGFobject {

    constructor(scene, track) {
		super(scene);
        this.track = new MyTrack(this.scene, track)
		this.initBuffers();
	}

    initBuffers() {
        
        this.train = new MyTrainModel(this.scene);
        this.speed = 0.01;
        this.currSeg = 0;
        this.currState='accelaration'
        this.position =[this.track.segs[this.currSeg].x, 0,this.track.segs[this.currSeg].z]
        this.orientation = 0;
        this.lastT = 0;
        this.totaldis = 0;

        console.log(this.track.segs)
        console.log("(x,z) : (" + this.track.segs[this.currSeg].x + "," + this.track.segs[this.currSeg].z + ")")
        console.log("(x1,z1) : (" + this.track.segs[this.currSeg].x1 + "," + this.track.segs[this.currSeg].z1 + ")")


    }

    update(t){ //50 millis, max speed 0,01/sec -> 0,0005 /milli
    
        let currSeg = this.track.segs[this.currSeg];
        let nxtSeg;
       /* if(this.currSeg+1 < this.track.segs.length){
            nxtSeg=this.track.segs[this.currSeg++];
        }
        else{ 
            this.currSeg=0;
             nxtSeg=this.track.segs[0];
            
        }*/
        if(this.lastT!=0){
        this.orientation = Math.atan2(currSeg.z1-currSeg.z,currSeg.x1-currSeg.x);

        let dir= [ currSeg.x1 - currSeg.x, currSeg.z1-currSeg.z]
        let deltatime= (t-this.lastT)/1000
        let dirx= dir[0] * deltatime * this.speed
        let dirz=dir[1]*deltatime* this.speed
        
        console.log("delta" ,this.orientation)
  


        this.position=[this.position[0]+dirx, this.position[1],this.position[2]+dirz ]
        console.log(this.position)
        }

        this.lastT=t;
        /* switch(currState){

            case 'accelaration': 
                //acelerar até ao proximo seg

                if(nxtSeg.type == 'simple'){
                    this.currState='cruise'
                }
                else{
                    this.currState='decelaration'
                }
                break;

            case  'cruise':
                //manter até ao proximo segmento

                if(nxtSeg.type == 'station'){
                    this.currState='decelaration'
                }

                break;

            case   'decelaration': 
                    //parar
                    this.currState='stoped'
                break;

            case    'stoped': 
                    //carregar madeira

                    this.currState='accelaration'
                break;
            
            default:
                console.log("break")
                break;
        }*/
}

    display() {
        this.scene.translate(this.position[0],this.position[1],this.position[2]);
        this.scene.rotate(this.orientation,0,1,0)
        this.scene.rotate(Math.PI/2,0,1,0)
        this.train.display()
    }

}