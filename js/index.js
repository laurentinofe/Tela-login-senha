document.getElementById('formulario-login').addEventListener('submit', function(event) {
    event.preventDefault(); // Impedir envio ao abrir

const email = document.getElementById('email').value;
const senha = document.getElementById('senha').value;

// Mapeamento das credenciais
const usuarios = {
    'eliassavi@mail.com': 'Elias',
    'rafaelferreira@mail.com': 'Rafael'
};

// Credenciais
const credenciaisCorretas = [
    { email: 'eliassavi@mail.com', senha: '123' },
    { email: 'rafaelferreira@mail.com', senha: '123' }
];

const mensagemElemento = document.getElementById('mensagem');

// Verifica credenciais
const credencialValida = credenciaisCorretas.find(cred => cred.email === email && cred.senha === senha);

if (credencialValida) {
    // Login OK
    const usuarioNome = usuarios[credencialValida.email];
    mensagemElemento.textContent = `Bem-vindo, ${usuarioNome}!`;
    mensagemElemento.classList.add('sucesso');
    mensagemElemento.classList.remove('erro');
    
} else {
    // Login ERRO
    mensagemElemento.textContent = 'Usuário ou senha incorretos';
    mensagemElemento.classList.add('erro');
    mensagemElemento.classList.remove('sucesso');
}

});

document.getElementById('botao-cancelar').addEventListener('click', function() {
    // Limpa os campos
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';
    
    // Mensagem apos cancelar
    const mensagemElemento = document.getElementById('mensagem');
    mensagemElemento.textContent = 'Você saiu do sistema';
    mensagemElemento.classList.remove('sucesso', 'erro');
});
