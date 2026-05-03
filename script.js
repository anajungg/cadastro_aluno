let form = document.getElementById('form-login');

form.addEventListener('submit', function(e){


    e.preventDefault();


    let valido = true;

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let dataNascimento = document.getElementById('dataNascimento').value;
    let endereco = document.getElementById('endereco').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let cep = document.getElementById('cep').value;
    let curso = document.getElementById('curso').value;
    let matricula = document.getElementById('matricula').value;
    
    let confirmarSenha = document.getElementById('confirmarSenha').value;
    let cpf = document.getElementById('cpf').value;


     if (nome.length < 7)  return alert("Nome tem que ser completo");

      if(!nome.includes(" ")){
document.getElementById('erroNome').textContent ='Deve conter pelo menos nome e sobrenome.';
valido = false;
}
     if(!email.includes("@") || !email.includes(".")) return alert("Email Inválido");
     if(telefone.length < 9) return alert("Telefone Inválido");
     if(cpf == "") return alert("CPF Obrigatorio");
     if(endereco.length < 20) return alert ("Endereço Inválido");
    

    

})