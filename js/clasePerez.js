// OBJETO CONSTRUCTOR
function bebida (valor, stock){

    this.valor = valor;
    this.cantidad = stock;

}

//````````````````````````````ARRAY```````````````````````````````
var producto = ['Vino','Cerveza','Coca-Cola','Jugo de Naranja']


var vino = new bebida (500, 20);
var cerveza = new bebida ( 300, 10);
var coca = new bebida (200, 30);
var jugo = new bebida (100, 50);
var precioEnvio = 200;
var total = 0;
var totalDescuento = 0;

//````````````````````````````FUNCIONES```````````````````````````````
function pedido2 (compra){

    if (compra == 'vino' && vino.cantidad > 0){

        vino.cantidad = vino.cantidad - 1;
        total = total + vino.valor;
        alert ('su compra es ' + producto.filter(producto => producto == 'Vino') + ', se le agrego a su total $' + vino.valor + ' y quedan en stock ' + vino.cantidad);
        alert ('Su total es de $' + total)
        
    }else if (compra == 'cerveza' && cerveza.cantidad > 0){

        cerveza.cantidad = cerveza.cantidad - 1;
        total = total + cerveza.valor;
        alert ('su compra es ' + producto.filter(producto => producto == 'Cerveza') + ', se le agrego a su total $' + cerveza.valor + ' y quedan en stock ' + cerveza.cantidad);
        alert ('Su total es de $' + total)

    }else if (compra == 'coca' && coca.cantidad > 0 || compra == 'coca cola' && coca.cantidad > 0 || compra == 'coca-cola' && coca.cantidad > 0 ){

        coca.cantidad = coca.cantidad - 1;
        total = total + coca.valor;
        alert ('su compra es ' + producto.filter(producto => producto == 'Coca-Cola') + ', se le agrego a su total $' + coca.valor + ' y quedan en stock ' + coca.cantidad);
        alert ('Su total es de $' + total)

    }else if (compra == 'jugo' && jugo.cantidad > 0 || compra == 'jugo de naranja' && jugo.cantidad > 0 || compra == 'naranja' && jugo.cantidad > 0){

        jugo.cantidad = jugo.cantidad - 1;
        total = total + jugo.valor;
        alert ('su compra es ' + producto.filter(producto => producto == 'Jugo de Naranja') + ', se le agrego a su total $' + jugo.valor + ' y quedan en stock ' + jugo.cantidad);
        alert ('Su total es de $' + total)

    }else {

        alert ('PRODUCTO INCORRECTO O FUERA DE STOCK');

    }

}

function descuento(registrado){

    if (registrado == 'si'){

        totalDescuento = sessionStorage.getItem ('Total') - (total * 0.10);

    }else{

    }


}

