addEventListener('load',focusIndex,false,focus);

function focusIndex(){
	document.getElementById('usuario').focus();
}
	$(document).ready(function(){
		$('#ingresar').click(function(){
            var regularEx=/^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
				if ($('#usuario').val()=="") {
                    $('#usuario').focus();
					alertify.alert("Debe agregar su Usuario");
					return false;
			}else if($('#contrasenia').val()=="" ){
                $('#contrasenia').focus();
					alertify.alert("Debe inrgesar su Contraseña");
                    return false;
			} else if (!(regularEx.test($('#contrasenia').val()))) {
                $('#contrasenia').focus();
                   alertify.alert("La contrasenia debe contener al menos una letra mayuscula y un numero");
                    return false;
        }

		});
	});
function changeInput(event){
	if (event.which == 13 || event.which == 72 || event.which == 80){
			var actual = document.activeElement.name;
			if(actual == 'user'){
				document.getElementById('contrasenia').focus();
			}else{
				if(actual == 'pass'){
					document.getElementById('ingresar').focus();
				}else{
					document.getElementById('pass').focus();
				}
			}					
			event.preventDefault();
		}	

}
function validarvowels(calculo){
    var palabra=document.getElementById('calculo').value;
    var vowels='aeiouAEIOU';
    var countVowel=0;
    var countConsonant=0;
    for(var i= 0; i < palabra.length ; i++){
        if(vowels.indexOf(palabra[i])!== -1){
            countVowel+=1;
        }else{
            countConsonant+=1;
        }
            }
 alert("El texto contiene " + countVowel +" vocales y "+countConsonant+" consonantes");
    
}
	$(document).ready(function(){
		$('#registronuevo').click(function(){
			if(	$('#nombre').val()=="" ){
				alertify.alert("Debes ingresar un Nombre");
				return false;
			}else if($('#apellido').val()==""){
				alertify.alert("Debes ingresar un Apellido");
				return false;
			}else if($('#usuario').val()==""){
				alertify.alert("Debes ingresar un Usuario");
				return false;
			}else if($('#contrasenia').val()==""){
				alertify.alert("Debes ingresar una Contraseña");
				return false;
				}		
		});
	});
