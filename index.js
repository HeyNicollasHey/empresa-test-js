function showError(id, message) {
    document.getElementById(`error-${id}`).textContent = message;
}

function clearErrors() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(el => el.textContent = '');
}

function validarNomeCompleto(nome) {
    return /^[A-Za-zÀ-ÿ]+ [A-Za-zÀ-ÿ]+$/.test(nome.trim());
}

function validarCPF(cpf) {
    return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
}

function validarRG(rg) {
    return /^\d{2}\.\d{3}\.\d{3}-\d{1}$/.test(rg);
}

function validarDataNascimento(data) {
    const hoje = new Date();
    const nascimento = new Date(data);
    const idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();
    return idade > 18 || (idade === 18 && m >= 0);
}

function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validarTelefone(telefone) {
    return /^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(telefone);
}

function validarCargo(cargo) {
    return cargo.trim().length > 0;
}

function validarSalario(salario) {
    const salarioNum = parseFloat(salario.replace(',', '.'));
    return salarioNum >= 0;
}

function validarDataAdmissao(dataAdmissao, dataNascimento) {
    return new Date(dataAdmissao) > new Date(dataNascimento);
}

function validarEndereco(endereco) {
    return endereco.trim().length >= 10;
}

function validarCEP(cep) {
    return /^\d{5}-\d{3}$/.test(cep);
}

function validarDependentes(valor) {
    const num = parseInt(valor);
    return !isNaN(num) && num >= 0 && num <= 10;
}

function validateForm() {
    clearErrors();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const rg = document.getElementById('rg').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cargo = document.getElementById('cargo').value;
    const salario = document.getElementById('salario').value;
    const dataAdmissao = document.getElementById('dataAdmissao').value;
    const endereco = document.getElementById('endereco').value;
    const cep = document.getElementById('cep').value;
    const dependentes = document.getElementById('dependentes').value;

    let valid = true;

    const validacoes = {
        nome: validarNomeCompleto(nome),
        cpf: validarCPF(cpf),
        rg: validarRG(rg),
        dataNascimento: validarDataNascimento(dataNascimento),
        email: validarEmail(email),
        telefone: validarTelefone(telefone),
        cargo: validarCargo(cargo),
        salario: validarSalario(salario),
        dataAdmissao: validarDataAdmissao(dataAdmissao, dataNascimento),
        endereco: validarEndereco(endereco),
        cep: validarCEP(cep),
        dependentes: validarDependentes(dependentes),
    };

    for (const campo in validacoes) {
        if (validacoes[campo]) {
            showError(campo, validacoes[campo]);
            valid = false;
        }
    }

    return valid;
}

document.getElementById('employeeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    if (!validateForm()) return;

    const employee = {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        rg: document.getElementById('rg').value,
        dataNascimento: document.getElementById('dataNascimento').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        cargo: document.getElementById('cargo').value,
        salario: document.getElementById('salario').value,
        dataAdmissao: document.getElementById('dataAdmissao').value,
        endereco: document.getElementById('endereco').value,
        cep: document.getElementById('cep').value,
        dependentes: document.getElementById('dependentes').value,
    };

    employees.push(employee);
    displayEmployees();
    this.reset();
    clearErrors();
});
