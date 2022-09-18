const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	tipDocumento: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	numDocumento:/^\d{5,12}$/, // 5 a 14 numeros.
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	date:/^\d{5,12}$/,
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
	tipDocumento: false,
	numDocumento: false,
	nombre: false,
	apellido: false,
	date: false,
	password: false,
	correo: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "tipDocumento":
			validarCampo(expresiones.tipDocumento, e.target, 'tipDocumento');
		break;
		case "numDocumento":
			validarCampo(expresiones.numDocumento, e.target, 'numDocumento');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "date":
			validarCampo(expresiones.data, e.target, 'data')
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validardate();
		break;
		case "date":
			validardate();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validardate = () => {
	const inputPassword1 = document.getElementById('password');
	const inputdate = document.getElementById('date');

	if(inputPassword1.value !== inputdate.value){
		document.getElementById(`grupo__date`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__date`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__date i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__date i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__date .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__date`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__date`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__date i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__date i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__date .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}
date.onchange = e => {
	const date = parseInt(e.target.value)
	if(date < 2002){
		document.getElementById(`grupo__date`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__date`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__date i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__date i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__date .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['date'] = false
	}else{
		document.getElementById(`grupo__date`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__date`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__date i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__date i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__date .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['data'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.tipDocumento && campos.numDocumento && campos.nombre && campos.apellido && campos.date && campos.password && campos.correo && campos.telefono && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});