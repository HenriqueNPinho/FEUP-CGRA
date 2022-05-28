import {CGFobject} from '../lib/CGF.js';
import { MyTrack } from './MyTrack.js';
import { MyTrainModel } from './MyTrainModel.js';
import { createMachine } from './StateMachine.js';

export class MyMovingTrain extends CGFobject {

    constructor(scene, track) {
		super(scene);
        this.track = new MyTrack(this.scene, track)
		this.initBuffers();
	}

    initBuffers() {
        
        this.train = new MyTrainModel(this.scene);
        this.speed = 0.01;
        this.curSeg = 0;
        this.position =[this.track.segs[this.curSeg].x, 0,this.track.segs[this.curSeg].z]
        this.orientation = 0;
        this.lasttime = 0;
        this.totaldis = 0;

        console.log(this.track.segs)
        console.log("(x,z) : (" + this.track.segs[this.curSeg].x + "," + this.track.segs[this.curSeg].z + ")")
        console.log("(x1,z1) : (" + this.track.segs[this.curSeg].x1 + "," + this.track.segs[this.curSeg].z1 + ")")

        //console.log("distance = " + this.track[this.curSeg].distance)
       // console.log("angle = " + this.track[this.curSeg].angle)


       
    }

    update(t){
    
        let seg = this.track.segs[this.curSeg];
        let angle= Math.atan2(seg.z1-seg.z,seg.x1-seg.x) * 180 / Math.PI;
        console.log(angle)
        const currState = 'accelaration';
       
        switch(currState){

            case 'accelaration': 
                break;
            case  'cruise': 
                break;
            case   'decelaration': 
                break;
            case    'stoped': 
                break;
            
            default:
                console.log("break")
                break;
            }

    }

    display() {
        this.scene.translate(this.position[0],this.position[1],this.position[2]);
        this.scene.rotate(this.orientation,0,1,0)
        this.scene.rotate(Math.PI/2,0,1,0)
        this.train.display()
    }

}