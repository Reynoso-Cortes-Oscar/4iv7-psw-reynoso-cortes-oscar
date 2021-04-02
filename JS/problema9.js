function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}
function interes(){
    var valor = document.formulario.horas.value;
    var valor2 = document.formulario.salario.value;    
    var horastrabajadas = parseInt(valor);
    var salario2 = parseInt(valor2);       
    if (horastrabajadas <= 40){
        var pago_normal = horastrabajadas*salario2;
        document.formulario.sueldoti.value = "$" +pago_normal;  
        }
    else if (horastrabajadas <= 56){
        var pago_normal = 40*salario2+(horastrabajadas-40)*2*salario2;
        document.formulario.sueldoti.value = "$" +pago_normal;
        }
    else{
        var pago_normal = 40*salario2+8*2*salario2+(horastrabajadas-56)*3*salario2;
        document.formulario.sueldoti.value = "$" +pago_normal;
    }
    }
   
function borrar(){
    document.formulario.sueldoti.value = "";
    document.formulario.salario.value = "";
    document.formulario.horas.value = "";
}