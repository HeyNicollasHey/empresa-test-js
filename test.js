TestFramework.test("Validação do nome completo", function () {
    TestFramework.assertTrue(validarNomeCompleto("João Silva"));
    TestFramework.assertFalse(validarNomeCompleto(""));
    TestFramework.assertFalse(validarNomeCompleto("Ana"));
});

TestFramework.test("Regex CPF válido", () => {
    TestFramework.assertMatchesRegex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "123.456.789-00");
});


TestFramework.test("Validação de RG", function () {
    TestFramework.assertTrue(validarRG("12.345.678-9"));
    TestFramework.assertFalse(validarRG(""));
});

TestFramework.test("Validação da data de nascimento", function () {
    const maiorIdade = new Date();
    maiorIdade.setFullYear(maiorIdade.getFullYear() - 18);
    TestFramework.assertTrue(validarDataNascimento(maiorIdade.toISOString().split('T')[0]));
    TestFramework.assertFalse(validarDataNascimento("2030-01-01"));
});

TestFramework.test("Validação de e-mail", function () {
    TestFramework.assertTrue(validarEmail("teste@teste.com"));
    TestFramework.assertFalse(validarEmail("teste.com"));
});

TestFramework.test("Validação de telefone", function () {
    TestFramework.assertTrue(validarTelefone("(83) 91234-5678"));
    TestFramework.assertFalse(validarTelefone("12345678"));
});

TestFramework.test("Validação de cargo", function () {
    TestFramework.assertTrue(validarCargo("gerente"));
    TestFramework.assertFalse(validarCargo(""));
});

TestFramework.test("Validação de salário", function () {
    TestFramework.assertTrue(validarSalario("1500,00"));
    TestFramework.assertFalse(validarSalario("-1000"));
});

TestFramework.test("Validação da data de admissão", function () {
    TestFramework.assertTrue(validarDataAdmissao("2022-01-01", "2000-01-01"));
    TestFramework.assertFalse(validarDataAdmissao("1990-01-01", "2000-01-01"));
});

TestFramework.test("Validação de endereço", function () {
    TestFramework.assertTrue(validarEndereco("Rua das Flores, 123"));
    TestFramework.assertFalse(validarEndereco("Curta"));
});

TestFramework.test("Validação de CEP", function () {
    TestFramework.assertTrue(validarCEP("58000-000"));
    TestFramework.assertFalse(validarCEP("12345678"));
});

TestFramework.test("Validação de dependentes", function () {
    TestFramework.assertTrue(validarDependentes("3"));
    TestFramework.assertFalse(validarDependentes("-1"));
    TestFramework.assertFalse(validarDependentes("12"));
});

TestFramework.test("Maior que", () => {
    TestFramework.assertGreaterThan(10, 5);
});

TestFramework.test("assertGreaterThan funciona", function () {
    TestFramework.assertGreaterThan(10, 5);
});

window.addEventListener("load", function () {
    TestFramework.runTests();
});

