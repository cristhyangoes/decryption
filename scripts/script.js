let resultado = document.getElementById('result')



function criptografe(){
    let valorDoTexto = document.getElementById('caixa-texto').value
    document.getElementById("carinha").style.display = "none";
    document.getElementById("no-message").style.display = "none";
    document.getElementById("no-message2").style.display = "none";
    document.querySelector('.sem-mensagens').style.display = "none";
    document.querySelector('.area-resultado').style.display = "inline-block";
    document.querySelector('.mensagens').style.display = "inline-block";

    //Lógica da criptografia
    let result1 = valorDoTexto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")
    
    resultado.value = result1
    resultado.innerHTML = resultado.value
    resultado.style.display = "inline";
}

function descriptografe(){
    let valorDoTexto = document.getElementById('caixa-texto').value
    document.getElementById("carinha").style.display = "none";
    document.getElementById("no-message").style.display = "none";
    document.getElementById("no-message2").style.display = "none";
    document.querySelector('.sem-mensagens').style.display = "none";
    document.querySelector('.area-resultado').style.display = "inline-block";
    document.querySelector('.mensagens').style.display = "inline-block";

    //Lógica da descriptografia
    
    let result2 = valorDoTexto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u")

    resultado.value = result2
    resultado.innerHTML = resultado.value
    resultado.style.display = "inline";

}

function copiar(){
    resultado.select();
    resultado.setSelectionRange(0, 99999)
    document.execCommand('copy');
}

