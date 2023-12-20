

import { Game } from "./game-2.js";

var game;
var currentImageIndex = 0;

window.onload = () => {
    game = new Game(1280, 720);
    game.start();

    // 각 버튼에 대응되는 이미지 URL 배열
    const imageUrls = [
        "https://images.pexels.com/photos/18056655/pexels-photo-18056655.jpeg",
        "https://images.pexels.com/photos/19442209/pexels-photo-19442209.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "https://images.pexels.com/photos/19442270/pexels-photo-19442270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/19442269/pexels-photo-19442269.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "https://images.pexels.com/photos/19442267/pexels-photo-19442267.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    ];

    // 초기에 각 박스에 이미지 설정
    for (let i = 0; i < 3; i++) {
        const box = document.querySelector(`.box[data-image-index="${i}"]`);
        const boxImage = box.querySelector('.box-image');
        const imageUrl = imageUrls[i];
        boxImage.style.backgroundImage = `url("${imageUrl}")`;
        localStorage.setItem(`box-image-${i}`, imageUrl);
    }

    // 첫 번째 박스에 대한 버튼 생성
    const box = document.querySelector(`.box[data-image-index="2"]`);
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
        localStorage.setItem(`box-image-${0}`, imageUrl);  // 이미지 변경 시 로컬 스토리지에 저장
        console.log(`Show Image for Box 0:`, imageUrl);
    });

    // 버튼을 첫 번째 박스에 추가
    box.appendChild(button);

    // 나머지 박스는 버튼 생성하지 않음
};