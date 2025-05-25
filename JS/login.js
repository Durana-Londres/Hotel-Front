 function login() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email === "admin@email.com" && senha === "123456") {
      window.location.href = "dashAdmin.html"; 
    } else {
      alert("Login inválido!");
    }
  }