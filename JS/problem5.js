function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}
function partes(){
    var valor = document.formulario.mujeres.value;
    var valor2 = document.formulario.hombres.value;
    var result = parseInt(valor);
    var result2 = parseInt(valor2);
    var totalt = result2+result;
    var totalm = result/totalt;
    var totalm2 = totalm*100;
    var totalh = result2/totalt;
    var totalh2 = totalh*100;

    document.formulario.woman.value = +totalm2;
    document.formulario.man.value = +totalh2;
}
function borrar(){
    document.formulario.mujeres.value = "";
    document.formulario.hombres.value = "";
    document.formulario.woman.value = "";
    document.formulario.man.value = "";
}