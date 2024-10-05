const c = document.querySelector('canvas');
const cc = c.getContext('2d');
import { waypoints } from "/util/waypoints.js";

export default class Mob {
    constructor(x, y){
        this.x = x
        this.y = y
        this.width = 50
        this.height = 50
        this.wpi = 1
        this.oob = false
        this.center = {
            x: this.x + this.width / 2,
            y: this.x + this.width / 2
        }
    }
    draw(){
        cc.fillStyle = 'lightblue'
        cc.fillRect(this.x, this.y, this.width, this.height)
    }
    move(){
        this.draw()

        const wp = waypoints[this.wpi]
        const disY = wp.y - this.y
        const disX = wp.x - this.x
        const a = Math.atan2(disY, disX)

        this.x += Math.cos(a)
        this.y += Math.sin(a)
        this.center = {
            x: this.x + this.width / 2,
            y: this.x + this.width / 2
        }

        console.log('this X', this.x) // DELETELATER``DELETELATER``DELETELATER``DELETELATER``DELETELATER``DELETELATER``
        console.log('wp X', wp.x)

        if (Math.round(this.x) === Math.round(wp.x) && Math.round(this.y) === Math.round(wp.y) && (this.wpi < waypoints.length - 1)){
            this.wpi += 1
            console.log('hit') // DELETELATER``DELETELATER``DELETELATER``DELETELATER``DELETELATER``DELETELATER``
        };
        console.log('wpi', this.wpi) // DELETELATER``DELETELATER``DELETELATER``DELETELATER``DELETELATER``DELETELATER``

        if ( Math.round(this.x) === Math.round(waypoints[waypoints.length - 1].x) ){
            this.oob = true
        }
        console.log('this.oob', this.oob)
    }   
};