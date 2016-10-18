function Troll(context){
	this.x = 320;
	this.y = 100;
	this.image = new Image();
	this.image.src = "images/troll02.png";
	this.context = context;
	this.vivo    = true;
}

Troll.prototype = {
    update: function(){

    },

    draw: function(){
    	this.context.drawImage(this.image, 0, 0, this.image.width, this.image.height,
    		                   this.x, this.y, this.image.width/3, this.image.height/3);
    },
    getX: function(){
   	  return this.x;
    },
    getY: function(){
   	  return this.y;
    },
    getWidth: function(){
   	  return this.image.width/3;
    },
    getHeight: function(){
   	  return this.image.height/3;
    },

    morrer: function(){
    	this.vivo = false; // morreu....
    },
    isVivo: function(){
    	return this.vivo;
    },
    respawn: function(){
    	this.vivo = true;
    	this.y    = Math.round(Math.random() * 100000) % 230;

        var novaImagem = (Math.round(Math.random() * 10) % 3) + 1;
        this.image.src = "images/troll0"+novaImagem+".png";
 
    }
};
















