const c = document.querySelector('canvas');
const cc = c.getContext('2d');
import Mob from "./mob.js";
import { waypoints } from "/util/waypoints.js";

export default class Mob_big extends Mob {
    constructor(x, y){
        super(x, y)
    }
    draw(){
        cc.fillStyle = 'grey'
        cc.fillRect(this.x, this.y, this.width + 20, this.height + 20) //<<<<<<<<<<<< + 20 TEMP <
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

        if (Math.round(this.center.x) === Math.round(wp.x) && Math.round(this.center.y) === Math.round(wp.y) && (this.wpi < waypoints.length - 1)){
            this.wpi += 1
        };

        if ( Math.round(this.center.x) === Math.round(waypoints[waypoints.length - 1].x) ){
            this.oob = true
            console.log('this.oob', this.oob)
        }
    }   
};