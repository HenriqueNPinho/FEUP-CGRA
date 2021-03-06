import {CGFinterface, dat} from '../lib/CGF.js';

/**
* MyInterface
* @constructor
*/
export class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        
        // init GUI. For more information on the methods, check:
        // https://github.com/dataarts/dat.gui/blob/master/API.md
        this.gui = new dat.GUI();

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        /* tp1 //1 
        this.gui.add(this.scene, 'displayDiamond').name('Diamond');
        this.gui.add(this.scene, 'displayTriangle').name('Triangle');
        this.gui.add(this.scene, 'displayParallelogram').name('Parallelogram');
        //2
        this.gui.add(this.scene, 'displayTriangleSmall').name('Small Triangle');
        this.gui.add(this.scene, 'displayTriangleBig').name('Big Triangle');
        */
        this.gui.add(this.scene, 'displayEx2_2').name('Ex2_2');
        this.gui.add(this.scene, 'displayTangram').name('Ex2_3');
        this.gui.add(this.scene, 'displayUnitCube').name('Ex3_3');
        this.gui.add(this.scene, 'displayUnitCubeQuad').name('Ex4');
        
        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        return true;
    }
}
