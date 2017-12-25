$(function(){
	// 广告
	imageAnimate();
});

// 注册登录后修改头部信息的过程,详细请看: login.js
logined_callback['index'] = function(){
	// 如果没有登录
	if(get_cookie('userid') < 1){
		return;
	}
	var style = getCookie('vip_isvip')=='1' ? 'color:#C80000;' : '';
	var html = 'Hi，<a href="http://i.xunlei.com/" title="'+get_cookie('usernick')+'" style="'+style+'" target="_blank">'+get_cookie('usernick')+'</a>，欢迎来迅雷积分商城！<a href="javascript:logout();void(0);" title="退出">退出</a>';
	$('div.userPanel').html(html);
}

// 大图转换
function imageAnimate(){ 
	var lbindex=0;
	var lubid;
	$("#slide1_area").css("width","1003px");
	lubid = window.setInterval(showlbt,5000); 
	
	$('#sHover >li').mouseover(function(){
		window.clearInterval(lubid);
		lbindex = $('.sHover >ul >li').index(this);
		$('#sHover >li').eq(lbindex).addClass('s_on').siblings().removeClass('s_on');
		var width = parseInt(lbindex)*1003;
		var left = -width;
		$('.slide1_img').eq(lbindex).show().siblings().hide();
		//$("#slide1_area").animate({left:left}, "300");
	})
	$('#sHover >li').mouseout(function(){
		lubid = window.setInterval(showlbt,5000);
	})
	
	$('#slide1_area >div').mouseover(function(){
		window.clearInterval(lubid);
		$('#pagecontrol').show();
	})
	$('#slide1_area >div').mouseout(function(e){
		$('#pagecontrol').hide();
		lubid = window.setInterval(showlbt,5000);
	})
	
	$('#pagecontrol >a').mouseover(function(){
		window.clearInterval(lubid);
		$('#pagecontrol').show();
	});
	$('#pagecontrol >a').mouseout(function(){
		$('#pagecontrol').hide();
		lubid = window.setInterval(showlbt,5000);
	});

	$('#pagecontrol >a').eq(0).click(function(){
		if(lbindex == 0){
			lbindex=2;
		} else {
			lbindex = lbindex-2;
		}
		showlbt();
		$('#pagecontrol').show();
	});
	$('#pagecontrol >a').eq(1).click(function(){
		if(lbindex == 4){
			lbindex++;
		}
		showlbt();
		$('#pagecontrol').show();
	});	

	function showlbt(){
		lbindex++;
		if(parseInt(lbindex)>=4){
			lbindex = 0;
			var speed = 80;
		}else{
			var speed = 300;
		}
		var width = parseInt(lbindex)*1003;
		var left = -width;
		
		$('#sHover >li').eq(lbindex).addClass('s_on').siblings().removeClass('s_on');
		$('.slide1_img').eq(lbindex).show().siblings().hide();
		//$("#slide1_area").animate({left:left}, speed);
	}
}

