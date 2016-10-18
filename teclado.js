// setapracima = 38
// setaprabaixo = 40
// espaco = 32

function Teclado(documento){
	this.documento = documento;
	this.cima      = false; // indica se houve o comando seta pra cima
	this.baixo     = false;
	this.tiro      = false;

	var teclado    = this;

	documento.addEventListener('keydown', function(evento){
		//console.log("Apertei :"+evento.keyCode);
		if (evento.keyCode == 32) teclado.tiro  = true;
		if (evento.keyCode == 38) teclado.cima  = true;
		if (evento.keyCode == 40) teclado.baixo = true;

	});
	documento.addEventListener('keyup', function(evento){
		//console.log("Soltei : "+evento.keyCode);
		if (evento.keyCode == 32) teclado.tiro  = false;
		if (evento.keyCode == 38) teclado.cima  = false;
		if (evento.keyCode == 40) teclado.baixo = false;
	});
}

Teclado.prototype = {
	subiu: function(){
		return this.cima;
	},

	desceu: function(){
		return this.baixo;
	},

	atirou: function(){
		return this.tiro;
	}


};















