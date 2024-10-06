const c = document.querySelector('canvas');
const cc = c.getContext('2d');

export class Turret {
    constructor(x, y){
        this.x = x
        this.y = y
    }
    draw(){
        cc.fillStyle = 'purple'
        cc.fillRect(this.x, this.y, 32, 32)
    }
}