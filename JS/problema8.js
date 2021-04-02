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
    var valor3 = document.formulario.numero3.value;    
    var result = parseInt(valor);
    var result2 = parseInt(valor2);
    var result3 = parseInt(valor3);        
    if (result > result2){
        if (result > result3){
            document.formulario.sueldoti.value =  +result;  
        } else{
            document.formulario.sueldoti.value =  +result3;
        }
    }
    else if (result2 > result3){
        document.formulario.sueldoti.value =  +result2;
    }
    else {
        document.formulario.sueldoti.value =  +result3;
    }
}
function borrar(){
    document.formulario.sueldoti.value = "";
    document.formulario.numero1.value = "";
    document.formulario.numero2.value = "";
}