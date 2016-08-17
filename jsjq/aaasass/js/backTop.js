define(["jquery","scrollTo"],function($,scrollTo){
/**
 * [BackTop description]
 * @param {[type]} elem [description]事件元素
 * @param {[type]} opts [description]参数对象
 */
	function BackTop(elem,opts){
		this.opts = $.extend({}, BackTop.DEFAULTS,opts);
		this.$el = $(elem);
		//引入其他模块内函数
		this.$scroll = new scrollTo.ScrollTo({
			dest:0,
			speed:this.opts.speed
		})
		//2种运动接口
		if(this.opts.mode == "move"){
			this.$el.on("click",$.proxy(this._move,this));
					
		}else{
			this.$el.on("click",$.proxy(this._go,this));
		}
		//检测是否出现升到顶部标签
		$(window).on('scroll',$.proxy(this._checkPosition,this));
		$(window).scroll();		
	}
/**
 * [DEFAULTS description]默认参数
 * @type {Object}
 */
	BackTop.DEFAULTS = {
		mode : "move",//运动方式
		pos : $(window).height(),//显示位置
		speed:800
	}
/**
 * [_move description]动画
 * @return {[type]} [description]
 */
	BackTop.prototype._move = function(){
		this.$scroll.move()
	}
/**
 * [_go description]直达
 * @return {[type]} [description]
 */
	BackTop.prototype._go = function(){
		console.log(this);
		this.$scroll.go()
	}
/**
 * [_checkPosition description]检测滚动条位置
 * @return {[type]} [description]
 */
	BackTop.prototype._checkPosition = function(){
		var $el = this.$el;
		if($(window).scrollTop()>this.opts.pos){
			$el.fadeIn();
		}else {
			$el.fadeOut();
		}
	}
	$.fn.extend({
		backTop:function(opts){
			return this.each(function() {
				new BackTop(this,opts)
			});
		}
	})
	
	return {
		BackTop:BackTop
	}
})