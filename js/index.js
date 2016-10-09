$("#logoInfo").mouseover(function () {
	$("#logoInfo").html("求工作~").css({"padding-top":"13px","color":"red","font-size":"25px"});
});
$("#logoInfo").mouseleave(function () {
	$("#logoInfo").css({"padding-top":"5px","color":"#fff","font-size":"16px"});
	$("#logoInfo").html("Ray<br>前端工程师").css({"padding-top":"5px","color":"#fff","font-size":"16px"});
});
var photo = 1;
$(".photo").mouseenter(function () {
	if (photo == 1) {
		photo = 2;
		$(".photo>div:first").animate({left:"110%"},"normal",function() {$(".photo>div:first").css({left:"-110%"})});
		// $(".photo>div:last").css({left:"-110%"});
		$(".photo>div:last").animate({left:"0"},"normal");		
	} else if (photo == 2) {
		photo = 1;
		$(".photo>div:last").animate({left:"110%"},"normal",function() {$(".photo>div:last").css({left:"-110%"})});
		// $(".photo>div:first").css({left:"-110%"});
		$(".photo>div:first").animate({left:"0"},"normal");
	}
});
$("nav a:gt(0)").click(function () {
	alert("正在努力建设中~");
})