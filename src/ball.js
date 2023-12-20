import { Vector2 } from "./vector2.js";

export class Ball
{
    constructor(pos, r) {
        this.pos = pos;
        this.r = 40;
        this.mass = r;
        this.v = new Vector2(0, 0);

        // 이미지 URL 배열을 정의합니다.
        this.imageUrls = [
            "https://cdn.discordapp.com/attachments/1127521372973834284/1187041954287063221/2-removebg-preview.png?ex=659571f8&is=6582fcf8&hm=848a6fce3946d56dccec553ec8694ad8f9f4eeffe7cfd6a9c75a3dae38233c37&",
            "https://images.pexels.com/photos/14159264/pexels-photo-14159264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/16434592/pexels-photo-16434592/free-photo-of-wooden-structure-of-the-metropol-parasol-in-seville.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            // 필요한 만큼 이미지 URL을 추가합니다.
        ];

        // 무작위 이미지를 선택합니다.
        this.img = new Image();
        this.img.src = this.getRandomImageUrl();

        // 이미지 로드가 완료되면 공을 그리도록 합니다.
        this.img.onload = () => {
            // 이미지가 로드되면 공을 그리도록 할 코드를 작성합니다.
            // 예: this.draw(); // 또는 this.render(ctx);
        };
    }

    // 이미지 URL 배열에서 무작위로 하나를 선택하는 메서드
    getRandomImageUrl() {
        const randomIndex = Math.floor(Math.random() * this.imageUrls.length);
        return this.imageUrls[randomIndex];
    }

    addForce(f)
    {
        this.v = this.v.addV(f.divS(this.mass));
    }

    update(stepDivision)
    {
        this.pos = this.pos.addV(this.v.divS(stepDivision));
    }

    updateFriction(friction)
    {
        this.v = this.v.mulS(friction);
    }

    render(ctx)
    {
        ctx.beginPath();
        // 이미지를 그립니다.
        ctx.drawImage(this.img, this.pos.x - this.r, this.pos.y - this.r, this.r * 2, this.r * 2);
        ctx.closePath();
    }
}
