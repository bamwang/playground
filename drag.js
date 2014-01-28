

jQuery.fn.drag = function(){
	var this.top;
	var this.left;
	var mousePos = {};
	$(this).on("mousedown",{obj:this},function(data){
		var self=data.obj;
		self.top=$(self).offset().top;
		self.left=$(self).offset().left;
		self.mousePos.left=event.pageX;
		self.mousePos.top=event.pageY;

		$(document).on("mousemove",{obj:self},function(event,data){
			var self=data.obj;
			$(self).css("postion","absoulute");
			$(self).css("left",self.left+event.pageX);
			$(self).css("top",self.top+event.pageY);
		});
	});
}