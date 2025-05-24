 document.getElementById("form").addEventListener("submit", function(e) {
      e.preventDefault(); 

      let senha = document.getElementById("senha").value;
      let confirmar = document.getElementById("verif").value;
      let mensagem = document.getElementById("mensagem");

      if (senha !== confirmar) {
        mensagem.textContent = "As senhas não coincidem.";
        mensagem.style.color = "red";}
    });