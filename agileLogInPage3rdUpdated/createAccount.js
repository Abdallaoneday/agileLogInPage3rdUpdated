const createForm = document.getElementById('createForm');
const message = document.getElementById('message');

createForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newUserName = document.getElementById('newUserName').value.trim();
    const newUserPassword = document.getElementById('newUserPassword').value.trim();

    if (newUserName === '' || newUserPassword === '') {
        message.style.color = 'red';
        message.textContent = 'Enter username and password';
        return;
    }

    if (localStorage.getItem(`user_${newUserName}`)) {
        message.style.color = 'red';
        message.textContent = 'Username already exists';
        return;
    }

    localStorage.setItem(`user_${newUserName}`, newUserPassword);
    message.style.color = 'green';
    message.textContent = 'Account created';

    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1500);
});