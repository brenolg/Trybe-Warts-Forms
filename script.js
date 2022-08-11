function login() {
    let senha = document.getElementById('senha').value;
    let email = document.getElementById('email').value;

    if (senha === "123456" && email === "tryber@teste.com") {
        alert("Ola")
    }
}

document.getElementById('btn').addEventListener('click', login);
