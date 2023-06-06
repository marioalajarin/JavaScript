
fetch('https://www.el-tiempo.net/api/json/v2/provincias') //Recogemos la información del JSON.
.then(response => response.json()) //Se analiza el JSON y se convierte a JavaScript.
.then(data => {
  for (var i = 0; i < data.provincias.length; i++) { //Se recorre todos los datos del JSON.
    var provincia = data.provincias[i];//Se crea una fila por cada provincia.
    var row = ` 
            <tr>
                <td>${provincia.CODPROV}</td>
                <td>${provincia.NOMBRE_PROVINCIA}</td>
                <td>${provincia.CODAUTON}</td>
                <td>${provincia.COMUNIDAD_CIUDAD_AUTONOMA}</td>
                <td>${provincia.CAPITAL_PROVINCIA}</td>
            </tr>
        `; 
    document.querySelector("#tabla tbody").innerHTML += row;
  }
});


fetch('https://www.el-tiempo.net/api/json/v2/provincias')
  .then(response => response.json())
  .then(data => {
    var tabla = document.querySelector("#tabla tbody");
    var searchBox = document.querySelector("#searchBox"); //Instancia la caja de búsquedas.

    searchBox.addEventListener("input", function() { //Crea un "EventListener" para que por cada input que hagamos haga una función determinada.
      var filter = searchBox.value.trim();  //Nos filtra dependiendo del contenido de la caja.

      
      tabla.innerHTML = ""; //Limpia las tablas que no coincidan con el filtro.

      for (var i = 0; i < data.provincias.length; i++) {
        var provincia = data.provincias[i];
        if (provincia.CODPROV.includes(filter)) { // Nos muestra únicamente las filas que estén después de haber filtrado la información.
          var row = `
              <tr>
                  <td>${provincia.CODPROV}</td>
                  <td>${provincia.NOMBRE_PROVINCIA}</td>
                  <td>${provincia.CODAUTON}</td>
                  <td>${provincia.COMUNIDAD_CIUDAD_AUTONOMA}</td>
                  <td>${provincia.CAPITAL_PROVINCIA}</td>
              </tr>
          `;
          tabla.innerHTML += row;
        }
      }
    });
  });
