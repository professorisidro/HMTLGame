function Troll(context){
    this.x          = 320;
    this.y          = 200;
    this.imagem     = new Image();
    this.imagem.src = "images/troll03.png";
    this.context    = context;
    this.atingido   = 0;
} 

Troll.prototype ={
    update: function(){
    },

    desenha:function(){
       context.drawImage(this.imagem, 0,0, this.imagem.width, this.imagem.height,
                               this.x, this.y, this.imagem.width,
                               this.imagem.height);
    },
    atingir: function(){
       this.atingido = 1; // o troll foi massacrado com requintes de cureldade
    },

    pegou: function(){
       return (this.atingido == 1);
    },

    respawn: function(){
        var novoY = Math.round( (Math.random() * 10000) % 200) + 50;
        console.log("Novo y = "+novoY);
        var novaImagem = Math.round((Math.random() * 10 % 2) + 1);
        this.y = novoY;
        this.imagem.src = "images/troll0"+novaImagem+".png";
        this.atingido = 0;
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