function delivery (){

    var usuario = prompt('Sos usuario de GLOPS? si/no');
    var envio = prompt('Quiere que lo enviemos a su domicilio? si/no');

    if (envio == "si" && usuario == 'si'){

        totalDescuento = sessionStorage.getItem ('Total') - (total * 0.10);
        let direccion = prompt ('Ingrese su direccion de envio');
        let totalEnvio = sumaTotal(totalDescuento, precioEnvio);

        let parrafo = document.createElement("p");
        parrafo.style.color = "white";
        parrafo.innerHTML = "Su total con el envio y el 10% OFF es de: $" + totalEnvio ;

        let parrafo2 = document.createElement("p");
        let estiloDireccion = document.createElement ("span");
        parrafo2.style.color = "white";
        parrafo2.innerHTML = "Su pedido sera enviado a ";
        parrafo2.appendChild (estiloDireccion);
        estiloDireccion.style.textDecoration = "underline";
        estiloDireccion.style.color = "red"
        estiloDireccion.innerHTML = direccion

        let parrafo3 = document.createElement("p");
        parrafo3.style.color = "white";
        parrafo3.innerHTML = "Gracias por su Compra"; 

        let botonAceptar = document.createElement ('a');
        botonAceptar.className = 'btn btn-primary btn-success';
        botonAceptar.innerHTML = 'Aceptar';
        botonAceptar.href = 'index.html';
        let spanAceptar = document.createElement ('span');
        spanAceptar.className = "glyphicon glyphicon-ok"
        botonAceptar.appendChild (spanAceptar);



        let mensaje = document.getElementById("compra-realizada");
        mensaje.appendChild (parrafo);
        mensaje.appendChild (parrafo2);
        mensaje.appendChild (parrafo3);
        mensaje.appendChild (botonAceptar);
    

    }else if (envio == 'no' && usuario == 'si') {

        totalDescuento = sessionStorage.getItem ('Total') - (total * 0.10);
        let parrafo = document.createElement("p");
        parrafo.style.color = "white";
        parrafo.innerHTML = 'Su total con el 10% OFF es de: $' + totalDescuento ;

        let parrafo2 = document.createElement("p");
        parrafo2.style.color = "white";
        parrafo2.innerHTML = "Se ha generado su compra, retire por la sucursal en la siguiente direccion: 'Calle siempre viva 123'"; 
        
        let parrafo3 = document.createElement("p");
        parrafo3.style.color = "white";
        parrafo3.innerHTML = "Gracias por su Compra"; 

        let botonAceptar = document.createElement ('a');
        botonAceptar.className = 'btn btn-primary btn-success';
        botonAceptar.innerHTML = 'Aceptar';
        botonAceptar.href = 'index.html';

        let spanAceptar = document.createElement ('span');
        spanAceptar.className = "glyphicon glyphicon-ok"
        botonAceptar.appendChild (spanAceptar);

        let mensaje = document.getElementById("compra-realizada");
        mensaje.appendChild (parrafo);
        mensaje.appendChild (parrafo2);
        mensaje.appendChild (parrafo3);
        mensaje.appendChild (botonAceptar)

    }else if (envio == 'si' && usuario == 'no'){

        let direccion = prompt ('Ingrese su direccion de envio');
        let totalEnvio = sumaTotal(total, precioEnvio);

        let parrafo = document.createElement("p");
        let estilo = document.createElement ("span");
        estilo.style.textDecoration = "underline";
        estilo.style.color = "red"
        estilo.innerHTML = direccion
        parrafo.style.color = "white";
        parrafo.innerHTML = 'Su total con el envio es de: $' + totalEnvio ;

        let parrafo2 = document.createElement("p");
        parrafo2.style.color = "white";
        parrafo2.innerHTML = "Su pedido sera enviado a la siguiente direccion: "; 
        parrafo2.appendChild (estilo)

        let parrafo3 = document.createElement("p");
        parrafo3.style.color = "white";
        parrafo3.innerHTML = "Gracias por su Compra"; 

        let botonAceptar = document.createElement ('a');
        botonAceptar.className = 'btn btn-primary btn-success';
        botonAceptar.innerHTML = 'Aceptar';
        botonAceptar.href = 'index.html';

        let spanAceptar = document.createElement ('span');
        spanAceptar.className = "glyphicon glyphicon-ok"
        botonAceptar.appendChild (spanAceptar);

        let mensaje = document.getElementById("compra-realizada");
        mensaje.appendChild (parrafo);
        mensaje.appendChild (parrafo2);
        mensaje.appendChild (parrafo3);
        mensaje.appendChild (botonAceptar);

    }else {

        let parrafo = document.createElement("p");
        parrafo.style.color = "white";
        parrafo.innerHTML = 'El total de su pedido es de: $' + total ;

        let parrafo2 = document.createElement("p");
        parrafo2.style.color = "white";
        
        parrafo2.innerHTML = "Se ha generado su compra, retire por la sucursal en la siguiente direccion: 'Calle siempre viva 123'"; 
        let parrafo3 = document.createElement("p");
        parrafo3.style.color = "white";
        parrafo3.innerHTML = "Gracias por su Compra"; 

        let botonAceptar = document.createElement ('a');
        botonAceptar.className = 'btn btn-primary btn-success';
        botonAceptar.innerHTML = 'Aceptar';
        botonAceptar.href = 'index.html';

        let spanAceptar = document.createElement ('span');
        spanAceptar.className = "glyphicon glyphicon-ok"
        botonAceptar.appendChild (spanAceptar);

        let mensaje = document.getElementById("compra-realizada");
        mensaje.appendChild (parrafo);
        mensaje.appendChild (parrafo2);
        mensaje.appendChild (parrafo3);
        mensaje.appendChild (botonAceptar);
        }
    }

const sumaTotal = (a,b) => a + b;

function compraVino (){

    total = vino.valor + total

    sessionStorage.setItem (producto.filter(producto => producto == 'Vino') , vino.valor);
    sessionStorage.setItem ('Total' , total);
    document.getElementById('carrito').innerHTML = total;

}

function compraCerveza (){

    total = cerveza.valor + total

    sessionStorage.setItem (producto.filter(producto => producto == 'Cerveza') , cerveza.valor);
    sessionStorage.setItem ('Total' , total);
    document.getElementById('carrito').innerHTML = total;
    
}

function compraCoca (){

    total = coca.valor + total

    sessionStorage.setItem (producto.filter(producto => producto == 'Coca-Cola') , coca.valor);
    sessionStorage.setItem ('Total' , total);
    document.getElementById('carrito').innerHTML = total;
    
}

function compraJugo (){

    total = jugo.valor + total

    sessionStorage.setItem (producto.filter(producto => producto == 'Jugo de Naranja') , jugo.valor);
    sessionStorage.setItem ('Total' , total);
    document.getElementById('carrito').innerHTML = total;
}

function terminarCompra(){

    if (total <= 0 ){

        alert ('AGREGUE UN PRODUCTO AL CARRITO')

    }else {

    delivery()

    }
}

// ````````````````````````````EVENTOS```````````````````````````````

let carrito = document.getElementById("boton-carrito");
carrito.addEventListener ("click" , terminarCompra);

let botonVino = document.getElementById('vino');
botonVino.addEventListener ('click' , compraVino);

let botonCerveza = document.getElementById ('cerveza');
botonCerveza.addEventListener ('click' , compraCerveza);

let botonCoca = document.getElementById ('coca');
botonCoca.addEventListener ('click' , compraCoca);

let botonJugo = document.getElementById ('jugo');
botonJugo.addEventListener ('click' , compraJugo);








