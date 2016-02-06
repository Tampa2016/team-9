function customBox()
	{
		this.render = function(dialog)
			{
				var winW = window.innerWidith;
				var winH = window.innerHeight;	
				var dialogoverlay = document.getElementById('dialogoverlay');
				var dialogbox = document.getElementById('dialogbox');
				dialogoverlay.style.display = "block";
				dialogoverlay.style.height = winH + "px";
				dialogbox.style.left = (winW/2) - (550*.5) +"px";
				dialogbox.style.top = "100px";
				dialogbox.style.display = "block";
				document.getElementById('dialogboxhead').innerHTML="b;222222222222222222222";
				document.getElementById('dialogboxbody').innerHTML = dialog;
				document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Box.ok() ">OK</button>'; // change to accessible
				
			}
		this.ok =function()
			{
				document.getElementById('dialogbox').style.display = "none";
				document.getElementById('dialogoverlay').style.display = "none";
			}
	}
var Box = new customBox();
==================================================================================


function CustomConfirm()
	{
		this.render = function(dialog,op,id)
			{
				var winW = window.innerWidth;
	   			var winH = window.innerHeight;
				var dialogoverlay = document.getElementById('dialogoverlay');
	    			var dialogbox = document.getElementById('dialogbox');
				dialogoverlay.style.display = "block";
	 			dialogoverlay.style.height = winH+"px";
				dialogbox.style.left = (winW/2) - (550 * .5)+"px";
	    			dialogbox.style.top = "100px";
	   			dialogbox.style.display = "block";
				document.getElementById('dialogboxhead').innerHTML = "Confirm that action";
	    			document.getElementById('dialogboxbody').innerHTML = dialog;
				document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Confirm.accessible(\''+op+'\',\''+id+'\')">Accessible</button> <button onclick="Confirm.inaccessible()">Inaccessible</button>';
			}
	this.inaccessible = function()
			{
				/*document.getElementById('dialogbox').style.display = "none";
				document.getElementById('dialogoverlay').style.display = "none";//storing the value!!!!!!!
			}*/
	
	this.accessible = function(op,id)
			{
		if(op == "delete_post")
				{ //storing the value!!!!!!!!!!!!
					deletePost(id);
				}
					document.getElementById('dialogbox').style.display = "none";
					document.getElementById('dialogoverlay').style.display = "none";
			}
}	

var Confirm = new CustomConfirm();