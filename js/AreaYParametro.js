let btn = document.getElementById('btn')


function perimetroCuadrado(){

    let res = document.getElementById("res")
    let lado = parseInt(document.getElementById('lado').value)

    let resultado = lado*4


    let inser = `<p>El perimetro del cuadrado es ${resultado}</p>`
    res.innerHTML = inser
    res.style.setProperty('font-size', '15px');
    


}

btn.addEventListener('click',perimetroCuadrado)

//area

let btnArea = document.getElementById('btn-area')


function areaCuadrado(){

    let res = document.getElementById("res1")
    let base = parseInt(document.getElementById('cua-base').value)
    let altura = parseInt(document.getElementById('cua-altura').value)

    let resultado = base*altura


    let inser = `<p>El area del cuadrado es ${resultado}</p>`
    res.innerHTML = inser
    res.style.setProperty('font-size', '15px');
    


}

btnArea.addEventListener('click',areaCuadrado)


//rectangulo

let btnRec = document.getElementById('btn-rec')


function perimetroRectangulo(){

    let res = document.getElementById("res2")
    let base = parseInt(document.getElementById('rec-base').value)
    let altura = parseInt(document.getElementById('rec-altura').value)

    let resultado =  (base*2)+(altura*2)


    let inser = `<p>El perimetro del rectangulo es ${resultado}</p>`
    res.innerHTML = inser
    res.style.setProperty('font-size', '15px');
    


}

btnRec.addEventListener('click',perimetroRectangulo)

//area

let btnRecArea = document.getElementById('btn-rec-area')


function areaRectangulo(){

    let res = document.getElementById("res3")
    let base = parseInt(document.getElementById('rec-base-area').value)
    let altura = parseInt(document.getElementById('rec-altura-area').value)

    let resultado =  base*altura


    let inser = `<p>El area del rectangulo es ${resultado}</p>`
    res.innerHTML = inser
    res.style.setProperty('font-size', '15px');
    


}

btnRecArea.addEventListener('click',areaRectangulo)


//triangulo


let btntri = document.getElementById('btn-tri')


function perimetroTriangulo(){

    let res = document.getElementById("res-tri")
    let lado1 = parseInt(document.getElementById('tri-lado1').value)
    let lado2 = parseInt(document.getElementById('tri-lado2').value)
    let lado3 = parseInt(document.getElementById('tri-lado3').value)

    let resultado =  lado1+lado2+lado3


    let inser = `<p>El perimetro del triangulo es ${resultado}</p>`
    res.innerHTML = inser
    res.style.setProperty('font-size', '15px');
    


}

btntri.addEventListener('click',perimetroTriangulo)

//area

let btntri1 = document.getElementById('btn-tri1')


function areaTriangulo(){

    let res = document.getElementById("res-tri1")
    let base = parseInt(document.getElementById('base-tri').value)
    let altura = parseInt(document.getElementById('altura-tri').value)

    let resultado =  (base*altura)/2


    let inser = `<p>El area del triangulo es ${resultado}</p>`
    res.innerHTML = inser
    res.style.setProperty('font-size', '15px');
    


}

btntri1.addEventListener('click',areaTriangulo)



//circulo

let btncir = document.getElementById('btn-cir')


function perimatroCirculo(){

    let res = document.getElementById("res-cir")
    let radio = parseInt(document.getElementById('radio').value)


    let resultado =  2*3.1416*radio


    let inser = `<p>El perimetro del circulo es ${resultado}</p>`
    res.innerHTML = inser
    res.style.setProperty('font-size', '15px');
    


}

btncir.addEventListener('click',perimatroCirculo)

//area

let btncirarea = document.getElementById('btn-cir-area')


function areaCirculo(){

    let res = document.getElementById("res-cir-area")
    let radio = parseInt(document.getElementById('radio-area').value)


    let resultado =  (radio*radio)*3.1416


    let inser = `<p>El area del circulo es ${resultado}</p>`
    res.innerHTML = inser
    res.style.setProperty('font-size', '15px');
    


}

btncirarea.addEventListener('click',areaCirculo)








