function Cenario(context){
	
this.context    = context;
	
this.imagem     = new Image();
	
this.imagem.src = "images/cenario.png";
	
this.x          = 0;
	
this.y          = 0;

}

Cenario.prototype = {
	
desenha: function(){
	  
 this.context.drawImage(this.imagem, this.x, this.y,
 this.imagem.width, this.imagem.height,
	
0, 0, 400, 300);
	}
}
