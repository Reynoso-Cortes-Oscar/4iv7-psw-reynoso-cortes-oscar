function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}
function interes(){
    var valor = document.formulario.calif1.value;
    var valor2 = document.formulario.calif2.value;
    var valor3 = document.formulario.calif3.value;
    var valor4 = document.formulario.calif4.value;
    var valor5 = document.formulario.calif5.value;
    var result = parseInt(valor);
    var result2 = parseInt(valor2);
    var result3 = parseInt(valor3);
    var result4 = parseInt(valor4);
    var result5 = parseInt(valor5);
    var suma = result+result2+result3
    var interes = suma/3;
    var t1 = interes*0.55;
    var t2 = result4*0.30;
    var t3 = result5*0.15;
    var total = t1+t2+t3;

    document.formulario.sueldoti.value = +total;
}
function borrar(){
    document.formulario.sueldoti.value = "";
    document.formulario.calif1.value = "";
    document.formulario.calif2.value = "";
    document.formulario.calif3.value = "";
    document.formulario.calif4.value = "";
    document.formulario.calif5.value = "";
}