function generatePassword() {
  const length = 10;
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  document.getElementById('password').value = password;
}

async function copyPassword() {
  const passwordField = document.getElementById('password');

  if (!passwordField.value) {
    alert('Generate a password first!');
    return;
  }

  await navigator.clipboard.writeText(passwordField.value);
  alert('Password copied!');
}
