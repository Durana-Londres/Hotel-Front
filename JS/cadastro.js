 document.getElementById("form").addEventListener("submit", function (e) {
const senha = document.getElementById("senha").value;
 const confirmar = document.getElementById("verif").value;
const mensagem = document.getElementById("mensagem");

   if(senha.length < 8){
    e.preventDefault();
    mensagem.textContent = "a senha deve conter no minímo 8 caratecres";
   } else if (senha !== confirmar) {
     e.preventDefault();
     mensagem.textContent = "As senhas não coincidem.";
      } else {
    mensagem.textContent = ""; 
      }
    });

