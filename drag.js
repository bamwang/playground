jQuery.fn.drag = function(){
	$(this).on("mousedown",function(data){
		this.mousePos = {};
		this.myPos = {}
		this.myPos.top=$(this).offset().top;
		this.myPos.left=$(this).offset().left;
		this.mousePos.left=event.pageX;
		this.mousePos.top=event.pageY;
		var obj=this;
			$(document).on("mousemove",function(event){
			$(obj).css("position","absolute");
			$(obj).css("left",obj.myPos.left+event.pageX-obj.mousePos.left);
			$(obj).css("top",obj.myPos.top+event.pageY-obj.mousePos.top);
		});
	});
	$(this).on("mouseup",function(){$(document).off("mousemove")});
}