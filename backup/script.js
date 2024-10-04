import { Mob } from "./classes/mob";

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 1280;
canvas.height = 768;
c.fillRect(0, 0, canvas.width, canvas.height);


const newImg = new Image()
newImg.src = 'mymap1.png';
const newImg2 = new Image()
newImg2.src = 'skellywalk.png';

newImg.onload = () => {
    animate();
};

const mob = new Mob(150, 140)
const mob2 = new Mob(-300, 160)
const mob3 = new Mob(-450, 170)
const mob4 = new Mob(-600, 160)

function animate(){
    c.drawImage(newImg, 0, 0);

    mob.update();
    mob2.update();
    mob3.update();
    mob4.update();
    requestAnimationFrame(animate);
    console.log('animete')
};