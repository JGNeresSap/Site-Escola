const alunoBtn = document.querySelector('.aluno');
  const professorBtn = document.querySelector('.professor');
  const loginLabel = document.getElementById('login-label');
  const loginInput = document.getElementById('login-input');

  alunoBtn.classList.add("selecionado");
  loginInput.setAttribute("maxlength", "8");
  loginInput.setAttribute("minlength", "8");

  loginInput.addEventListener('input', () => {
    loginInput.value = loginInput.value.replace(/\D/g, '');
  });

  alunoBtn.addEventListener('click', () => {
    alunoBtn.classList.add("selecionado");
    professorBtn.classList.remove("selecionado");

    loginLabel.textContent = "CGM";
    loginInput.placeholder = "Digite seu CGM";
    loginInput.setAttribute("maxlength", "8");
    loginInput.setAttribute("minlength", "8");
    loginInput.value = "";
  });

  professorBtn.addEventListener('click', () => {
    professorBtn.classList.add("selecionado");
    alunoBtn.classList.remove("selecionado");

    loginLabel.textContent = "CPF";
    loginInput.placeholder = "Digite seu CPF";
    loginInput.setAttribute("maxlength", "11");
    loginInput.setAttribute("minlength", "11");
    loginInput.value = "";
  });
  function MostrarSenha() {
        const inputPass = document.getElementById('password');
        const btnShowPass = document.getElementById('btn-senha');

        if (inputPass.type === 'password') {
            inputPass.setAttribute('type', 'text');
            btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
        } else {
            inputPass.setAttribute('type', 'password');
            btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
        }
    }
     const btnLogin = document.querySelector('.btn-login');

  btnLogin.addEventListener('click', () => {
    const cgmCpf = loginInput.value.trim();
    const senha = document.getElementById('password').value.trim();
    const tipo = alunoBtn.classList.contains('selecionado') ? 'aluno' : 'professor';
    const minLength = tipo === 'aluno' ? 8 : 11;

    if (cgmCpf.length !== minLength || senha.length < 8) {
      mostrarAlerta("Preencha os dados corretamente.", "erro");
      return;
    }

    mostrarAlerta("Login realizado com sucesso!", "sucesso");

    setTimeout(() => {
      window.location.href = "http://127.0.0.1:5500/SiteEscola/Inicio.html";
    }, 2000);
  });

function mostrarAlerta(mensagem, tipo) {
  const alerta = document.createElement("div");
  alerta.classList.add("alerta", tipo);
  alerta.innerHTML = `
    <span class="msg">${mensagem}</span>
    <i class="bi bi-x" onclick="fecharAlerta(this)"></i>
  `;

  document.getElementById("alert-container").appendChild(alerta);

  setTimeout(() => {
    alerta.classList.add("remover");
    setTimeout(() => alerta.remove(), 500);
  }, 5000);
}

function fecharAlerta(icon) {
  const alerta = icon.parentElement;
  alerta.classList.add("remover");
  setTimeout(() => alerta.remove(), 500);
}