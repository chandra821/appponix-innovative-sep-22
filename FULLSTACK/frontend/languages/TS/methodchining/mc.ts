class Remote{
    color:string
    button:string
    battery:string
    constructor(){
    this.color='red'
    this.button='on off button'
    this.battery="2cells"
    }
    remotecolor(){
        console.log(this.color)
        return 'hello'
    }
    remoteButton(){
        console.log(this.button)
        return this
    }
    remoteBattery(){
        console.log(this.battery)
        return this
    }
}

var myprojectorremote = new Remote()
console.log(myprojectorremote)
myprojectorremote.remoteButton().remoteBattery().remotecolor()
