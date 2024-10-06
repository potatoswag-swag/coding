const c = document.querySelector('canvas');
const cc = c.getContext('2d');
import { waypoints } from "/util/waypoints.js";

export default class Mob_big {
    constructor(x, y){
        this.x = x
        this.y = y
        this.width = 80
        this.height = 80
        this.wpi = 1
        this.oob = false
        this.center = {
            x: this.x + this.width / 2,
            y: this.y + this.height / 2
        }
    }
    draw(){
        cc.fillStyle = 'grey'
        cc.fillRect(this.x, this.y, this.width, this.height)
    }
    move(){
        this.draw()

        const wp = waypoints[this.wpi]
        const disY = wp.y - this.center.y
        const disX = wp.x - this.center.x
        const a = Math.atan2(disY, disX)

        this.x += Math.cos(a) / 1.4
        this.y += Math.sin(a) / 1.4
        
        this.center = {
            x: this.x + this.width / 2,
            y: this.y + this.height / 2
        }

        console.log('this X', this.x) 
        console.log('wp X', wp.x)
        console.log('this Y', this.y)
        console.log('wp Y', wp.y)

        if (Math.round(this.center.x) === Math.round(wp.x) && Math.round(this.center.y) === Math.round(wp.y) && (this.wpi < waypoints.length - 1)){
            this.wpi += 1
            console.log('hit')
        };

        if ( Math.round(this.center.x) === Math.round(waypoints[waypoints.length - 1].x) ){
            this.oob = true
        }
        console.log('this.oob', this.oob)
    }   
};