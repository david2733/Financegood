// obteniendo inputs del usuario

const numeroDeIngresos = document.getElementById('numeroDeIngresos');
const divParaFuentesDeIngresos = document.getElementById('fuentesDeIngresos')
const divParaFuentesDeGastos = document.getElementById('fuentesDeGastos')
let valorNeto = 0
let bruto = 0
fuentesDeIngresosDatos = []
fuentesDeGastosDatos = []


// helpers 

function addFuentesDeIngresos() {

    const nombreDeFuente = document.getElementById('nombreDeFuente').value

    const valorDeIngresos = parseFloat(numeroDeIngresos.value)

    if (nombreDeFuente.length == 0 || valorDeIngresos <= 0) {
        alert("Por favor pon un numero valido")
        return false
    }
    const elemento = {
        nombre: nombreDeFuente,
        valor: valorDeIngresos
    }

    fuentesDeIngresosDatos.push(elemento)

    const div = document.createElement('div')
    let lego = 0
    for (i in fuentesDeIngresosDatos) {
        lego += 1
    }

    div.innerHTML += `
        <div class='fuentes_de_ingresos fuentes_de_ingresoss${lego}' onclick='toggle(".fuentes_de_ingresoss${lego}")'>
        <p>${nombreDeFuente}<br>
            ${valorDeIngresos}<br>
        </p>
        </div>
        `
    if (nombreDeFuente.length > 0 && valorDeIngresos > 0) divParaFuentesDeIngresos.append(div.querySelector('.fuentes_de_ingresoss' + lego))
    else alert('porfavor agrega un fuente de ingresos valida')


    document.getElementById('nombreDeFuente').value = ''
    document.getElementById('numeroDeIngresos').value = null

}

function addFuentesDeGastos() {

    const nombreDeFuente = document.getElementById('nombreDeGastos').value

    const valorDeIngresos = parseFloat(document.getElementById('numeroDeGastos').value)

    if (nombreDeFuente.length == 0 || valorDeIngresos <= 0 || valorDeIngresos == NaN) {
        alert("Por favor pon un numero valido")
        return false
    }
    const elemento = {
        nombre: nombreDeFuente,
        valor: valorDeIngresos
    }

    fuentesDeGastosDatos.push(elemento)

    const div = document.createElement('div')
    let lego = 0
    for (i in fuentesDeGastosDatos) {
        lego += 1
    }

    div.innerHTML += `
        <div class='fuentes_de_gastos fuentes_de_gastos${lego}' onclick='toggle(".fuentes_de_gastos${lego}")'>
        <p>${nombreDeFuente}<br>
            ${valorDeIngresos}<br>
        </p>
        </div>
        `
    if (nombreDeFuente.length > 0 && valorDeIngresos > 0) divParaFuentesDeGastos.append(div.querySelector('.fuentes_de_gastos' + lego))
    else alert('porfavor agrega un fuente de ingresos valida')


}

// calculating the tax income

function calcularImpuestoDeRenta() {
    const impuesto = document.querySelector('.ingresoTotal')
    const porcentaje = 0.08

    fuentesDeIngresosDatos.forEach(element => {
        bruto += parseInt(element.valor)
    });
    valorNeto = (bruto - (bruto * porcentaje)).toFixed(2)
    impuesto.innerHTML = `tus ingresos brutos son de ${bruto} dolares, con impuestos restados son ${valorNeto} pesos`

    document.getElementById('gastoNumero').innerHTML = `tu dinero actual es de ${valorNeto} pesos`

    for (i = 0; i < fuentesDeIngresosDatos.length; i++) {
        delete fuentesDeIngresosDatos[i]
    }

}




function calcularGastoTotal() {
    let gastoFinal = 0

    fuentesDeGastosDatos.forEach(element => {

        gastoFinal += element.valor

    })

    const resultadoFinal = document.getElementById('gastoTotal')
    const final = valorNeto - gastoFinal
    console.log(gastoFinal)

    if (final > 0) {
        resultadoFinal.innerHTML = `despues de pagar todos tus gastos te sobra ${final} pesos`
    }
    else if (final < 0) {
        resultadoFinal.innerHTML = `arregla tus finanzas, no te sobra nada incluso the falta ${Math.abs(final)} pesos`
    }
    else {
        resultadoFinal.innerHTML = `no te sobra nada :(`
    }
    document.getElementById('gastoNumero').innerHTML = `tu dinero actual es de ${final} pesos `

    bruto = 0
    valorNeto = valorNeto - gastoFinal
}




function toggle(e) {
    document.querySelector(e).classList.toggle('tg')

}



function deleteElement() {

    let items = document.querySelectorAll('.fuentes_de_gastos')


    if (items.length) {
        for (i = 0; i < items.length; i++) {
            if (items[i].classList.contains('tg')) {
                console.log(i);
                items.item(i).remove()
                if (fuentesDeGastosDatos[i]) delete fuentesDeGastosDatos[i]
                else if (fuentesDeGastosDatos){
                    for (i in fuentesDeGastosDatos){
                        delete fuentesDeGastosDatos[i]
                    }
                }
            }
        }
    }

}

function deleteElementIngresos() {

    let items = document.querySelectorAll('.fuentes_de_ingresos')


    if (items.length) {
        for (i = 0; i < items.length; i++) {
            if (items[i].classList.contains('tg')) {
                console.log(i);
                items.item(i).remove()
                if (fuentesDeIngresosDatos[i]) delete fuentesDeIngresosDatos[i]
                else continue
            }
        }
    }


}



function deleteNodesBetween(nodeList, startValue, endValue) {
    for (let actualValue = endValue - 1; actualValue >= startValue; actualValue -= 1) {
        nodeList.item(actualValue).remove();
    }
}
//f