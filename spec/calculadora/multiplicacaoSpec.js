describe("Suite de testes para multiplicação", function(){

	var Calculadora = require('../../src/js/calculadora.js');
	
	it("Deve retornar 8 para a multiplicação 2 * 4", function(){

		expect(Calculadora.multiplicar(2, 4)).toEqual(8);
	});

	it("Deve retornar 9 para a os valores texto 3 * 3", function(){

		expect(Calculadora.multiplicar('3', '3')).toEqual(9);
	});

	it("Deve retornar 4.5 para  1.5 * 3", function(){

		expect(Calculadora.multiplicar(1.5, 3)).toEqual(4.5);
	});

	it("Deve retornar 0para o valor 1 invalido", function(){

		expect(Calculadora.multiplicar(4, undefined)).toEqual(0);
	});

});