const colorPicker = document.getElementById('color-picker');
const colorInput = document.getElementById('color-input');

function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

colorPicker.addEventListener('input', function () {
  changeBackgroundColor(colorPicker.value);
  colorInput.value = colorPicker.value;
});

colorInput.addEventListener('input', function () {
  changeBackgroundColor(colorInput.value);
});
