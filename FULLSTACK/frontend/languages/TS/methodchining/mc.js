var Remote = /** @class */ (function () {
    function Remote() {
        this.color = 'red';
        this.button = 'on off button';
        this.battery = "2cells";
    }
    Remote.prototype.remotecolor = function () {
        console.log(this.color);
        return 'hello';
    };
    Remote.prototype.remoteButton = function () {
        console.log(this.button);
        return this;
    };
    Remote.prototype.remoteBattery = function () {
        console.log(this.battery);
        return this;
    };
    return Remote;
}());
var myprojectorremote = new Remote();
console.log(myprojectorremote);
myprojectorremote.remoteButton().remoteBattery().remotecolor();
