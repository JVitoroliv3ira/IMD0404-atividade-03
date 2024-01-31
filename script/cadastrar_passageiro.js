document.getElementById('botao_cadastrar_passageiro').addEventListener('click', cadastrarPassageiro);
document.getElementById('botao_enviar_passageiros').addEventListener('click', enviarPassageiros);

function cadastrarPassageiro(event) {
  event.preventDefault();
  console.log('Cadastrar Passageiro');
}

function enviarPassageiros(event) {
  event.preventDefault();
  console.log('Enviar Passageiros');
}