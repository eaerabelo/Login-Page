const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Adiciona a classe 'active' para mostrar o painel de cadastro
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

// Remove a classe 'active' para voltar ao painel de login
loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});