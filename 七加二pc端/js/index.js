//楼层选项卡
$(function(){
  $("#tab-title li").mouseover(function(){
  	$(this).attr("class","active").siblings().removeAttr("class");
  	$("#first .first-1 #table-content div").eq($(this).index()).addClass("current").siblings().removeClass("current");    	
  });
});
$(function(){
  $("#tab-title1 li").mouseover(function(){
  	$(this).attr("class","active1").siblings().removeAttr("class");
  	$("#second .second-1 #table-content1 div").eq($(this).index()).addClass("current1").siblings().removeClass("current1");    	
  });
});
$(function(){
  $("#tab-title2 li").mouseover(function(){
  	$(this).attr("class","active2").siblings().removeAttr("class");
  	$("#third .third-1 #table-content2 div").eq($(this).index()).addClass("current2").siblings().removeClass("current2");    	
  });
});
$(function(){
  $("#tab-title3 li").mouseover(function(){
  	$(this).attr("class","active3").siblings().removeAttr("class");
  	$("#fourth .fourth-1 #table-content3 div").eq($(this).index()).addClass("current3").siblings().removeClass("current3");    	
  });
});
$(function(){
  $("#tab-title4 li").mouseover(function(){
  	$(this).attr("class","active4").siblings().removeAttr("class");
  	$("#fifth .fifth-1 #table-content4 div").eq($(this).index()).addClass("current4").siblings().removeClass("current4");    	
  });
});
//首页底部左边的框
$(function(){
   $(".footer-4 .footer-z .pic-2").click(function(){
   	$(".footer-4 .footer-r").css("display","block");
   	$(".footer-4 .footer-z").css("display","none");
   });
   $(".footer-4 .footer-r .pic-5").click(function(){
   	$(".footer-4 .footer-r").css("display","none");
   	$(".footer-4 .footer-z").css("display","block");
   });
});
// 购物车
/*$("#topbar .top02 .total").mouseover(function(){
    $("#topbar .top02 .total .total_b").css("display","block");
  });
  $("#topbar .top02 .total").mouseout(function(){
    $("#topbar .top02 .total .total_b").css("display","none");
  });
  
  $("#topbar .menu .menu01").mouseover(function(){
    $("#topbar .menu .menu01 .menu01_bottom").css('display','block');
    $("#topbar .menu .menu01 .menu01_bottom").css('background','white');
  });
  $("#topbar .menu .menu01").mouseout(function(){
    $("#topbar .menu .menu01 .menu01_bottom").css('display','none');
  });

  $("#topbar .menu .menu03").mouseover(function(){
    $("#topbar .menu .menu03 .menu03_bottom").css('display','block');
    $("#topbar .menu .menu03 .menu03_bottom").css('background','white');
  });
  $("#topbar .menu .menu03").mouseout(function(){
    $("#topbar .menu .menu03 .menu03_bottom").css('display','none');
  });

  $("#header .header_t .current").mouseover(function(){
    $("#header .header_t .current .hidden").css('display','block');
    $("#header .header_t .current .hidden").css('background','white');
    $("#header .header_t .current .current i").css('color','#333');
  });
  $("#header .header_t .current").mouseout(function(){
    $("#header .header_t .current .hidden").css('display','none');
  });
  $("input[type=text]").focus();*/