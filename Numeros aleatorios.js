var z = aleatorio(10,20)

for(i=0; i<10; i++)
{
    if(i < 9)
    {
        z = aleatorio(0,10) // se crea un nuevo valor para la varaiable en cada ciclo
        document.write(z + ", ")
    }
    else
    {
        z = aleatorio(0,10)
        document.write(z + ".")
    }
}





//La forma en la que yo lo hice

//var q = 10
//var r = 0
//while(r < q)
//  {
//      if(r <= 8)
//      {
//        document.write(aleatorio(10,20) + ", ")
//        r++
//      }
//      else
//      {
//        document.write(aleatorio(10,20) + ".")
//        r++
//      }
//  }

function aleatorio(min,maxi)
{
    var resultado;
    resultado = Math.floor( Math.random() * (maxi - min + 1)) + min;
    return resultado 
}