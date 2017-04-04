// JavaScript Document
var data=["images/1.png","images/2.png","images/3.png"];
/*var random=Math.floor(Math.random()*data.length);*/
var t=document.getElementsByTagName('td');
window.onload=function(){
	 var play=document.getElementById('play'),
         complete=document.getElementById('complete'),
	     tab=document.getElementById('tab');
     play.onclick=playFun;
     complete.onclick=completeFun;
	 tab.onclick=tFun;
}
function playFun(){
	for(var i=0;i<t.length-1;i++){
	t[i].setAttribute("id","");
	}
	t[15].setAttribute("id","t15");//初始化
	var random=Math.floor(Math.random()*data.length);
	/*document.write('<img src="' + data[random]+'">');*/
	 /* var t=document.getElementsByTagName('td');*/
	 //三张图片里随机选取一张
	 var original=document.getElementById('original');
     original.innerHTML="<img src="+data[random]+">";
     var i,x,y,k;
     for( i=0,k=0;i<t.length-1;i++){
		 if(i>0 && i%4==0){
			 k++;
			 }
    	 x=-i%4*100;
	     y=-k*100;
	 	 t[i].style.background="url("+data[random]+") "+x+'px '+y+'px' ;
	 }
	 t[15].style.background="";
	 //随机打乱图片
	 for(i=0;i<t.length-1;i++){
	  var arr1=randomArray()[i];
	  var temp1=t[i].style.background;
	  t[i].style.background=t[arr1].style.background;
	  t[arr1].style.background=temp1;
	 } 
	 /*t[15].style.background="";*/
	 //生成随机数组
	 function randomArray() {
	 var index,temp;
	 var arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
	 for(var a=0;a<arr.length;a++){
		 index=Math.floor(Math.random()*arr.length);
		 if (index != a) {
            temp = arr[a];
            arr[a] = arr[index];
            arr[index] = temp;
		 }
	 }
	 return arr;
	}	  
}
function tFun(event){
	event=event||window.event;
	var t15=document.getElementById('t15'),
        tab=document.getElementById('tab');  
	  /*  t=document.getElementsByTagName('td'),*/
        disX=event.clientX-tab.offsetLeft,
		disY=event.clientY-tab.offsetTop,
	    a=Math.ceil(disX/104)-1,
		b=Math.ceil(disY/104)-1,
		//a为鼠标所指单元格列号，b为鼠标所指单元格行号
		c=b*4+a;//鼠标所指单元格索引值
	var d=Math.ceil(t15.offsetLeft/104)-1,
		e=Math.ceil(t15.offsetTop/104)-1;
		//空白格索引值		
	if((a==d||b==e)&&(t15.offsetLeft<disX?Math.abs(disX-t15.offsetLeft)<=208:Math.abs(disX-t15.offsetLeft)<=104)&&(t15.offsetTop<disY?Math.abs(disY-t15.offsetTop)<=208:Math.abs(disY-t15.offsetTop)<=104)){	
		var temp2=t[c].style.background;
	    t[c].style.background=t15.style.background;
	    t15.style.background=temp2;
		t15.setAttribute("id","");
		t[c].setAttribute("id","t15");		
		}
  }
  //检查是否完成拼图
function completeFun(){
	var t=document.getElementsByTagName('td');
	var i,x,y,flag=1;
    for( i=0,k=0;i<t.length-1;i++){
		
		if(i>0 && i%4==0){
			 k++;
			 }
    	x=-i%4*100;
	    y=-k*100;
		var Px=t[i].style.backgroundPositionX,
		    Py=t[i].style.backgroundPositionY;
		if (Px!=x+'px'|| Py!=y+'px'){
			flag=0;
			}
	 } 
	if(flag==1){
		 alert("Bingo,你真棒！");
		 }
	else {
		 alert("还差一步，再接再厉喔！");
		 }
}
