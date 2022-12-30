//formulario y thanks

const form = document.querySelector('.main_form');
const thanks = document.querySelector('.thanks_section');

// Nombre dinamico en la tarjeta y error

const cardName = document.querySelector('.name');
const inputName = document.querySelector('#Cardholder');
const errorName = document.querySelector('.cardholder--error');

inputName.addEventListener('input', () => {
  if (regNum.test(inputName.value)) {
    mostrarError(inputName, errorName, 'Wrong format, letters only');
  } else {
    mostrarError(inputName, errorName, '', false);
  }
  if (inputName.value == '') {
    cardName.innerText = 'HECTOR MONTAÑA';
  } else {
    cardName.innerText = inputName.value;
  }
});

// Numero dinamico en la tarjeta y error

const numberCard = document.querySelector('.numero');
const inputNumber = document.querySelector('#Cardnumber');
const errorNumber = document.querySelector('.cardnumber--error');

inputNumber.addEventListener('input', (e) => {
  numberCard.innerText = inputNumber.value;
  let inputValue = e.target.value;
  if (regExp.test(inputNumber.value)) {
    mostrarError(inputNumber, errorNumber, 'Wrong format, numbers only');
  } else {
    inputNumber.value = inputValue
      .replace(/\s/g, '')
      .replace(/([0-9]{4})/g, '$1 ')
      .trim();
    errorNumber.innerText = '';
    mostrarError(inputNumber, errorNumber, '', false);
  }

  if (inputNumber.value == '') {
    numberCard.innerText = '0000 0000 0000 0000';
  }
});

// mes

const monthCard = document.querySelector('.month');
const inputMonth = document.querySelector('#inputMonth');
const errorMonth = document.querySelector('.mm--error');

inputMonth.addEventListener('input', () => {
  monthCard.innerText = inputMonth.value;

  if (regExp.test(inputMonth.value)) {
    mostrarError(inputMonth, errorMonth, 'Wrong format, numbers only');
  } else {
    mostrarError(inputMonth, errorMonth, '', false);
  }

  if (inputMonth.value == '') {
    monthCard.innerText = '00';
  } else {
    monthCard.innerText = inputMonth.value;
  }
});

// año

const yearCard = document.querySelector('.year');
const inputYear = document.querySelector('#inputYear');
const errorYear = document.querySelector('.yy--error');

inputYear.addEventListener('input', () => {
  yearCard.innerText = inputYear.value;

  if (regExp.test(inputYear.value)) {
    mostrarError(inputYear, errorYear, 'Wrong format, numbers only');
  } else {
    mostrarError(inputYear, errorYear, '', false);
  }

  if (inputYear.value == '') {
    yearCard.innerText = '00';
  } else {
    yearCard.innerText = inputYear.value;
  }
});

//cvc
const cvcCard = document.querySelector('.cvc');
const inputCvc = document.querySelector('#inputCvc');
const errorCvc = document.querySelector('.container_cvc--error');

inputCvc.addEventListener('input', () => {
  cvcCard.innerText = inputCvc.value;
  if (regExp.test(inputCvc.value)) {
    mostrarError(inputCvc, errorCvc, 'Wrong format, numbers only');
  } else {
    mostrarError(inputCvc, errorCvc, '', false);
  }

  if (inputCvc.value == '') {
    cvcCard.innerText = '000';
  } else {
    cvcCard.innerText = inputCvc.value;
  }
});

// boton de confirmar

let validacionNombre = false;
let validacionNumeroTarjeta = false;
let validacionMonth = false;
let validacionYear = false;
let validacionCvc = false;

const confirmButtom = document.querySelector('.input_submit');
confirmButtom.addEventListener('click', (e) => {
  e.preventDefault();
  //validar nombre
  if (verificarComplete(inputName, errorName)) {
    validacionNombre = true;
  } else {
    validacionNombre = false;
  }

  // validar numero de tarjeta

  if (verificarComplete(inputNumber, errorNumber) == true) {
    if (inputNumber.value.length == 19) {
      mostrarError(inputNumber, errorNumber, '', false);
      validacionNumeroTarjeta = true;
    } else {
      mostrarError(inputNumber, errorNumber, 'Wrong number');
      validacionNumeroTarjeta = false;
    }
  }

  // validar mes
  if (verificarComplete(inputMonth, errorMonth)) {
    if (parseInt(inputMonth.value) > 0 && parseInt(inputMonth.value) <= 12) {
      mostrarError(inputMonth, errorMonth, '', false);
      validacionMonth = true;
    } else {
      mostrarError(inputMonth, errorMonth, 'Wrong Moth incorrect');
      validacionMonth = false;
    }
  }

  //vailar año
  if (verificarComplete(inputYear, errorYear)) {
    if (parseInt(inputYear.value) > 20 && parseInt(inputYear.value) <= 27) {
      mostrarError(inputYear, errorYear, '', false);
      validacionYear = true;
    } else {
      mostrarError(inputYear, errorYear, 'Wrong Year');
      validacionYear = false;
    }
  }
  //valiar cvc
  if (verificarComplete(inputCvc, errorCvc)) {
    if (inputCvc.value.length == 3) {
      mostrarError(inputCvc, errorCvc, '', false);
      validacionCvc = true;
    } else {
      mostrarError(inputCvc, errorCvc, 'Wrong CVC');
      validacionCvc = false;
    }
  }

  if (
    validacionCvc == true &&
    validacionMonth == true &&
    validacionYear == true &&
    validacionNumeroTarjeta == true &&
    validacionNombre == true
  ) {
    form.style.display = 'none';
    thanks.style.display = 'block';
  }
});

// Funciones de errores y variales

let regExp = /[A-z]/g;
let regNum = /[0-9]/g;

function mostrarError(divInput, divError, msgError, mostrar = true) {
  if (mostrar) {
    divError.innerText = msgError;
    divInput.style.borderColor = '#FF0000';
  } else {
    divError.innerText = msgError;
    divInput.style.borderColor = 'hsl(270, 3%, 87%)';
  }
}

function verificarComplete(divInput, divError) {
  if (divInput.value.length > 0) {
    mostrarError(divInput, divError, '', false);
    return true;
  } else {
    mostrarError(divInput, divError, "Can't be blank");
    return false;
  }
}
