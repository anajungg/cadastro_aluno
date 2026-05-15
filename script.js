let form = document.getElementById('formulario');

let dados = [];

form.addEventListener('submit', function (e) {

    e.preventDefault();

    let valido = true;

    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let dataNascimento = document.getElementById('data').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value;
    let endereco = document.getElementById('endereco').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let cep = document.getElementById('cep').value;
    let curso = document.getElementById('curso').value;
    let matricula = document.getElementById('matricula').value;
    let senha = document.getElementById('senha').value;
    let confirmar = document.getElementById('senha2').value;

     if (nome.trim() === '') {
        alert('Campo Nome obrigatório!');
        valido = false;
    } else if (!nome.includes(" ")) {
        alert('Nome deve ser completo!');
        valido = false;
    }

    if (cpf.trim() === '') {
        alert('Campo CPF obrigatório!');
        valido = false;
    } else if (cpf.length < 11) {
        alert('CPF inválido!');
        valido = false;
    }

    if (telefone.trim() === '') {
        alert('Campo Telefone obrigatório!');
        valido = false;
    } else if (telefone.length < 10) {
        alert('Telefone inválido!');
        valido = false;
    }

      if (email.trim() === '') {
        alert('Campo Email obrigatório!');
        valido = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        alert('Email inválido!');
        valido = false;
    }

     if (endereco.trim() === '') {
        alert('Campo Endereço obrigatório!');
        valido = false;
    } else if (endereco.length < 10) {
        alert('Endereço muito curto!');
        valido = false;
    } else if (!/\d/.test(endereco)) {
        alert('Informe o número do endereço!');
        valido = false;
    }

    if (cidade.trim() === '') {
        alert('Campo Cidade obrigatório!');
        valido = false;
    }

    if (estado.trim() === '') {
        alert('Campo Estado obrigatório!');
        valido = false;
      }

      if (cep.trim() === '') {
        alert('Campo CEP obrigatório!');
        valido = false;
    } else if (cep.length < 8) {
        alert('CEP inválido!');
        valido = false;
    }
    if (curso.trim() === '') {
        alert('Campo Curso obrigatório!');
        valido = false;
     }
if (matricula.trim() === '') {
        alert('Campo Matrícula obrigatório!');
        valido = false;
    }
      if (senha.trim() === '') {
        alert('Campo Senha obrigatório!');
        valido = false;
    } else if (senha.length < 6) {
        alert('Senha muito curta!');
        valido = false;
    } else if (!/\d/.test(senha)) {
        alert('A senha deve conter pelo menos um número!');
        valido = false;
    }
if (confirmar.trim() === '') {
        alert('Campo Confirmar Senha obrigatório!');
        valido = false;
    } else if (confirmar !== senha) {
        alert('As senhas não coincidem!');
        valido = false;
    }
     if (valido) {

        dados.push({
            nome,
            cpf,
            dataNascimento,
            telefone,
            email,
            endereco,
            cidade,
            estado,
            cep,
            curso,
            matricula,
            senha
        });

        console.log(dados);

        alert('Cadastro feito com sucesso!');

        form.reset();
    }

});
