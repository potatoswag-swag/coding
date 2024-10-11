const c = document.querySelector('canvas');
const cc = c.getContext('2d');
import Mob from "./mob.js";
import { waypoints_flying } from "/util/waypoints.js";

export default class Mob_flying extends Mob{
    constructor(x, y){
        super(x, y)
    }
    draw(){
        cc.fillStyle = 'coral'
        cc.fillRect(this.x, this.y, this.width, this.height)
    }
    move(){
        this.draw()

        const wp = waypoints_flying[this.wpi]
        const disY = wp.y - this.center.y
        const disX = wp.x - this.center.x
        const a = Math.atan2(disY, disX) + -(0.11) // +drift

        this.x += Math.cos(a)
        this.y += Math.sin(a)

        this.center = {
            x: this.x + this.width / 2,
            y: this.y + this.height / 2
        }

        if (Math.round(this.center.x) === Math.round(wp.x) && Math.round(this.center.y) === Math.round(wp.y) && (this.wpi < waypoints_flying.length - 1)){
            this.wpi += 1
        };

        if ( Math.round(this.center.x) === Math.round(waypoints_flying[waypoints_flying.length - 1].x) ){
            this.oob = true
        }
    }   
};