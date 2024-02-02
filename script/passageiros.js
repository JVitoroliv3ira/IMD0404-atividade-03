document.addEventListener('DOMContentLoaded', function() {
    let passageiros = JSON.parse(localStorage.getItem('passageiros')) || [];
    
    displayPassageiros(passageiros);
    
    function search() {
      const searchTerm = document.getElementById('search-input').value.toLowerCase();
      const classFilter = document.getElementById('class-filter').value;
      
      const filteredPassageiros = passageiros.filter(passageiro => {
        return (
          (passageiro.nome.toLowerCase().includes(searchTerm) ||
           passageiro.cpf.includes(searchTerm) ||
           passageiro.endereco.toLowerCase().includes(searchTerm)) &&
          (passageiro.classe === classFilter || classFilter === '')
        );
      });
      
      displayPassageiros(filteredPassageiros);
    }
    
    document.getElementById('class-filter').addEventListener('change', search);
    
    document.getElementById('search-input').addEventListener('keyup', search);
  
    displayPassageiros(passageiros);
  });
  
  function displayPassageiros(passageiros) {
    const listaDiv = document.getElementById('passageiros-lista');
    listaDiv.innerHTML = '';
  
    passageiros.forEach((passageiro, index) => {
        const div = document.createElement('div');
        div.classList.add('passageiro');
        div.innerHTML = `
          <div class="passageiro-titulo"><span class="passageiro-label">Passageiro ${index + 1}:</span></div>
          <div><span class="passageiro-label">Nome:</span> ${passageiro.nome}</div>
          <div><span class="passageiro-label">CPF:</span> ${passageiro.cpf}</div>
          <div><span class="passageiro-label">Endereço:</span> ${passageiro.endereco}</div>
          <div><span class="passageiro-label">Classe:</span> ${passageiro.classe}</div>
        `;
        listaDiv.appendChild(div);
      });
      
  }
  