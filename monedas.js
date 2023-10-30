var datosPaises;

function poblarDatosPaises() {

    var url = 'https://restcountries.com/v3.1/independent?status=true';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(paises => {

            datosPaises = paises;
            mostrarDatosMonedas();
            mostrarDatosPaisesTabla()
            adicionarMonedasSelect()
        
            
        });

}

function mostrarDatosMonedas() {

    for (const pais of datosPaises) {

        var currencies = pais.currencies;
        
        var keys = Object.keys(currencies);

        for (const key of keys) {
            
            console.log(currencies[key].name)
        }


    }
}

function mostrarDatosPaisesTabla() {

    var tabla = document.getElementById("tablaPaises");

    for (const pais of datosPaises) {

        var fila = tabla.insertRow(-1);
        var columnaNombre = fila.insertCell(0);
        var columnaCapital = fila.insertCell(1);

        columnaNombre.innerHTML = pais.name.common;
        columnaCapital.innerHTML = pais.capital[0];

    }
}

function adicionarPaisesSelect() {

    var selectPaises = document.getElementById("selectPaises")

    for (const pais of datosPaises) {
        var option = crearNodoTexto("option", pais.name.common)
        adicionarNodoAContenedor(option, selectPaises)
    }

}