// Desafio "Crear un algoritmo JS simple"

alert ( "¡Hola! Antes de avanzar necesitas completar ciertos datos" ) ;

// Una alerta en la cual aclara que se necesitan completar ciertos datos para poder seguir en la pagina web

const  nombreYA apellido  =  prompt ( "Ingrese su nombre y apellido" ) ;
let  edad  =  prompt ( "Ingrese su edad" ) ;
const  documento  =  prompt ( "Ingrese su numero de documento" ) ;
// Datos del usuario

alert ( "Necesitamos verificar que es un humano. Por favor realizar los siguientes calculos." )
// Una alerta para corroborar que la persona que visita la pagina es un ser humano

let  numero  =  prompt ( "Ingresar un numero" ) ;
    numero2  =  prompt ( "Ingresar otro numero" ) ;
// Ingresar dos numeros cualquiera para poder realizar una suma

let  verificacionHumano  =  prompt ( "La suma de" +  numero  +  "y" +  numero2  +  "es:" ) ;
// Se realiza una suma de los numeros elegidos anteriormente


// Desafio "Crear algoritmo con un condicional"

let  numero3  =  parseFloat ( prompt ( "Ingrese otro numero" ) ) ;
// Se pide ingresar cualquier numero

if ( numero3 > 10  &&  numero3 < 50 ) {
    alerta ( "El numero esta entre 10 y 50" )
}
// En caso de que el numero este entre 10 y 50 se mostrara una alerta

// Desafio "Crear un algoritmo utilizando un ciclo"

let  numero4  =  parseInt ( prompt ( "Ingresar un numero entero:" ) ) ;
// Se crea una variable en el cual el usuario debe ingresar un numero entero 
para  ( sea  i  =  0 ;  i  <  numero4  ;  i ++ )  {
    alert ( "Hola" ) ;
}

// Desafio "Simulador interactivo"

función  producto ( precio )  {

    deje  descuento  =  0.50 ;
    
    let  precioDelProducto  =  parseFloat ( precio  *  descuento ) ;
  
    return  precioDelProducto ;

}

dejemos  resultado  =  producto ( "400" ) ;
// 400 seria el parametro precio

alerta ( resultado )
// Desafio complementario "Funciones relacionadas"

let  precio  =  parseInt ( prompt ( "Ingrese el precio del producto:" ) )
sea  impuesto  =  0.21 ;

function  precioDelProducto ( precio )  {
    if  ( precio  ! =  0  &&  precio  ! =  "" )  {
        alert ( "El precio ingresado es:"  +  precio ) ;
    }
}

function  sumarImpuesto ( precio )  {
    alerta ( "Debemos sumarle el 21% de impuestos" )
    let  precioConImpuesto  =  parseFloat ( precio  *  impuesto ) ;
    return  precioConImpuesto ;
}

function  precioFinal ( valorFinal )  {
    alert ( "El precio final es:"  +  valorFinal ) ;
}

precioDelProducto ( precio ) ;
let  precioConImpuesto  =  sumarImpuesto ( precio ) ;
precioFinal ( precioConImpuesto ) ;

// Desafio Incorporar objetos

class  Producto  {
    
    constructor ( marca ,  precio )  {
        esto . marca  =  prompt ( "Ingresar el nombre del producto:" ) ;
        esto . precio  =  parseFloat ( prompt ( "Ingrese el precio del producto:" ) ) ;
    }
    impuesto ( ) {
        devuelve  esto . precio  *  0,21 ;
    }
    
    mostrar ( ) {
        alert ( "Este es el producto de" + this . marca + "con el precio de: $" + this . impuesto ( ) ) ;
    }
}

const  producto1  =  nuevo  Producto ( ) ;
producto1 . mostrar ( ) ;

// Desafio "Incorporar arrays"

let  nombreDelProductoALlevar  =  prompt ( "Ingrese el nombre del producto a llevar:" )
const  productoALlevar  =  [ nombreDelProductoALlevar ] ;
alert ( "Va a llevar"  +  productoALlevar . longitud  +  "producto"  ) ; 

// Desafio complementario "Ordenar un array de objetos"

let producto2 = new Producto();
let producto3 = new Producto();
let producto4 = new Producto();

let precioOriginalP1 = producto2.precio;
let precioOriginalP2 = producto3.precio;
let precioOriginalP3 = producto4.precio;

let preciosDeTodosLosProductos = (precioOriginalP1,precioOriginalP2,precioOriginalP3);
preciosDeTodosLosProductos.sort(ordenar);
function ordenar(a, b){
    return a-b
}

alert(preciosDeTodosLosProductos);

