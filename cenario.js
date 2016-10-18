function Cenario(context){
	this.context = context;
	this.x       = 0;
	this.y       = 0;
	this.image  = new Image();
	this.image.src = "images/cenario.png";
}

Cenario.prototype  = {
    draw: function(){
    	this.context.drawImage(this.image, 0, 0, 
    		                               this.image.width, this.image.height,
    		                               0, 0, 400, 300);
    }
};