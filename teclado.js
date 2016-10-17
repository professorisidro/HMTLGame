// Códigos de teclas - aqui vão todos os que forem necessários
var SETA_ESQUERDA = 37;
var SETA_ACIMA = 38;
var SETA_DIREITA = 39;
var SETA_ABAIXO = 40;
var ESPACO = 32;
var ENTER = 13;

function Teclado(elemento) {
   this.elemento = elemento;

   // Array de teclas pressionadas
   this.pressionadas = [];

   // Funções de disparo registradas
   this.funcoesDisparo = [];

   //var teclado = this;

   elemento.addEventListener('keydown', function(evento) {
      var tecla = evento.keyCode;  // Tornando mais legível ;)
      teclado.pressionadas[tecla] = true;

      // Disparar somente se for o primeiro keydown da tecla
      /*if (teclado.funcoesDisparo[tecla] && !teclado.disparadas[tecla]) {

          teclado.disparadas[tecla] = true;
          //teclado.funcoesDisparo[tecla] () ;
      }*/
   });

   elemento.addEventListener('keyup', function(evento) {
      teclado.pressionadas[evento.keyCode] = false;
      //teclado.disparadas[evento.keyCode] = false;
   });
}
Teclado.prototype = {
   pressionada: function(tecla) {
      return this.pressionadas[tecla];
   }
   /*,
   disparou: function(tecla, callback) {
      this.funcoesDisparo[tecla] = callback;
   }*/
}



/*var SETA_ACIMA  = 38;
var SETA_ABAIXO = 40;
var ESPACO      = 32;

function Teclado(document){
	this.document = document;
	this.cima  = false;
	this.baixo = false;
	this.tiro  = false;
  

	document.addEventListener("keydown", function(evento){
		//console.log("Apertou = "+evento.keyCode);

		var tecla = evento.keyCode;
		if (evento.keyCode == 38){ 
			cima = true;
		}
		if (evento.keyCode == 40){
			baixo = true;
		}
		if (evento.keyCode == 32){
			tiro = true;
		}

	});

	document.addEventListener("keyup", function(evento){
		//console.log("Soltou = "+evento.keyCode);


		if (evento.keyCode === 38){
			    this.cima = false;
		}
		if (evento.keyCode === 40){
			   this.baixo = false;
		}
		if (evento.keyCode == 32){
			    this.tiro = false;
		}

	});
}

Teclado.prototype = {
	subiu: function(){
        //console.log("Subiu "+this.cima);
	    return this.cima;
	},
	desceu: function(){
		//console.log("Desceu "+this.baixo);
		return this.baixo;
	},
	disparou: function(){
		//	console.log("Atirou "+this.tiro);
		return this.tiro;
	}
}
*/
