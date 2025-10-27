// Cadastro
const formCadastro = document.getElementById('formCadastro');
formCadastro.addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('emailCadastro').value;
  const senha = document.getElementById('senhaCadastro').value;

  // Salvar no localStorage (exemplo simples)
  const usuario = { nome, email, senha };
  localStorage.setItem(email, JSON.stringify(usuario));

  alert('Usuário cadastrado com sucesso!');
  formCadastro.reset();
});

// Login
const formLogin = document.getElementById('formLogin');
formLogin.addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('emailLogin').value;
  const senha = document.getElementById('senhaLogin').value;

  const usuarioJSON = localStorage.getItem(email);
  if (!usuarioJSON) {
    alert('Usuário não encontrado!');
    return;
  }

  const usuario = JSON.parse(usuarioJSON);

  if (usuario.senha === senha) {
    alert(`Bem-vindo, ${usuario.nome}!`);
  } else {
    alert('Senha incorreta!');
  }

  formLogin.reset();
});
 