
import {CGFobject, CGFtexture,CGFappearance} from '../lib/CGF.js';
import { MyTrackQuad } from './MyTrackQuad.js';
 
  export class MyTrackSegment extends CGFobject {
      constructor(scene, seg) {
          super(scene);

          this.initBuffers(seg.x, seg.x1, seg.z, seg.z1, seg.dist);
          this.initMaterials()
          this.angleDeg = Math.atan2(this.z1-this.z,this.x1-this.x) * 180 / Math.PI;
         
          /*
		      console.log("angulo:")
			    console.log(this.angleDeg)
          console.log("dist")
          console.log(this.dist)*/
      }
      
      initBuffers(x, x1, z,z1,dist) {
        this.x=x
        this.x1=x1
        this.z=z
        this.z1=z1
        this.dist=dist
        
        this.quad= new MyTrackQuad(this.scene)
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

        this.scene.translate(this.x, 0, this.z)
        this.scene.rotate(-this.angleDeg*Math.PI / 180 ,0,1,0)
        this.scene.scale(this.dist/4, 1,1)

        this.quad.updateTexCoords([
          0,0,
          this.dist/4,0,
          this.dist/4,1,
          0,1

        ])
        this.myMaterial.apply()
        this.quad.display()
        this.scene.popMatrix()
      }
  }
  