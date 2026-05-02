class CpuState {
    constructor(hp) {
        this._hp = hp;
        this._aurafarmAfflicted = false
        this._gossipAfflicted = false
        this._updogAfflicted = false
        this._hugLevel = 0
        this._spamLevel = 0

    }

    set hp(hp) {

        switch (true) {
            case (hp > 50):
                this._hp = 50
                break
            case (hp < 0):
                this._hp = 0
                break
            default:
                this._hp = hp;
            }
            
        console.log("hp is now " + this._hp)
    
    }

    get hp() {
        return this._hp
    }

    set hugLevel(hugLevel) {
        if (![0, 1, 2, 3].includes(hugLevel)) {
            console.error("unsupported value passed to hugLevel setter!")
        } else {
            this._hugLevel = hugLevel
        }   
    }

    get hugLevel() {
        return this._hugLevel
    }

    set aurafarmAfflicted(aurafarmAfflicted) {
        if (![true,false].includes(aurafarmAfflicted)) {
            console.error("unsupported value passed to aurafarmAfflicted setter!")
        } else {
            this._aurafarmAfflicted = aurafarmAfflicted
        } 
    }

    get aurafarmAfflicted() {
        return this._aurafarmAfflicted
    }

    set updogAfflicted(updogAfflicted) {
        if (![true,false].includes(updogAfflicted)) {
            console.error("unsupported value passed to updogAfflicted setter!")
        } else {
            this._updogAfflicted = updogAfflicted
        } 
    }

    get updogAfflicted() {
        return this._updogAfflicted
    }

    set gossipAfflicted(gossipAfflicted) {
        if (![true,false].includes(gossipAfflicted)) {
            console.error("unsupported value passed to gossipAfflicted setter!")
        } else {
            this._gossipAfflicted = gossipAfflicted
        } 
    }


    get gossipAfflicted() {
        return this._gossipAfflicted
    }

    
    set spamLevel(spamLevel) {
        if (![0,1,2,3,4].includes(spamLevel)) {
            console.error("unsupported value passed to spamLevel setter!")
        } else {
            this._spamLevel = spamLevel
        } 
    }

    get spamLevel() {
        return this._spamLevel
    }

}




var cpuState = new CpuState(25)

// export { cpuState };