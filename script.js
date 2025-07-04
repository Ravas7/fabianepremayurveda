document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-agendamento");
  const mensagemSucesso = document.getElementById("mensagem-sucesso");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const telefone = form.telefone.value.trim();
    const servico = form.servico.value;
    const mensagem = form.mensagem.value.trim();

    
    if (nome.length < 3) {
      alert("Nome deve ter ao menos 3 caracteres.");
      return;
    }

    if (!email.includes("@") || email.length < 6) {
      alert("E-mail inválido.");
      return;
    }

    if (telefone.length < 8) {
      alert("Informe um telefone válido.");
      return;
    }

    if (!servico) {
      alert("Escolha um serviço.");
      return;
    }

    if (mensagem.length < 10) {
      alert("A mensagem deve ter ao menos 10 caracteres.");
      return;
    }

   
    mensagemSucesso.style.display = "block";
    form.reset();
  });
});

document.getElementById("toggle-tema").addEventListener("click", () => {
  document.body.classList.toggle("tema-escuro");
})
