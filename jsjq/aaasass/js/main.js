require.config({
	paths:{
		jquery:"jquery.min"
	}
});

require(["jquery","backTop"],function($,backTop){

	// new backTop.BackTop($("#backTop"),{
	// 	mode : "go",//运动方式
	// })
	$("body").css('background-color', '#429292');

	$("#backTop").backTop({
		mode : "move",//运动方式
	})	
})