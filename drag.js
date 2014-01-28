jQuery.fn.drag = function(){
	this.top=0;
	this.left=0;
    
    console.log(this.mousePose);
	$(this).on("mousedown",function(data){
		var self=this;
        //console.log(this);
        this.mousePos = {left:0,top:0};
		this.top=$(this).offset().top;
		this.left=$(this).offset().left;
        //console.log(this.mousePos);
		this.mousePos.left=event.pageX;
	    this.mousePos.top=event.pageY;
        
		$(document).on("mousemove",function(event){
            //console.log(this);
            //console.log(self.mousePos);
			$(self).css("position","absolute");
			$(self).css("left",self.left+event.pageX-self.mousePos.left);
			$(self).css("top",self.top+event.pageY-self.mousePos.top);
		});
        $(document).on("mouseup",function(){$(document).off()});
	});
}