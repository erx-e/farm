var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");

// crear variables

var fondo = {
    url: "tile.png",
    cargaOK: false
}

var vaca = {
    url: "vaca.png",
    cargaOK: false
}


var cerdo = {
    url: "cerdo.png",
    cargaOk: false
}


var pollo = {
    url: "pollo.png",
    cargaOK: false
}



fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
// se escribe vaca.imagen debido a que se le quiere agregar una variable o atributo al objeto literal vaca
// es como agregar imagen: new Image(), pero sin que ocurra un error de sintaxis
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);
cerdo.imagen.addEventListener("load", dibujarCerdo);

// cargar imagenes

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}


function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}


function cargarPollos()
{
    pollo.cargaOK = true;
    dibujar();
}


function cargarCerdos()
{
    cerdo.cargaOK = true;
    dibujar();
}


// dibujar imagenes

var cantVacas = aleatorio(1,2)
var xV = []

for(var v = 0; v < cantVacas; v++)
{
    xV[v] = aleatorio(0,8) * 52.5
}

var yV = []

for(var v = 0; v < cantVacas; v++)
{
    yV[v] = aleatorio(0,8) * 52.5
}


var cantPollos = aleatorio(1,2)
var xP = []

for(var v = 0; v < cantPollos; v++)
{
    xP[v] = aleatorio(0,8) * 52.5
}

var yP = []

for(var v = 0; v < cantPollos; v++)
{
    yP[v] = aleatorio(0,8) * 52.5
}


var cantCerdos = aleatorio(1,2)
var xCC = []

for(var v = 0; v < cantCerdos; v++)
{
    xCC[v] = aleatorio(0,8) * 52.5
}

var yCC = []

for(var v = 0; v < cantCerdos; v++)
{
    yCC[v] = aleatorio(0,8) * 52.5
}




function dibujar()
{
 
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0,0)
    }

    if(vaca.cargaOK)
    {
      for(var v = 0; v<cantVacas; v++)
      {
        papel.drawImage(vaca.imagen, xV[v], yV[v])
      }
    }

    if(pollo.cargaOK)
    {
        for(var v = 0; v<cantPollos; v++)
        {
          papel.drawImage(pollo.imagen, xP[v], yP[v])
        }
    }

    if(cerdo.cargaOK)
    {
        for(var v = 0; v<cantCerdos; v++)
        {
          papel.drawImage(cerdo.imagen, xCC[v], yCC[v])
        }
    }
    if(z = 1)
    {
        papel.drawImage(cerdo.imagen, xC, yC)
    }
}


//controlar cerdo con el teclado

var teclas ={
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
}

document.addEventListener("keyup", moverCerdo)


var xC = 400
var yC = 50 
function dibujarCerdo()
{

    papel.drawImage(cerdo.imagen, xC, yC)
    z = 1
}



function moverCerdo(evento)
{

    var movimiento = 10
    switch(evento.keyCode)
    {
        case teclas.UP:
            yC = yC - movimiento;
            dibujar();
            dibujarCerdo();
        break;
        case teclas.DOWN:
            yC = yC + movimiento;
            dibujar();
            dibujarCerdo();
        break;
        case teclas.LEFT:
            xC = xC - movimiento;
            dibujar();
            dibujarCerdo();
        break;
        case teclas.RIGHT:
            xC = xC + movimiento;
            dibujar();
            dibujarCerdo();
        break;
    }


 //  switch (true)
 // la condicional switch no se debe usar en caso de que la expresion sea comparada estrictamente
 // de tal foma que se obtenga true en cada uno de los casos al mismo tiempo
 // debido a que siempre o casi siempre se ejecutara el primer caso y no los otros.
 // hay que usar if en este tipo de siuaciones
 //   {
 //       case vaca.cargaOK:
 //           var x = aleatorio(1,499)
 //           var y = aleatorio(1,499)
 //           papel.drawImage(vaca.imagen, x, y)
 //           break;
 //       case pollo.cargaOK:
 //           var x = aleatorio(1,499)
 //           var y = aleatorio(1,499)
 //           papel.drawImage(pollo.imagen, x, y)
 //           break;
 //       case cerdo.cargaOK:
 //           var x = aleatorio(1,499)
 //           var y = aleatorio(1,499)
 //           papel.drawImage(cerdo.imagen, x,y)
 //           break
 //   }

}

function aleatorio(min,maxi)
{
    var resultado;
    resultado = Math.floor( Math.random() * (maxi - min + 1)) + min;
    return resultado 
}