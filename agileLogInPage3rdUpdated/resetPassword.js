const resetForm = document.getElementById('resetForm');
const message = document.getElementById('message');

resetForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const resetUserName = document.getElementById('resetUserName').value.trim();
    const newPassword = document.getElementById('newPassword').value.trim();

    if (resetUserName === '' || newPassword === '') {
        message.style.color = 'red';
        message.textContent = 'Enter username and new password';
        return;
    }

    if (localStorage.getItem(`user_${resetUserName}`)) {
        localStorage.setItem(`user_${resetUserName}`, newPassword);
        message.style.color = 'green';
        message.textContent = 'Password reset successfully';
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
    } else {
        message.style.color = 'red';
        message.textContent = 'Username not found';
    }
});