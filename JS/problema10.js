function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}
function interes(){
    var valor = document.formulario.antiguedad.value;
    var valor2 = document.formulario.salario.value;    
    var años = parseInt(valor);
    var salario2 = parseInt(valor2);       
    if (años < 12){
        var utilidad = salario2 * 0.05;
        var total = utilidad+salario2;
        document.formulario.sueldoti.value = "$" +total; 
    }
    else {
        if(años >=12 && años < 24){
            var utilidad = salario2 * 0.07;
            var total = utilidad+salario2;
            document.formulario.sueldoti.value = "$" +total;
        }
        else{
            if(años >=24 && años < 60){
                var utilidad = salario2 * 0.10;
                var total = utilidad+salario2;
                document.formulario.sueldoti.value = "$" +total;
            }
            else{
                if (años >=60 && años < 120) {
                    var utilidad = salario2 * 0.15;
                    var total = utilidad+salario2;
                    document.formulario.sueldoti.value = "$" +total;      
                }
                else{
                    if (años >= 120) {
                        var utilidad = salario2 * 0.20;
                                    var total = utilidad+salario2;
                        document.formulario.sueldoti.value = "$" +total;
                    }
                }
            }
        }
    }
}
   
function borrar(){
    document.formulario.sueldoti.value = "";
    document.formulario.salario.value = "";
    document.formulario.antiguedad.value = "";
}