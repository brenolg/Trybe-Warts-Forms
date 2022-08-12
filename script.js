function login() {
  const senha = document.getElementById('senha').value;
  const email = document.getElementById('email').value;

  if (senha === '123456' && email === 'tryber@teste.com') {
    alert('Olá, Tryber!');
  } else { alert('Email ou senha inválidos.'); }
}

document.getElementById('btn').addEventListener('click', login);

const textA = document.querySelector('#textarea');

// eslint-disable-next-line no-unused-vars
textA.addEventListener('keyup', () => {
  const inputlenght = textA.value.length;
  const p = document.querySelector('#counter');
  p.innerHTML = 500 - inputlenght;
});

const btnSubmit = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#label-infos');
btnSubmit.disabled = true;
function disableBtn() {
  if (checkbox.value === '') {
    btnSubmit.disabled = true;
  } else {
    btnSubmit.disabled = false;
  }
}
checkbox.addEventListener('change', disableBtn);

// eslint-disable-next-line no-use-before-define
// document.getElementById('submit-btn').onclick = novoForm;
// function novoForm() {
//   const form = document.createElement('div');
//   form.id = 'form-data';
//   document.querySelector('main').childNodes[1].appendChild(form);
// }
