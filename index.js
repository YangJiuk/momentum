var popup = document.getElementById('popup');
var popupImg = document.getElementById('popup-img');
var codeBlock = document.querySelector('pre');

codeBlock.addEventListener('mouseover', function() {
    popupImg.src = 'image.jpg';  // 이미지 URL을 여기에 넣으세요.
    popup.classList.remove('hidden');
});

codeBlock.addEventListener('mouseout', function() {
    popup.classList.add('hidden');
});
