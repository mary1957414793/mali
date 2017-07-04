$(function(){
	$("#topbar .top02 .total").mouseover(function(){
		$("#topbar .top02 .total .total_b").css("display","block");
	});
	$("#topbar .top02 .total").mouseout(function(){
		$("#topbar .top02 .total .total_b").css("display","none");
	});

	// 复选框
	$(".main .checkbox").attr("checkbox_index","1");
	$(".main .checkbox1").attr("checkbox_index","1");
	$(".main #but").attr("checkbox_index","1");
	$(".main #but").click(function(){
		if($(this).attr("checkbox_index")=="1"){
			$(".main .checkbox").css("background","url(images/button02.png)")
			$(".main .checkbox1").css("background","url(images/button02.png)")
			$(this).css("background","url(images/button02.png)")
			$(this).attr("checkbox_index","0")
			$(".main .checkbox").attr("checkbox_index","0")
			$(".main .checkbox1").attr("checkbox_index","0")
		}else{
			$(".main .checkbox").css("background","url(images/button03.png)")
			$(".main .checkbox1").css("background","url(images/button03.png)")
			$(this).css("background","url(images2/button03.png)")
			$(this).attr("checkbox_index","1")
			$(".main .checkbox").attr("checkbox_index","1")
			$(".main .checkbox1").attr("checkbox_index","1")
		}
	});
	$(".main .checkbox").click(function(){
		if ($(this).attr("checkbox_index")=="1") {
			$(this).attr("checkbox_index","0");
			$(this).css("background","url(images/button02.png)");
			$(this).parent().parent().find(".content").find(".checkbox1").css("background","url(images/button02.png)").attr("checkbox_index","0");
		}else{
			$(this).attr("checkbox_index","1");
			$(this).css("background","url(images/button03.png)");
			$(this).parent().parent().find(".content").find(".checkbox1").css("background","url(images/button03.png)").attr("checkbox_index","1");
		}
	});
	$(".main .checkbox1").click(function(){
		var j=0;
		if ($(this).attr("checkbox_index")=="1") {
			$(this).attr("checkbox_index","0");
			$(this).css("background","url(images/button02.png)");
		}else{
			$(this).attr("checkbox_index","1")
			$(this).css("background","url(images/button03.png)");
		}
		for(var i=0;i<$(this).parent().parent().parent().find(".checkbox1").length;i++){
			if($(this).parent().parent().parent().find(".checkbox1").eq(i).attr("checkbox_index")=="0"){
				j++;
			}
		}
		if(j==$(this).parent().parent().parent().find(".checkbox1").length){
			$(this).parent().parent().parent().parent().find(".checkbox").css("background","url(images/button02.png)").attr("checkbox_index","0");
		}else{
			$(this).parent().parent().parent().parent().find(".checkbox").css("background","url(images/button03.png)").attr("checkbox_index","1");
		}
	})
	// 计数
 		// +号
 		// $(".btn02").click(function(){
 		// 	$("#btn").find("input").val(parseInt($("#btn").find("input").val())+1)
 		// })
 		// //-号
 		// $(".btn01").click(function(){
 		// 	if($("#btn").find("input").val()!=0){
 		// 		$("#btn").find("input").val(parseInt($("#btn").find("input").val())-1)
 		// 	}
 		// })
 		// $("#btn").find("input").keyup(function(){
 		// 	if($("#btn").find("input").val()<0){
 		// 		$("#btn").find("input").val(0)
 		// 	}
 		// })

 		// 	// +号
 		// $(".btn2").click(function(){
 		// 	$("#btn_t").find("input").val(parseInt($("#btn_t").find("input").val())+1)
 		// })
 		// //-号
 		// $(".btn1").click(function(){
 		// 	if($("#btn_t").find("input").val()!=0){
 		// 		$("#btn_t").find("input").val(parseInt($("#btn_t").find("input").val())-1)
 		// 	}
 		// })
 		// $("#btn_t").find("input").keyup(function(){
 		// 	if($("#btn_t").find("input").val()<0){
 		// 		$("#btn_t").find("input").val(0)
 		// 	}
 		// })
 		$(".btn i").click(function(){
 			var money=$(this).parent().find("strong").html();
 			money=parseFloat(money.substring(1,money.length));
 			var btn_value=parseInt($(this).parent().find("input").val());
 			if($(this).index()==2){
 				if(btn_value==0){
 					$(this).parent().find("input").val("0")
 					$(this).parent().find("em").html("￥"+"0")
 				}else{
 					$(this).parent().find("input").val(btn_value-1);
 					$(this).parent().find("em").html("￥"+(btn_value-1)*money);
 				}
 			}else{
 				$(this).parent().find("input").val(btn_value+1);
 				$(this).parent().find("em").html("￥"+(btn_value+1)*money);
 			}
 		})
});