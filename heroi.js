function Heroi(context, teclado){
	this.context = context;
	this.x = 0;
	this.y = 50;
	this.estado  = 0; // parado

	this.image = new Image();
	this.image.src = "images/alfredo.png";

	this.teclado = teclado;
}

Heroi.prototype = {
   update: function(){
   	   if (this.teclado.atirou()){
   	   	   this.estado = 1; // movimento
   	   }
   	   if (this.teclado.subiu()){
   	   	  // console.log("subiu...");
   	       this.y -= 5;
   	   }
   	   if (this.teclado.desceu()){
   	   	  // console.log("desceu...");
   	   	   this.y += 5;
   	   }

   	   if (this.estado == 1){
   	   	   this.x += 5;
   	   }

   	   if (this.x >= 400){
   	   	   this.x = 0;
   	   	   this.estado = 0;
   	   }

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
   }

};
















