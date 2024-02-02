document.getElementById('botao_cadastrar_passageiro').addEventListener('click', cadastrarPassageiro);
document.getElementById('botao_enviar_passageiros').addEventListener('click', enviarPassageiros);

const passageiros = [];

function cadastrarPassageiro(event) {
  event.preventDefault();
  const nome = document.getElementById('nome');
  const cpf = document.getElementById('cpf');
  const endereco = document.getElementById('endereco');
  const radios = document.getElementsByName('classe_passageiro');
  classe = Array.from(radios).filter(r => r.checked)[0];
  classe_selecionada = classe ? classe.value : undefined;

  const formulario = {
    'nome': nome.value,
    'cpf': cpf.value,
    'endereco': endereco.value,
    'classe': classe_selecionada
  };

  if (!validarFormulario(formulario)) {
    exibirErroValidacao();
    return;
  }

  if (cpfJaCadastrado(formulario.cpf)) {
    exibirErroCpfCadastrado();
    return;
  }

  passageiros.push(formulario);
  console.log(passageiros)
  limparBadgeDeErro();
  limpar();
}

function validarFormulario({ nome, cpf, endereco, classe }) {
  if (nome === null || nome === undefined || nome === '') {
    return false;
  }

  if (cpf === null || cpf === undefined || cpf === '') {
    return false;
  }

  if (endereco === null || endereco === undefined || endereco === '') {
    return false;
  }

  if (classe === null || classe === undefined || classe === '') {
    return false;
  }

  return true;
}

function cpfJaCadastrado(cpf) {
  return passageiros.filter(p => p.cpf === cpf).length > 0;
}

function exibirErroValidacao() {
  exibirBadgeDeErro('Preencha todos os campos do formulário.')
}

function exibirErroCpfCadastrado() {
  exibirBadgeDeErro('Já existe um passageiro cadastrado com este CPF.')
}

function exibirBadgeDeErro(mensagem) {
  const badge = document.getElementById('badge_erro_cadastro_passageiro');
  badge.style.display = 'block';
  badge.textContent = mensagem;
}

function limparBadgeDeErro() {
  const badge = document.getElementById('badge_erro_cadastro_passageiro');
  badge.style.display = 'none';
  badge.textContent = '';
}

function enviarPassageiros(event) {
  event.preventDefault();
  limparBadgeDeErro();

  let passageirosSalvos = JSON.parse(localStorage.getItem('passageiros')) || [];

  passageirosSalvos = passageirosSalvos.concat(passageiros);

  localStorage.setItem('passageiros', JSON.stringify(passageirosSalvos));

  window.location.href = 'passageiros.html';
}



function limpar() {
  const nome = document.getElementById('nome');
  const cpf = document.getElementById('cpf');
  const endereco = document.getElementById('endereco');
  const radios = document.getElementsByName('classe_passageiro');

  nome.value = '';
  cpf.value = '';
  endereco.value = '';

  Array.from(radios).map(r => {
    r.checked = false;
  });
}