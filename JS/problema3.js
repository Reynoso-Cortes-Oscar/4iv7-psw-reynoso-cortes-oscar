function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}
function interes(){
    var valor = document.formulario.compra.value;
    var result = parseInt(valor);
    var interes = result*0.15;
    var total = result-interes;

    document.formulario.sueldoti.value = "$" +total;
}
function borrar(){
    document.formulario.sueldoti.value = "";
    document.formulario.compra.value = "";
}