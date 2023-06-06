fetch("https://www.el-tiempo.net/api/json/v2/provincias")
  .then(response =>response.json())
  .then(data=>{
    //console.log(data);
    llenarLista(data);
  })

//console.log("adios");

function llenarLista(data){
  let lista = document.getElementById("provincias");

  for(let p in data.provincias){
    let nodo = document.createElement("option");
    nodo.innerText=data.provincias[p].NOMBRE_PROVINCIA;
    nodo.value=data.provincias[p].CODPROV;
    lista.appendChild(nodo);
  }
}

function verElTiempo(){
  let lista = document.getElementById("provincias");
  const codProv=lista.value;
  console.log(codProv);
  fetch("https://www.el-tiempo.net/api/json/v2/provincias/"+codProv)
    .then(response=>response.json())
    .then(data_temperaturas=>{
      //console.log(data_temperaturas)
      const lista_ul=document.getElementById("lista");
      lista_ul.innerHTML="";
      for(let ps in data_temperaturas.ciudades){
        let itemlista=document.createElement("li");
        const temperatures=data_temperaturas.ciudades[ps].temperatures;
        const nombre_ciudad=data_temperaturas.ciudades[ps].name;
        const tempmax=temperatures.max;
        const tempmin=temperatures.min;
        console.log(tempmax);
        console.log(tempmin);
        const mensaje_temperaturas=("Nombre: "+nombre_ciudad+" | Temperatura máxima: "+tempmax+" | Temperatura mínima: "+tempmin);
        itemlista.innerText=mensaje_temperaturas;
        lista_ul.appendChild(itemlista);
      }


    })
}
