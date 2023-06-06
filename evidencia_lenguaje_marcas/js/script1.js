fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>response.json())
    .then(data=>{ //Conseguimos los datos del json mediante "fetch" y los usamos con "data"
        const tabla=document.getElementById("tabla");   //Hacemos la constante para la tabla que hemos creado en el html
        const tabla_cuerpo=tabla.querySelector("tbody");    //Hacemos una constante para recoger el "tbody" dentro de la tabla 
        data.forEach(datos=>{   //Por cada dato en el json hacemos lo siguiente
            const fila=document.createElement("tr");    //Creamos una fila
            const celda=document.createElement("td");   //Creamos una celda (para el titulo)
            const celda2=document.createElement("td");  //Creamos otra celda (para el contenido)
            celda.textContent=datos.title;  //Le asignamos los datos del titulo a la celda
            celda2.textContent=datos.body;  //Le asignamos los datos del contenido a la celda2
            fila.appendChild(celda);    //Hacemos que se inserten los datos en cada fila
            fila.appendChild(celda2);
            tabla_cuerpo.appendChild(fila); //Hacemos que se inserte los datos de cada fila en el cuerpo de la tabla
            //console.log(datos.title); Esto es para verificar los datos en la consola
            //console.log(datos.body);
        })
        
        
    })
