import { blocks } from "/util/bblocks.js";
const c = document.querySelector('canvas');
const cc = c.getContext('2d');
export const Building_blocks = [];

export class Build_blocks {
    constructor(x, y){
        this.x = x
        this.y = y
    }
    draw(){
        cc.fillStyle = 'pink'
        cc.fillRect(this.x, this.y, 32, 32)
    }
};
const bblocks = [];

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