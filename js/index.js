var scrolltop=0;
var targettop=0;
var totalnum;
var interval=null;
var temp=0;
var num=0;
function goup(){
	scrolltop-=100;
	if(scrolltop>=targettop){
		window.scrollTo(0,scrolltop);
	}else{
		clearInterval(interval);
	}
}
function godown(){
	scrolltop+=100;
	if(scrolltop<=targettop){
		window.scrollTo(0,scrolltop);
	}else{
		clearInterval(interval);
	}
}
function navposition(){
	var navObj=document.getElementsByClassName("nav")[0];
	var liObjs=navObj.getElementsByTagName("li");
	var divObjs=document.getElementsByClassName("div-content");
	totalnum=divObjs.length;
	for(var i=0;i<totalnum;i++){
		var divtop=divObjs[i].offsetTop-300;
		if(scrolltop>=divtop){
			temp=i;
		}
		for(var j=0;j<totalnum;j++){
			liObjs[j].getElementsByTagName("a")[0].className="";
		}
		liObjs[temp].getElementsByTagName("a")[0].className="currentLi";
	}
	if(document.body.clientWidth>480){
		if(scrolltop>=600){
			navObj.style.position="fixed";
		}else{
			navObj.style.position="";
		}
	}else{
		navObj.style.position="";
	}
		
}
function showanimate(){
	var divObjs=document.getElementsByClassName("div-content");
	var liObjs=divObjs[1].getElementsByTagName("li");
	var spanObjs=divObjs[2].getElementsByClassName("xian");
	var imgObj=divObjs[3].getElementsByTagName("img")[0];
	var divlObjs=divObjs[4].getElementsByTagName("div");
	var divllObjs=divObjs[5].getElementsByClassName("contact1");
	var top1=divObjs[1].offsetTop;
	var top2=divObjs[2].offsetTop;
	var top3=divObjs[3].offsetTop;
	var top4=divObjs[4].offsetTop;
	var top5=divObjs[5].offsetTop;
	console.log(scrolltop);
	if(scrolltop>top1-300&&scrolltop<top2){
		for(var i=0;i<liObjs.length;i++){
			liObjs[i].className="running";
		}
	}
	if(scrolltop>top2-300&&scrolltop<top3){
		for(var i=0;i<spanObjs.length;i++){
			spanObjs[i].className="xian other";
		}
	}
	if(scrolltop>top3-300&&scrolltop<top4){
		imgObj.className="running";
	}
	if(scrolltop>top4-300&&scrolltop<top5){
		for(var i=0;i<divlObjs.length;i++){
			divlObjs[i].style.display="block";
		}
	}
	if(document.body.clientWidth>320){
		if(scrolltop>top5-200){
			for(var i=0;i<divllObjs.length;i++){
				divllObjs[i].style.display="block";
			}
		}
	}else{
		if(scrolltop>top5-400){
			for(var i=0;i<divllObjs.length;i++){
				divllObjs[i].style.display="block";
			}
		}
	}
}
function showNext(index){
	var photoleft=document.getElementsByClassName("photo-left")[0];
	var photoleftimg=photoleft.getElementsByTagName("img")[0];
	var photorightimgObjs=document.getElementsByClassName("photo-right")[0].getElementsByTagName("img");
	totalnum=photorightimgObjs.length;
	photorightimgObjs[num].className="";
	num=(num+1)>=totalnum?0:num+1;
	if(index!=null&&index!=undefined){
		num=index;
		for(var j=0;j<totalnum;j++){
			photorightimgObjs[j].className="";
		}
	}
	var srcimg=photorightimgObjs[num].getAttribute("src");
	photoleftimg.setAttribute("src",srcimg);
	photorightimgObjs[num].className="currentLi";

}
window.onscroll=function(){
	scrolltop=document.documentElement.scrollTop || document.body.scrollTop;
	console.log(scrolltop);
	navposition();
	showanimate();
};
function lionclick(){
	var divObjs=document.getElementsByClassName("div-content");
	var liObjs=document.getElementsByClassName("nav")[0].getElementsByTagName("li");
	var about =document.getElementsByClassName("about")[0];
	for(var i=0;i<liObjs.length;i++){
		(function(i){
			liObjs[i].onclick=function(){
				for(var j=0;j<liObjs.length;j++){
					liObjs[j].getElementsByTagName("a")[0].className="";
				}
				if(i==0){
					targettop=divObjs[i].offsetTop;
				}else if(i==1){
					targettop=parseInt((divObjs[i].offsetTop-100+"").substring(0,2)+"0");
				}
				else{
					targettop=parseInt((divObjs[i].offsetTop-100+"").substring(0,2)+"00");
				}
				if(targettop>=scrolltop){
					interval=setInterval("godown();",50);
				}else{
					interval=setInterval("goup();",50);
				}
				this.getElementsByTagName("a")[0].className="currentLi";
			};
		})(i);
	}
	about.onclick=function(){
		targettop=parseInt((divObjs[1].offsetTop-100+"").substring(0,2)+"0");
		interval=setInterval("godown();",50);
	};
}
window.onload=function(){
	setInterval("showNext();",2000);
	lionclick();
	var leftbtn=document.getElementsByClassName("photo-left")[0].getElementsByClassName("leftbtn")[0];
	var rightbtn=document.getElementsByClassName("photo-left")[0].getElementsByClassName("rightbtn")[0];
	leftbtn.onclick=function(){
		if(num>0&&num<8){
			num--;
			showNext(num);
		}else{
			alert("前面没图片");
		}
	}
	rightbtn.onclick=function(){
		if(num>0&&num<8){
			num++;
			showNext(num);
		}else{
			alert("前面没图片");
		}
	}
};