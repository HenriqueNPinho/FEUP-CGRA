
import {CGFobject, CGFtexture,CGFappearance} from '../lib/CGF.js';
import { MyQuad } from './MyQuad.js';
 
  export class MyTrackSegment extends CGFobject {
      constructor(scene, seg) {
          super(scene);

          this.initBuffers(seg.x, seg.x1, seg.z, seg.z1);
          this.initMaterials()
          this.angleDeg = Math.atan2(this.z1-this.z,this.x1-this.x) * 180 / Math.PI;
          this.pointDist= Math.sqrt( Math.pow((this.x-this.x1),2) + Math.pow((this.z-this.z1),2) )
          if(this.angleDeg<0)
            this.angleDeg+=360
		      console.log("angulo:")
			    console.log(this.angleDeg)
          console.log("dist")
          console.log(this.pointDist)
      }
      
      initBuffers(x, x1, z,z1) {
        this.x=x
        this.x1=x1
        this.z=z
        this.z1=z1
        
        this.quad= new MyQuad(this.scene)
      }

      initMaterials(){
       
        this.myMaterial = new CGFappearance(this.scene);
        this.myMaterial.setAmbient(1, 1, 1, 1.0);
        this.myMaterial.setDiffuse(1, 1, 1, 1.0);
        this.myMaterial.setSpecular(1, 1, 1, 1.0);
        this.myMaterial.setShininess(10.0);
        this.myMaterial.loadTexture('images/tracks.png');
        this.myMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }


      display(){
        this.scene.pushMatrix()
       
        /*if(this.angleDeg == 90 || this.angleDeg ==0){
          if(this.z == this.z1){
            this.scene.translate(this.x, 0, this.z)
            this.scene.scale(this.pointDist/4, 1,1)
          }
          else{
            this.scene.translate(this.x, 0, this.z)
            this.scene.rotate(-Math.PI/2,0,1,0)
            this.scene.scale(this.pointDist/4,1,1)
          }

        }
        else { //(.:) */
          this.scene.translate(this.x, 0, this.z)
          this.scene.rotate(-this.angleDeg*Math.PI / 180 ,0,1,0)
          this.scene.scale(this.pointDist/4, 1,1)
      //  }
       // this.scene.scale(this.pointDist,1,1)
        this.quad.updateTexCoords([
          0,0,
          this.pointDist/4,0,
          this.pointDist/4,1,
          0,1

        ])
        this.myMaterial.apply()
        this.quad.display()
        this.scene.popMatrix()
      }
  }
  