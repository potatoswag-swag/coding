import Mob from "/classes/mob.js";
import { waypoints } from "/util/waypoints.js";
import Mob_flying from "/classes/mob_flying.js";
import Mob_fast from "/classes/mob_fast.js";
import Mob_big from "/classes/mob_big.js";
import { bblocks, Building_blocks } from "./classes/build_blocks.js";

export const c = document.querySelector('canvas');
export const cc = c.getContext('2d');
c.width = 1280;
c.height = 768;
cc.fillRect(0, 0, c.width, c.height);
const newImage = new Image();
newImage.src = 'sprites/mymap1.png';
newImage.onload = () => animate();

const mob = new Mob(waypoints[0].x - 100, waypoints[0].y - 50)      // remake
const mob2 = new Mob(-170, 140)
const mob3 = new Mob(-240, 150)
const mobf = new Mob_flying(waypoints[0].x, waypoints[0].y)
const mobf2 = new Mob_flying(waypoints[0].x - 40, waypoints[0].y + 50)
const mobfast = new Mob_fast(waypoints[0].x, waypoints[0].y)
const mobfast2 = new Mob_fast(waypoints[0].x - 100, waypoints[0].y - 50)
const mobfast3 = new Mob_fast(waypoints[0].x - 250, waypoints[0].y + 40)
const mobbig = new Mob_big(waypoints[0].x - 100, waypoints[0].y)
const mobbig2 = new Mob_big(waypoints[0].x - 220, waypoints[0].y - 20)
const mobbig3 = new Mob_big(waypoints[0].x - -50, waypoints[0].y)

let frame = 0  // useless 
console.log(Building_blocks)
console.log(bblocks)

const active_turrets = []
let active_tile = undefined

function animate(){
    cc.drawImage(newImage, 0, 0);

    // console.log(frame)

    if (!mob.oob){   // remake
        mob.move()
    }
    if (!mob2.oob){
        mob2.move()
    }
    if (!mob3.oob){
        mob3.move()
    }
    if(!mobf.oob){
        mobf.move()
    }
    if(!mobf2.oob){
        mobf2.move()
    }
    if(!mobfast.oob){
        mobfast.move()
    }
    if(!mobfast2.oob){
        mobfast2.move()
    }
    if(!mobfast3.oob){
        mobfast3.move()
    }
    if(!mobbig.oob){
        mobbig.move()
    }
    if(!mobbig2.oob){
        mobbig2.move()
    }
    if(!mobbig3.oob){
        mobbig3.move()
    }

    Building_blocks.forEach(e => {
        e.update(mousemove.x, mousemove.y)
    })

    requestAnimationFrame(animate)
};

export const mousemove = {
    x: undefined,
    y: undefined
}
c.addEventListener('mousemove', (e) => {
    mousemove.x = e.clientX
    mousemove.y = e.clientY
    console.log(mousemove.x)
    console.log(mousemove.y)
});