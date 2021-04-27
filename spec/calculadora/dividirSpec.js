describe("Suite de testes de divisão", function(){

	var Calculadora = require('../../src/js/calculadora.js');

	it("Deve retornar 2 para a divisão 8 / 4", function(){

		expect(Calculadora.dividir(8, 4)).toEqual(2);

	});

	it("Deve retornar 3 para o formato texto 9 / 3", function(){

		expect(Calculadora.dividir('9', '3')).toEqual(3);

	});

	it("Deve retornar 1.5 para o valores 4.5 e 3", function(){

		expect(Calculadora.dividir(4.5, 3)).toEqual(1.5);

	});

	it("Deve retornar erro ao retornar zero", function(){

		expect(Calculadora.dividir(10, 0)).toEqual("Erro");

	});
});