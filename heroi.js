
function Heroi(context, teclado){

    this.context = context;
    this.teclado = teclado;	
    this.imagem  = new Image();
    this.imagem.src = "images/alfredo.png";
    this.x       = 0;
    this.y       = 100;
    this.estado  = 0; // parado
}

 Heroi.prototype = {
        update: function(){
        	//console.log("update no heroi");
        	if (this.estado == 1){
        		this.x+=10;
        	}
        	if (this.x >= 500){
        		this.estado = 0; // passei da tela
        		this.x = 0;
        	}
        	if (this.teclado.pressionada(32)){
        		//console.log("foi");
        		this.estado = 1;
        	}
        	if (this.teclado.pressionada(40)){
        		this.y += 10;
        	}
        	if (this.teclado.pressionada(38)){
        		this.y -= 10;
        	}
        },

        desenha: function(){
        	//console.log("desenha heroi");
        	this.context.drawImage(this.imagem, 0,0,this.imagem.width, this.imagem.height, 
        		     this.x,this.y, this.imagem.width, this.imagem.height );

        },

     
        getX: function(){
        	//console.log("Valor do x="+this.x);
        	return this.x;
        },
        getY: function(){
              return this.y;
        },

        getWidth: function(){
              return this.imagem.width;
        },
        getHeight: function(){
              return this.imagem.height;
        }
    }

