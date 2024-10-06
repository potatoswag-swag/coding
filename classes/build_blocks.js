import { blocks } from "/util/bblocks.js";
const c = document.querySelector('canvas');
const cc = c.getContext('2d');
import { mousemove } from "/script.js";
export const Building_blocks = [];

export class Build_blocks {
    constructor(x, y){
        this.x = x
        this.y = y
        this.color = 'rgba(0, 0, 0, 0.2)'
    }
    draw(){
        cc.fillStyle = this.color
        cc.fillRect(this.x, this.y, 32, 32)
    }
    update(){
        this.draw()

        if ( (mousemove.x > this.x) &&
            (mousemove.x < this.x + 32) &&
            (mousemove.y > this.y) &&
            (mousemove.y < this.y + 32))
        {
            console.log('works')
            this.color = 'rgba(255, 255, 255, 0.2)'
        } else {
            this.color = 'rgba(0, 0, 0, 0.2)'
        }
    }
};
export const bblocks = [];

for (let i = 0; i < blocks.length; i += 40){
    bblocks.push(blocks.slice(i, i + 40))
};

bblocks.forEach((arr, yi) => {
    arr.forEach((e, xi) => {
        if(e === 816){
            Building_blocks.push(new Build_blocks(xi * 32, yi * 32))
        }
    })
});