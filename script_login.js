document.getElementById('loginButton').addEventListener('click', function () {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    // Verifica se as credenciais estão corretas
    if (login === 'Usuario1' && password === '1234') {
        window.location.href = 'outraTela.html'; // Redireciona para a nova página
    } else {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.style.display = 'block'; // Exibe mensagem de erro
    }
});
