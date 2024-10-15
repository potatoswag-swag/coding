const c = document.querySelector('canvas');
const cc = c.getContext('2d');


export default class Mob {
    constructor(x, y, wp){
        this.x = x
        this.y = y
        this.width = 40
        this.height = 40
        this.wp = wp
        this.wpi = 1
        this.image = new Image()
        this.image.src = 'sprites/skellywalk.png'
        this.oob = false
        this.imgwidthcounter = 0
        this.imgwidth = this.image.width / 13
        this.center = {
            x: this.x + this.width / 2,
            y: this.y + this.height / 2
        }
    }
    draw(){
        cc.drawImage(
            this.image,
            this.imgwidth, // <<<< animation     <<<<< IMAGE X STARTS HERE
            0, // IMAGE Y KEEP   0!!!
            22,
            this.image.height,
            this.x,
            this.y,
            44,
            44
        )
        this.imgwidthcounter++
        if (this.imgwidthcounter % 8 === 0){
            if (this.imgwidth > (this.image.width - (this.image.width / 13) - 1)){
                this.imgwidth = 0
            } else {
                this.imgwidth += 22
            }
        }
    }
    move(){
        this.draw()

        const wp = this.wp[this.wpi]
        const disY = (wp.y - this.center.y)
        const disX = (wp.x - this.center.x)
        const a = Math.atan2(disY, disX)

        this.x += Math.cos(a) / 2  // <<<<<<<<<<<< ADD SUPER VAR
        this.y += Math.sin(a) / 2
        
        this.center = {
            x: this.x + this.width / 2,
            y: this.y + this.height / 2
        }

        if (Math.round(this.center.x) === Math.round(wp.x) && Math.round(this.center.y) === Math.round(wp.y) && (this.wpi < this.wp.length - 1)){
            this.wpi += 1
        };

        if ( Math.round(this.center.x) === Math.round(this.wp[this.wp.length - 1].x) && 
           ( Math.round(this.center.y) === Math.round(this.wp[this.wp.length - 1].y) ) ){
            this.oob = true
            console.log('this.oob', this.oob)
        }
    }   
};
