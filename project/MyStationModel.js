import {CGFtexture, CGFobject, CGFappearance} from '../lib/CGF.js';
import { MyCircle } from "./MyCircle.js";
import { MyCylinder } from "./MyCylinder.js";
import { MyUnitCubeQuad } from "./MyUnitCubeQuad.js";
import { MyCrane } from "./MyCrane.js";
import { MyQuad } from "./MyQuad.js";

export class MyStationModel extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}

    initBuffers() {

        //quadrado
        this.top = new CGFtexture(this.scene,'images/estacao/cimentoText.jpg');
        this.front = new CGFtexture(this.scene, 'images/estacao/cimentoText.jpg');
        this.back = new CGFtexture(this.scene, 'images/estacao/cimentoText.jpg');
        this.left = new CGFtexture(this.scene, 'images/estacao/cimentoText.jpg');
        this.right = new CGFtexture(this.scene,'images/estacao/cimentoText.jpg');
        this.bottom = new CGFtexture(this.scene, 'images/estacao/cimentoText.jpg');
        this.cubeTexture = [this.top, this.front, this.right, this.back, this.left, this.bottom];
        this.cube = new MyUnitCubeQuad(this.scene, this.cubeTexture);

        //edificio
        this.top = new CGFtexture(this.scene,'images/estacao/paredeBrancaText.jpg');
        this.front = new CGFtexture(this.scene, 'images/estacao/paredeBrancaText.jpg');
        this.back = new CGFtexture(this.scene, 'images/estacao/paredeBrancaText.jpg');
        this.left = new CGFtexture(this.scene, 'images/estacao/paredeBrancaText.jpg');
        this.right = new CGFtexture(this.scene,'images/estacao/paredeBrancaText.jpg');
        this.bottom = new CGFtexture(this.scene, 'images/estacao/paredeBrancaText.jpg');
        this.paredeTexture = [this.top, this.front, this.right, this.back, this.left, this.bottom];
        this.parede = new MyUnitCubeQuad(this.scene, this.paredeTexture);

        //telhado
        this.top = new CGFtexture(this.scene,'images/estacao/telhaText.jpg');
        this.front = new CGFtexture(this.scene, 'images/estacao/telhaText.jpg');
        this.back = new CGFtexture(this.scene, 'images/estacao/telhaText.jpg');
        this.left = new CGFtexture(this.scene, 'images/estacao/telhaText.jpg');
        this.right = new CGFtexture(this.scene,'images/estacao/telhaText.jpg');
        this.bottom = new CGFtexture(this.scene, 'images/estacao/telhaText.jpg');
        this.telhadoTexture = [this.top, this.front, this.right, this.back, this.left, this.bottom];
        this.telhado = new MyUnitCubeQuad(this.scene, this.telhadoTexture);

        //janela
        this.top = new CGFtexture(this.scene,'images/estacao/janelaText.png');
        this.front = new CGFtexture(this.scene, 'images/estacao/janelaText.png');
        this.back = new CGFtexture(this.scene, 'images/estacao/janelaText.png');
        this.left = new CGFtexture(this.scene, 'images/estacao/janelaText.png');
        this.right = new CGFtexture(this.scene,'images/estacao/janelaText.png');
        this.bottom = new CGFtexture(this.scene, 'images/estacao/janelaText.png');
        this.janelaTexture = [this.top, this.front, this.right, this.back, this.left, this.bottom];
        this.janela = new MyUnitCubeQuad(this.scene, this.janelaTexture);

        //porta
        this.top = new CGFtexture(this.scene,'images/estacao/portaText.jpg');
        this.front = new CGFtexture(this.scene, 'images/estacao/portaText.jpg');
        this.back = new CGFtexture(this.scene, 'images/estacao/portaText.jpg');
        this.left = new CGFtexture(this.scene, 'images/estacao/portaText.jpg');
        this.right = new CGFtexture(this.scene,'images/estacao/portaText.jpg');
        this.bottom = new CGFtexture(this.scene, 'images/estacao/portaText.jpg');
        this.portaTexture = [this.top, this.front, this.right, this.back, this.left, this.bottom];
        this.porta = new MyUnitCubeQuad(this.scene, this.portaTexture);
        
        //colunas
        this.colunaText = new CGFtexture(this.scene, 'images/estacao/madeiraText.jpeg');
        this.coluna = new MyCylinder(this.scene, 10, 5, 0.2);
        this.colunaAppearance = new CGFappearance(this.scene);
        this.colunaAppearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.colunaAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.colunaAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.colunaAppearance.setShininess(120);
        this.colunaAppearance.setTexture(this.colunaText);
        this.colunaAppearance.setTextureWrap('LINEAR', 'LINEAR');

    }

    display(){

        //base cimento
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.scale(11, 1.5, 23);
        this.cube.display();
        this.scene.popMatrix();

        //bloco do meio
        this.scene.pushMatrix();
        this.scene.translate(-1.5, 5, 0);
        this.scene.scale(5, 8, 10);
        this.parede.display();
        this.scene.popMatrix();

        //bloco direita
        this.scene.pushMatrix();
        this.scene.translate(-1.5, 3.5, 7);
        this.scene.scale(5, 5, 4)
        this.parede.display();
        this.scene.popMatrix();

        //bloco esquerda
        this.scene.pushMatrix();
        this.scene.translate(-1.5, 3.5, -7);
        this.scene.scale(5, 5, 4)
        this.parede.display();
        this.scene.popMatrix();

        //telhado meio
        this.scene.pushMatrix();
        this.scene.translate(-1.5, 9, 0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.scene.scale(3.6, 3.6, 9.99);
        this.telhado.display();
        this.scene.popMatrix();

        //telhado esquerda
        this.scene.pushMatrix();
        this.scene.translate(-1.5, 6, 6.95);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.scene.scale(3.6, 3.6, 4);
        this.telhado.display();
        this.scene.popMatrix();

        //telhado direita
        this.scene.pushMatrix();
        this.scene.translate(-1.5, 6, -6.95);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.scene.scale(3.6, 3.6, 4);
        this.telhado.display();
        this.scene.popMatrix();

        //janela centro
        this.scene.pushMatrix();
        this.scene.translate(1.1, 7.5, 0);
        this.scene.scale(0, 1.7, 1.5)
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.janela.display();
        this.scene.popMatrix();

        //janela direita
        this.scene.pushMatrix();
        this.scene.translate(1.1, 4, -7);
        this.scene.scale(0, 1.7, 1.5)
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.janela.display();
        this.scene.popMatrix();

        //janela esquerda
        this.scene.pushMatrix();
        this.scene.translate(1.1, 4, 7);
        this.scene.scale(0, 1.7, 1.5)
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.janela.display();
        this.scene.popMatrix();

        //porta
        this.scene.pushMatrix();
        this.scene.translate(1.1, 2.5, 0);
        this.scene.scale(0, 3.5, 1.5)
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.porta.display();
        this.scene.popMatrix();

        //lona
        this.scene.pushMatrix();
        this.scene.translate(2, 6, 0);
        this.scene.rotate(-Math.PI/17, 0, 0, 1);
        this.scene.scale(5, 0, 7);
        this.telhado.display();
        this.scene.popMatrix();

        //coluna esquerda
        this.scene.pushMatrix();
        this.scene.translate(3.5, 5.6, 2);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.colunaAppearance.apply();
        this.coluna.display();
        this.scene.popMatrix();

        //coluna direita
        this.scene.pushMatrix();
        this.scene.translate(3.5, 5.6, -2);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.colunaAppearance.apply();
        this.coluna.display();
        this.scene.popMatrix();
    }
}