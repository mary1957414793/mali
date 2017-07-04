// JavaScript Document
window.onload=function(){
			var car=document.getElementById("carousel");
			//找到所有的图片元素
			var divs=document.getElementById("content").getElementsByTagName("div");
			//找到所有的控制器
			var lis=document.getElementById("control").getElementsByTagName("li");

			var oL=document.getElementById("aL");//左箭头
			var oR=document.getElementById("aR");//右箭头
			var cur_index=0;//保存当前显示的图片的索引

			var t=setInterval(move,3000);

			//播放下一张图片
			function move(){
				//当前显示的图片隐藏
				divs[cur_index].className="";
				lis[cur_index].className="";

				cur_index++;
				//最后一张
				if(cur_index==divs.length){
					cur_index=0;
				}
				divs[cur_index].className="current";
				lis[cur_index].className="sel";
			}

			//给轮播区添加鼠标事件
			car.onmouseover=function(){
				clearInterval(t);
				//显示左右箭头
				oL.style.display="block";
				oR.style.display="block";
			};

			car.onmouseout=function(){
				t=setInterval(move,3000);
				//隐藏左右箭头
				oL.style.display="none";
				oR.style.display="none";
			};


			//给控制器添加点击事件
			for(var i=0;i<lis.length;i++){
				lis[i]._index=i;//保存每个元素对象的位置
				lis[i].onclick=function(){
					lis[cur_index].className="";//当前被选中的指示器变为未选中状态
					divs[cur_index].className="";

					//被点击的指示器变为选中状态
					this.className="sel";
					divs[this._index].className="current";
					cur_index=this._index;
				};
			}
}