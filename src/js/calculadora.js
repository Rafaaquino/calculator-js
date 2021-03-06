var Calculadora = {
	adicionar: function(num1, num2){

		if (isNaN(num1) || isNaN(num2)){
			return 0
		}
		
		num1 = parseFloat(num1);
		num2 = parseFloat(num2);
		return num1 + num2
	},

	subtrair: function(num1, num2){

		if (isNaN(num1) || isNaN(num2)){
			return 0
		}
		
		num1 = parseFloat(num1);
		num2 = parseFloat(num2);
		return num1 - num2;
	},

	dividir: function(num1, num2){

		if (num2 == 0) {
			return 'Erro'
		}

		if (isNaN(num1)){
			return 0
		}

		num1 = parseFloat(num1);
		num2 = parseFloat(num2);

		return num1 / num2
	},

	multiplicar: function(num1, num2){
		
		if (isNaN(num1) || isNaN(num2) ){
			return 0
		}

		return num1 * num2
	},
};
// usando na função 'require' do NodeJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefinid'){
	module.exports = Calculadora;
}