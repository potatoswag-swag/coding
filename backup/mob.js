export default class Mob {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 50
        this.height = 50
        this.anim = 66
        this.image = new Image()
        this.image.src = 'skellywalk.png'
    }
    spawn() {
        const imgwidth = this.image.width / 13
        c.drawImage(
            this.image,
            this.anim, // <<<< animation
            0,
            imgwidth,
            this.image.height,
            this.x,
            this.y,
            66,
            76
        )
        if ( xq === maxxq ){
            xq = 0
        }
        
        console.log(xq)
    }
    update() {
        this.spawn();
        this.x += 1;
        xqq += 1
        if(xqq % 500 === 0){
            xq++
        }
    }
};