document.getElementById('botao_login').addEventListener('click', autenticar);
document.getElementById('botao_limpar_formulario_login').addEventListener('click', limpar);

function autenticar(event) {
  event.preventDefault();

  const usuario = document.getElementById('usuario');
  const senha = document.getElementById('senha');
  const formulario = {
    'usuario': usuario.value,
    'senha': senha.value
  }

  if (!validarFormulario(formulario)) {
    exibirErroValidacao();
    return;
  }

  if (!realizarLogin(formulario)) {
    exibirErroAutenticacao();
    return;
  }

  limpar(event);
  window.location.href = 'venda.html';
  
}

function validarFormulario({ usuario, senha }) {
  if (usuario === null || usuario === undefined || usuario === '') {
    return false;
  }

  if (senha === null || senha === undefined || senha === '') {
    return false;
  }

  return true;
}

function realizarLogin({ usuario, senha }) {
  if (usuario === 'admin' && senha === 'admin') {
    return true;
  }

  return false;
}

function exibirErroValidacao() {
  exibirBadgeDeErro('Preencha todos os campos do formulário.')
}

function exibirErroAutenticacao() {
  exibirBadgeDeErro('Login e/ou senha incorretos.');
}

function exibirBadgeDeErro(mensagem) {
  const badge = document.getElementById('badge_erro');
  badge.style.display = 'block';
  badge.textContent = mensagem;
}

function limparBadgeDeErro() {
  const badge = document.getElementById('badge_erro');
  badge.style.display = 'none';
  badge.textContent = '';
}

function limpar(event) {
  event.preventDefault();

  const usuario = document.getElementById('usuario');
  const senha = document.getElementById('senha');

  usuario.value = '';
  senha.value = '';
  limparBadgeDeErro();
}
