var popup = document.getElementById('popup');
var popupImg = document.getElementById('popup-img');
var codeBlock = document.querySelector('pre');

codeBlock.addEventListener('mouseover', function() {
    popupImg.src = 'Diablo-IV.png'; 
    popup.classList.remove('hidden');
});

codeBlock.addEventListener('mouseout', function() {
    popup.classList.add('hidden');
});
