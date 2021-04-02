function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}
function interes(){
    var valor = document.formulario.sueldo.value;
    var valor2 = document.formulario.venta1.value;
    var valor3 = document.formulario.venta2.value;
    var valor4 = document.formulario.venta3.value;
    var result = parseInt(valor);
    var result2 = parseInt(valor2);
    var result3 = parseInt(valor3);
    var result4 = parseInt(valor4);
    var suma = result2+result3+result4
    var interes = suma*0.10;
    var total = result+interes;

    document.formulario.sueldoti.value = "$" +total;
}
function borrar(){
    document.formulario.sueldoti.value = "";
    document.formulario.sueldo.value = "";
    document.formulario.venta1.value = "";
    document.formulario.venta2.value = "";
    document.formulario.venta3.value = "";
}