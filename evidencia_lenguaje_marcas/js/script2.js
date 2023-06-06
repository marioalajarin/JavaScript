var baraja=[];  //Creamos array para la baraja

for (var i=1; i<=10;i++){   //Creamos una carta para cada palo y le asignamos un valor
    for(var j=0;j<4;j++){
        var carta={
            valor:i,
            palo:j

        };
        baraja.push(carta);
    }
}

function repartirCartas(){
    var cartas_mano=[]; //Creamos un array para la mano (sacamos 5 cartas)
    for(var i=0;i<5;i++){   //Hacemos un bucle para que nos salgan 5 cartas aleatorias
        var indice_carta=Math.floor(Math.random() * baraja.length);
        var carta=baraja[indice_carta];
        cartas_mano.push(carta);
        baraja.splice(indice_carta, 1);
    }
    return cartas_mano; //Retornamos la función
}

function mostrarCartas(cartas_mano){
    var mano=document.getElementById("mano");   //Recogemos el elemento cuya id es "mano" (el div)
    mano.innerHTML="";  //Hacemos esto para que cada vez que le demos a generar cartas no se acumulen y desaparezcan para hacer espacio para las nuevas cartas

    for(var i=0;i<cartas_mano.length;i++){  //Hacemos un bucle para que por cada carta de la mano cree un div
        var carta=cartas_mano[i];
        var contenedor_carta=document.createElement("div");
        contenedor_carta.classList.add("carta");
        
        var valor=carta.valor;  //Hacemos una variable para que dependiendo del valor se asigne un valor nuevo a las cartas especiales (As, Sota, Caballo y Rey)
        if (valor === 1) {
            valor = "As";
          } else if (valor === 8) {
            valor = "Sota";
          } else if (valor === 9) {
            valor = "Caballo";
          } else if (valor === 10) {
            valor = "Rey";
          }
          var contenedor_valor = document.createElement("div");
          contenedor_valor.classList.add("value");
          contenedor_valor.textContent = valor;
          contenedor_carta.appendChild(contenedor_valor);//Se añade el valor y se muestra


          var palo = carta.palo;        //Hacemos una variable que recoga el palo para que se escriba junto a la carta
          var contenedor_palo = document.createElement("div"); //Creamos un div por cada palo generado
          contenedor_palo.classList.add("tipo_palo");   
          if (palo === 0) { //Dependiendo del número del palo se le pone un nombre (Corazones, Diamantes, Picas o Tréboles)
            contenedor_palo.textContent = "Corazones";
          } else if (palo === 1) {
            contenedor_palo.textContent = "Diamantes";
          } else if (palo === 2) {
            contenedor_palo.textContent = "Picas";
          } else if (palo === 3) {
            contenedor_palo.textContent = "Tréboles";
          }
          contenedor_carta.appendChild(contenedor_palo);
          mano.appendChild(contenedor_carta);   //Mostramos el contenedor
    }
}

function repartir() {   //Hacemos una función para invocar la función de repartir_cartas y mostrar_cartas
    var cartas_mano = repartirCartas();
    mostrarCartas(cartas_mano);
  }