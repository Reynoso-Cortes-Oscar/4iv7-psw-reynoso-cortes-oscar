function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}
function interes(){
    var valor = document.formulario.actual.value;
    var valor2 = document.formulario.nacimiento.value;
    var result = parseInt(valor);
    var result2 = parseInt(valor2);    
    var total = result-result2;

    document.formulario.sueldoti.value =  +total;
}
function borrar(){
    document.formulario.sueldoti.value = "";
    document.formulario.actual.value = "";
    document.formulario.nacimiento.value = "";
}