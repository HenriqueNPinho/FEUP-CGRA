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
        this.currSeg = 1; //mudar para 0
        this.currState='cruise'  //mudar para accelaration
        this.position =[this.track.segs[this.currSeg].x,this.track.segs[this.currSeg].z]
        this.orientation = 0;
        this.lastT = 0;
        this.distAtual = 0.0;

        console.log(this.track.segs)


    }

    update(t){ //50 millis, max speed 0,01/sec -> 0,0005 /milli
    
        let seg = this.track.segs[this.currSeg];
        let segDist = Math.sqrt( Math.pow((seg.x-seg.x1),2) + Math.pow((seg.z-seg.z1),2) )
        this.speed = 2; //0.01 é demais, apagar mais tarde
        if(this.lastT!=0){  

            this.orientation = Math.atan2(seg.z1-seg.z,seg.x1-seg.x);
            let dir= [ seg.x1 - seg.x, seg.z1-seg.z]
            let deltatime= (t-this.lastT)/1000
            let dirx
            let dirz

            switch(this.currState){

               /* case 'accelaration': 
                    //acelerar até ao proximo seg

                    if(nxtSeg.type == 'simple'){
                        this.currState='cruise'
                    }
                    else{
                        this.currState='decelaration'
                    }
                    break;*/

                case  'cruise':
                    //manter até ao proximo segmento
                    
                    dirx= dir[0] * deltatime * this.speed
                    dirz=dir[1]*deltatime* this.speed
                    this.distAtual+= Math.sqrt( Math.pow(dirx,2) + Math.pow(dirz,2) )
                    
                    this.position=[this.position[0]+dirx, this.position[1]+dirz]

                    if(this.distAtual +0.04 > segDist){
                        this.currSeg++
                        if(this.currSeg == this.track.segs.length){
                            this.currSeg=0;
                        }
                        this.position =[this.track.segs[this.currSeg].x,this.track.segs[this.currSeg].z]
                        this.distAtual=0;

                        if(this.track.segs[this.currSeg].type=='station'){
                            this.currState='decelaration'
                        }
                    }

                case   'decelaration': 
                    
                        let speed = this.speed-((this.speed/segDist)*this.distAtual)
                        if (speed<0.001)
                            speed=0
                            console.log(speed)
                        dirx= dir[0] * deltatime * speed
                        dirz=dir[1]*deltatime* speed
                        this.distAtual+= Math.sqrt( Math.pow(dirx,2) + Math.pow(dirz,2) )

                        this.position=[this.position[0]+dirx, this.position[1]+dirz]

                        if(this.distAtual > segDist){
                            this.currSeg++
                            if(this.currSeg == this.track.segs.length){
                                this.currSeg=0;
                            }
                            this.position =[this.track.segs[this.currSeg].x,this.track.segs[this.currSeg].z]
                            this.distAtual=0;
                        }
                        //if(speed==0)
                          //  this.currState='stoped'
                        break;

                case    'stoped': 
                        //carregar madeira

                        //this.currState='accelaration'
                    break;
                
                default:
                    console.log("break")
                    break;
            }
        }
        this.lastT=t;   
    }

    display() {
        this.scene.translate(this.position[0],0,this.position[1]);
        this.scene.rotate(-this.orientation,0,1,0)
        this.scene.rotate(Math.PI/2,0,1,0)
        this.train.display()
    }

}