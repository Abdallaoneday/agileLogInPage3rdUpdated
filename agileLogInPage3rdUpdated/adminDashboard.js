if (localStorage.getItem('loggedIn') !== 'true' || localStorage.getItem('userRole') !== 'admin') {
    window.location.href = 'login.html';
}

const logoutButton = document.getElementById('logoutButton');

logoutButton.addEventListener('click', () => {
    localStorage.setItem('loggedIn', 'false');

    if (localStorage.getItem('rememberMe') !== 'true') {
        localStorage.removeItem('rememberMe');
    }

    window.location.href = 'login.html';
});