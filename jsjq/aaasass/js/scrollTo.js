define(['jquery'],function($){
/**
 * [ScrollTo description]滑动模块
 * @param {[type]} opts [description]参数对象
 */
	function ScrollTo(opts){
		this.opts = $.extend({},ScrollTo.DEFAULTS, opts);
		this.$el = $("html,body");
	};
/**
 * [move description]动画效果滑动
 * @return {[type]} [description]
 */
	ScrollTo.prototype.move = function(){
		var opts = this.opts,
			dest = opts.dest,
			speed = opts.speed;
		if($(window).scrollTop()!= dest){
			if(!this.$el.is(":animated")){
				this.$el.animate({
					scrollTop:dest
				}, speed);
			}
		}	
	};
/**
 * [go description]无动画效果滑动
 * @return {[type]} [description]
 */
	ScrollTo.prototype.go = function(){
		var dest = this.opts.dest;
		if($(window).scrollTop()!= dest){
			this.$el.scrollTop(dest); 
		}
	};
/**
 * [DEFAULTS description]默认参数 dest:目标 speed速度
 * @type {Object}
 */
	ScrollTo.DEFAULTS = {
		dest:0,
		speed:800
	};
	return {
		ScrollTo:ScrollTo
	};
});
