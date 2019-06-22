// JavaScript Document
var id=1;
var number;
  $(document).ready(function(){
  $("li a").click(function(){
	  if(id!=this.id)
	  {   
	  $("#contextwrapper").stop();
	  $("#page"+id).stop();
	  	    
		if( this.id==1 )
		 number=240;
		else
		 number=550;
	  
      $("#contextwrapper").animate({width:number+'px'});
      $("#page"+id).animate({left:'550px'});
  
      id=this.id;
   
 
   
	 $("#page"+this.id).animate({left:(number-240)/7+"px"},500);
	  }
  });
});

function coverchange(e)
{
       document.getElementById("mainbody").style.backgroundImage="url(images/cover/"+e+".jpg)";	   
}

$(document).ready(function(){
  $(".boxover").mouseenter(function(){

	     
  });
});
$(document).ready(function(){
  $(".boxover").mouseleave(function(){
  $(this).animate({top:'-238px',left:'-233px'},"fast");
 });
});

var controler=true;
function showgallery(e,id,picnum)
{
	var context=document.getElementById("blackpage");

	if(controler)
	{
		if(context.style.display!="block")
		  loadgallery(id,picnum);
		
	   context.style.display=e;
	}
   
   if(id=="gallery-wrapper")
    controler=false;
   else
	controler=true;

}

function loadgallery(curentid,num)
{
	var context=document.getElementById("btn-wrapper");
	context.innerHTML="";
	for(var i=0;i<num;i++)
	
	 if(i!=(num-1))
	context.innerHTML=context.innerHTML+"<div class='btn'><a id='"+curentid+"main' onClick='changepic(this.id,"+i+")'><img src='images/"+curentid+"btn"+i+".jpg'></a></div><div class='fixer'></div>";
	 else
	  context.innerHTML=context.innerHTML+"<div class='btn' style='margin-bottom:0px'><a id='"+curentid+"main' onClick='changepic(this.id,"+i+")'><img src='images/"+curentid+"btn"+i+".jpg'></a></div><div class='fixer'></div>";

document.getElementById("image-wrapper").style.backgroundImage="url(images/"+curentid+"main0.jpg)";
}

function changepic(prj,ele)
{

	document.getElementById("image-wrapper").style.backgroundImage="url(images/"+prj+ele+".jpg)"
}

//menu code
var clicked=false;
var idclicked="unknown";
$(document).ready(function(){
 $("ul li a").mouseenter(function(){
	 $(this).stop();
  $(this).animate({top:'0px'}); 
 });
});

$(document).ready(function(){
 $("ul li a").mouseleave(function(){
  if((!clicked || (idclicked!=this)) &&!(this.id==1 && idclicked=="unknown"))
   {
	$(this).stop();
    $(this).animate({top:'-80px'});
   }
 });
});

$(document).ready(function(){
 $("ul li a").click(function(){
   if(this.id!=1 && idclicked=="unknown")
	idclicked="#1";
	
  if(idclicked!=this)
   $(idclicked).animate({top:'-80px'});
   
   $(this).stop();
   $(this).animate({top:'0px'});
   idclicked=this;
   clicked=true;	
 });
});

$(document).ready(function(){
 $("ul li ").click(function(){	

   $("ul li ").css("border-bottom-width","0px");

   $(this).css("border-bottom-width","1px");	
 });
});
//menu code
