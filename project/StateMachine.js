export function createMachine(stateMachineDefinition) {
    const machine = {
      value: stateMachineDefinition.initialState,
      transition(currentState, event) {
        const currentStateDefinition = stateMachineDefinition[currentState]
        const destinationTransition = currentStateDefinition.transitions[event]

        if (!destinationTransition) {
          return
        }
        
        const destinationState = destinationTransition.target
        const destinationStateDefinition =
          stateMachineDefinition[destinationState]

       
        destinationTransition.action()
        currentStateDefinition.actions.move()
  
        machine.value = destinationState
  
        return machine.value
      },
    }
    return machine
  }


        /*  if (this.lasttime != 0) {
            this.speed = 2
            
            let deltatime = (t - this.lasttime) /1000
            let dirvec = [ seg.x1 - seg.x, seg.z1-seg.z]
            let disx = dirvec[0] * this.speed * deltatime
            let disz = dirvec[1] * this.speed * deltatime
            let disPerc = Math.sqrt(Math.pow(disx,2) + Math.pow(disz,2))

            this.x = seg.x;
            this.z = seg.z;
            this.position = [this.position[0] + disx, 0, this.position[2] + disz]
            this.orientation = angle;
            this.totaldis += disPerc;

           if (this.totaldis + 0.04 >= seg.distance) {
                this.curSeg++
                this.totaldis = 0
            }
            if (this.curSeg == this.track.segs.length-1) {this.curSeg = 0}
        }
        
        this.lasttime = t; */