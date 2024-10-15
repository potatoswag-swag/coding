import Mob from "/classes/mob.js";
import { waypoints1 } from "/util/waypoints.js";
import { waypoints2 } from "/util/waypoints.js";
import { Building_blocks } from "./classes/build_blocks.js";

export const c = document.querySelector('canvas');
export const cc = c.getContext('2d');
c.width = window.innerWidth;
c.height = window.innerHeight;
cc.fillRect(0, 0, c.width, c.height);
const newImage = new Image();
newImage.src = 'sprites/lvl1.png';
newImage.onload = () => animate();

const mob = new Mob(waypoints1[0].x, waypoints1[0].y, waypoints1)      // placeholder
const mob2 = new Mob(waypoints1[0].x - 80, waypoints1[0].y, waypoints1)
const mob3 = new Mob(waypoints1[0].x - 160, waypoints1[0].y, waypoints1)
const mob4 = new Mob(waypoints2[0].x, waypoints2[0].y, waypoints2)     
const mob5 = new Mob(waypoints2[0].x + 80, waypoints2[0].y, waypoints2)
const mob6 = new Mob(waypoints2[0].x + 160, waypoints2[0].y, waypoints2)

function animate(){
    cc.drawImage(newImage, 0, 0);

    console.log(window.innerHeight)

    if (!mob.oob){   // placeholder
        mob.move()
    }
    if (!mob2.oob){
        mob2.move()
    }
    if (!mob3.oob){
        mob3.move()
    }
    if (!mob4.oob){   // placeholder
        mob4.move()
    }
    if (!mob5.oob){
        mob5.move()
    }
    if (!mob6.oob){
        mob6.move()
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
    console.log('x->', mousemove.x)
    console.log('y->', mousemove.y)
});