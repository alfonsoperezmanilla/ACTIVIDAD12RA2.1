function mensaje(){
    var nombre = document.formulario1.texto1.value;
    var aPaterno = document.formulario1.texto2.value;
    var aMaterno = document.formulario1.texto3.value;
    var genero = document.formulario1.genero.value;
    var edad = document.formulario1.edad.value;
    var color = document.formulario1.color1.value;
    alert("NOMBRE: "+nombre.toUpperCase()+"\nAPELLIDO PATERNO: "+aPaterno.toUpperCase()+"\nAPELLIDO MATERNO: "+aMaterno.toUpperCase()+"\nGENERO: "+genero.toUpperCase()+"\nEDAD: "+edad.toUpperCase()+"\nCOLOR DE FONDO: "+color.toUpperCase()+" EN HEXADECIMAL");

}


function limpiar(){
	document.getElementById("texto1").value = "";
	document.getElementById("texto2").value = "";
	document.getElementById("texto3").value = "";
	document.getElementById("genero1").value = "";
	document.getElementById("edad1").value = "";
}
