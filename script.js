function login() {
    let senha = document.getElementById('senha').value;
    let email = document.getElementById('email').value;

    if (senha === "123456" && email === "tryber@teste.com") {
        alert("Olá, Tryber!")}
    else {alert("Email ou senha inválidos.")}
    
}

document.getElementById('btn').addEventListener('click', login);

let textA = document.querySelector('#textarea');

textA.addEventListener('keyup', function contador(e){
    let inputlenght = textA.value.length;
    let p = document.querySelector('#contador');
    p.innerHTML = inputlenght
 
})
