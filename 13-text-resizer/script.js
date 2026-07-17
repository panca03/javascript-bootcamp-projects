const text = document.getElementById('text');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');

let fontSize = 20;

increaseBtn.addEventListener('click', function () {
  fontSize += 2;
  text.style.fontSize = fontSize + 'px';
});

decreaseBtn.addEventListener('click', function () {
  if (fontSize > 10) {
    fontSize -= 2;
    text.style.fontSize = fontSize + 'px';
  }
});
