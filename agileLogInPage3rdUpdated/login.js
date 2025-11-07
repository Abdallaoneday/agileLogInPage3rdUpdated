const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');
const rememberMe = document.getElementById('rememberMe');

if (
  localStorage.getItem('rememberMe') === 'true' &&
  localStorage.getItem('loggedIn') === 'true'
) {
  if (localStorage.getItem('userRole') === 'admin') {
    window.location.href = 'adminDashboard.html';
  } else {
    window.location.href = 'userDashboard.html';
  }
}

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const userName = document.getElementById('userName').value.trim();
  const userPassword = document.getElementById('userPassword').value.trim();
  const role = document.querySelector('input[name="role"]:checked').value;

  if (userName === '' || userPassword === '') {
    errorMessage.textContent = 'Enter username and password';
    return;
  }

  if (role === 'admin' && userName === 'admin' && userPassword === 'password2') {
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('userRole', 'admin');
    localStorage.setItem('rememberMe', rememberMe.checked ? 'true' : 'false');
    window.location.href = 'adminDashboard.html';
    return;
  }

  if (role === 'user' && userName === 'username' && userPassword === 'password') {
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('userRole', 'user');
    localStorage.setItem('rememberMe', rememberMe.checked ? 'true' : 'false');
    window.location.href = 'userDashboard.html';
    return;
  }

  const savedPassword = localStorage.getItem(`user_${userName}`);
  if (role === 'user' && savedPassword && savedPassword === userPassword) {
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('userRole', 'user');
    localStorage.setItem('rememberMe', rememberMe.checked ? 'true' : 'false');
    window.location.href = 'userDashboard.html';
    return;
  }

  errorMessage.textContent = 'Incorrect details, try again';
});