function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}
function interes(){
    var valor = document.formulario.numero1.value;
    var valor2 = document.formulario.numero2.value;
    var result = parseInt(valor);
    var result2 = parseInt(valor2);    
    if (result2 == result){
        var if2 = result2*result;
        document.formulario.sueldoti.value =  +if2;
    }
    else if (result > result2){
        var if3 = result-result2;
        document.formulario.sueldoti.value =  +if3;
    }
    else if (result < result2){
        var if4 =result+result2;
        document.formulario.sueldoti.value =  +if4;
    }
}
function borrar(){
    document.formulario.sueldoti.value = "";
    document.formulario.actual.value = "";
    document.formulario.nacimiento.value = "";
}