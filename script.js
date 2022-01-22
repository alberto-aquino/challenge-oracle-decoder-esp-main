
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/


function verificar(boton){
    let texto = document.getElementById('input-texto').value;
    let campo = document.getElementById('input-texto');
    var result = "";
    var new_text = "";
    if (!campo.checkValidity()) 
    {
        alert('Ingrese sólo letras minusculas');
        document.getElementById('input-texto').focus();
    } 
    else 
    {
        if (boton.id == "btn-encriptar")
        {
            
            for (i=0;i<texto.length;i++) 
            { 
                if (texto.charAt(i)== "e") { 
                    result += "enter";  
                }
                else  { 
                if (texto.charAt(i)== "i") { 
                    result += "imes";  
                }
                else {  
                if (texto.charAt(i)== "a") { 
                    result += "ai"; 
                }
                else {  
                if (texto.charAt(i)== "o") { 
                    result += "ober";  
                }
                else { 
                if (texto.charAt(i)== "u") { 
                    result += "ufat"; 
                } 
                else {
                    result += texto.charAt(i)
                } } } } };
                
            }            
        }
        if (boton.id == "btn-desencriptar")
        {
                    result += texto.replace (/enter/g,"e",);
                    result = result.replace (/imes/g,"i");
                    result = result.replace (/ai/g,"a");
                    result = result.replace (/ober/g,"o");
                    result = result.replace (/ufat/g,"u");

                
        }     
        document.getElementById('msg').value = result;
        document.getElementById('input-texto').value = "";
    }
    }

    function copiar(campo) {
    const boton = document.querySelector('.msg');
    const texto = document.querySelector('.msg-input');

    boton.addEventListener('click',function(){ 
        texto.focus();
        document.execCommand('SelectAll');
        document.execCommand('copy');
    })
        
    }
      