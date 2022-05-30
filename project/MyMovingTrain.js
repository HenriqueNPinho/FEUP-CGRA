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
        this.currState='decelaration'  
        this.position =[this.track.segs[this.currSeg].x,this.track.segs[this.currSeg].z]
        this.orientation = 0;
        this.lastT = 0;
        this.distAtual = 0;
        this.speedChange=1;
    }

    update(t){ //50 millis, max speed 0,01/sec -> 0,0005 /milli

      
        this.speed = 1; //0.01 é demais, apagar mais tarde

        if(this.lastT!=0){  
            this.stateMachine(t)
        }
        this.lastT=t;   
    }

    display() {
        this.scene.translate(this.position[0],0,this.position[1]);
        this.scene.rotate(-this.orientation,0,1,0)
        this.scene.rotate(Math.PI/2,0,1,0)
        this.train.display()
    }

    stateMachine(t){
        let seg = this.track.segs[this.currSeg]; //segmento atual
        this.orientation = Math.atan2(seg.z1-seg.z,seg.x1-seg.x); 
        let dir= [ seg.x1 - seg.x, seg.z1-seg.z] //vetor 
        let deltatime= (t-this.lastT)/1000 //

        switch(this.currState){

           case 'accelaration': 
                //acelerar até ao proximo seg

               this.speedChange += (this.speed/seg.dist) 
               if(this.speedChange>this.speed){
                   this.speedChange=1
               }
               this.nextPos(dir,deltatime)

                if(this.distAtual > seg.dist){
                    this.changeSeg()
                    if(this.track.segs[this.currSeg].type=='simple'){
                        this.currState='cruise'
                    }
                    else{
                        this.currState='decelaration'
                    }
                }
                break;

            case  'cruise':
                this.nextPos(dir, deltatime)

                if(this.distAtual > seg.dist){
                    this.changeSeg()
                    if(this.track.segs[this.currSeg].type=='station'){
                        this.currState='decelaration'
                    }
                }
                break;

            case   'decelaration': 
                
                   this.speedChange = this.speed-((this.speed/seg.dist)*this.distAtual)
                    if (this.speedChange<0.03)
                       this.speedChange=0
                   
                   this.nextPos(dir, deltatime)

                    if(this.speedChange==0){
                        this.changeSeg()
                        this.currState='stoped'
                    }
                      
                    break;

            case    'stoped': 
                    this.currState='accelaration'
                break;
            
            default:
                console.log("error")
                break;
        }
       
    }

    nextPos(dir, deltatime){

        let dirx= dir[0] * deltatime *this.speedChange
        let dirz=dir[1]*deltatime*this.speedChange

        this.distAtual+= Math.sqrt( Math.pow(dirx,2) + Math.pow(dirz,2) )

        this.position=[this.position[0]+dirx, this.position[1]+dirz]

    }

    changeSeg(){
        this.currSeg++
        if(this.currSeg == this.track.segs.length){
            this.currSeg=0;
        }
        this.position =[this.track.segs[this.currSeg].x,this.track.segs[this.currSeg].z]
        this.distAtual=0
    }

}