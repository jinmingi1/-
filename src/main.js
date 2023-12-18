// main.js

import { Game } from "./game.js";

var game;
var currentImageIndex = 0;

window.onload = () => {
    game = new Game(1280, 720);
    game.start();

    // 각 버튼에 대응되는 이미지 URL 배열
    const imageUrls = [
        "https://images.pexels.com/photos/18056655/pexels-photo-18056655.jpeg",
        "https://images.pexels.com/photos/14159264/pexels-photo-14159264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/16434592/pexels-photo-16434592/free-photo-of-wooden-structure-of-the-metropol-parasol-in-seville.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ];

    // 첫 번째 박스에 대한 버튼 생성
    const box = document.querySelector(`.box[data-image-index="0"]`);
    const button = document.createElement('button');
    button.textContent = '옷 고르기';
    button.classList.add('box-button');

    // 클릭 이벤트 핸들러를 추가
    button.addEventListener('click', () => {
        const boxImage = box.querySelector('.box-image');
        
        // 현재 이미지의 다음 순서의 인덱스를 계산
        currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
        
        // 다음 순서의 이미지를 표시
        const imageUrl = imageUrls[currentImageIndex];
        boxImage.style.backgroundImage = `url("${imageUrl}")`;
        console.log(`Show Image for Box 0:`, imageUrl);
    });

    // 버튼을 첫 번째 박스에 추가
    box.appendChild(button);

    // 나머지 박스는 버튼 생성하지 않음
};
