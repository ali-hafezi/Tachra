// JavaScript Document
var project=[new Object(),new Object(),new Object(),new Object(),new Object(),new Object(),new Object(),new Object(),new Object(),new Object(),new Object(),new Object(),new Object(),new Object(),new Object(),new Object()];
var alter=["عبدی","شهرابی","ادیب","عبداللهی","جداری","معیدی","محمدیان","مسچیان","مرادی","مختاری","مقصودی","تالار","پامنار","مومنی","قیطریه","حبیب الهی"];
var heading1=["ویلای آقای عبدی","ویلای شهرابی","ویلای آقای دکتر ادیب","نمای ساختمان آقای عبدالهی","نمای کلینیک دکتر جداری","مجتمع مسکونی معیدی","مجتمع مسکونی محمدیان","ساختمان آقای مسچیان","نمای ساختمانی آقای مرادی","نمای ساختمان آقای مختاری","نمای ساختمان آقای مقصودی","تالار پذیرایی","مجتمع مسکونی پامنار","مجتمع مسکونی آقای مومنی","مجتمع مسکونی قیطریه","مجتمع مسکونی حبیب الهی"]
var heading2=["آقای عبدی","آقای شهرابی","آقای دکتر ادیب","آقای عبداللهی","آقای دکتر جداری","بخش خصوصی","آقای محمدیان","آقای کسرایی","آقای مرادی","آقای مختار","آقای مقصودی و شرکا","آقای احمدی","آقای مهندس بابکی","آقای مومنی","آقای محمدی","بخش خصوصی"];
var heading3=["آب سرد","هشتگرد","لاویج","آزاد شهر","نسیم شهر","آجودانیه","تهرانپارس","خیابان خواجه عبدالله","هاشمی","افسریه","فلکه دوم صادقیه","جوادیه","پامنار","خیابان وسک","قیطریه","ستارخان"];
var picturenumber=[2,4,6,3,2,2,1,1,2,2,3,2,4,5,2,3];

for(var i=0;i<project.length;i++)
{
 project[i].source="images/project/"+i+"/btn0.jpg";
 project[i].alter=alter[i];
 project[i].heading1=heading1[i];
 project[i].heading2=heading2[i];
 project[i].heading3=heading3[i];
 project[i].picnum=picturenumber[i];
} 
 function loadpage()
 {
	 var context=document.getElementById("projectwrapper");
	 context.innerHTML="";
   for(var i=project.length-1;i>=0;i--)
	{		   
	 context.innerHTML=context.innerHTML+
	 "<div class='boxes'><a id='project/"+i+"/' onClick="+'showgallery("block",this.id,'+
	 project[i].picnum+')'+"><img src="+
	 project[i].source+" width='210' height='135' alt="+
	 project[i].alter+" title="+
	 project[i].alter+"></a><h3>"+
	 project[i].heading1+"</h3><h4>کارفرما : "+
	 project[i].heading2+"</h4><h5>مکان : "+
	 project[i].heading3+"</h5></div>"	

	  if(!((project.length-i)%2))
	    context.innerHTML=context.innerHTML+"<div class='fixer'></div>";        
	   }
 }