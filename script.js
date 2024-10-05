import Mob from "/classes/mob.js";
import { waypoints } from "/util/waypoints.js";
import Mob_flying from "/classes/mob_flying.js";

export const c = document.querySelector('canvas');
export const cc = c.getContext('2d');
c.width = 1280;
c.height = 768;
cc.fillRect(0, 0, c.width, c.height);
const newImage = new Image();
newImage.src = 'sprites/mymap1.png';
newImage.onload = () => animate();

const mob = new Mob(waypoints[0].x - 100, waypoints[0].y - 50)
const mob2 = new Mob(-170, 140)
const mob3 = new Mob(-240, 150)
const mobf = new Mob_flying(waypoints[0].x, waypoints[0].y)
const mobf2 = new Mob_flying(waypoints[0].x - 40, waypoints[0].y + 50)


function animate(){
    cc.drawImage(newImage, 0, 0);

    if (!mob.oob){
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

    console.log('anime works')
    requestAnimationFrame(animate)
};

/// todo center mob