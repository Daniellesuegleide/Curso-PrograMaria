//Evento do botão
document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

//Bloco que executa a validação do formulário
function validaFormulario(){
    if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != ""){
        alert("Prontinho! Você receberá as novidades por email.")
    }else{ 
        alert("Por favor, preencha os campos nome e email!")
    } 
}


