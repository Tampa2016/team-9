function CustomAlert()
	{
		this.render = function(dialog)
			{
				var winW = window.innerWidth;
				var winH = window.innerHeight;	
				var dialogoverlay = document.getElementById('dialogoverlay');
				var dialogbox = document.getElementById('dialogbox');
				dialogoverlay.style.display = "block";
				dialogoverlay.style.height = winH + "px";
				dialogbox.style.left = (winW/2) - (225) +"px";
				dialogbox.style.top = "100px";
				dialogbox.style.display = "block";
				document.getElementById('dialogboxhead').innerHTML="Please work!";
				document.getElementById('dialogboxbody').innerHTML = dialog;
				document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok() ">OK</button>'; 
				
			}
		this.ok =function()
			{
				document.getElementById('dialogbox').style.display = "none";
				document.getElementById('dialogoverlay').style.display = "none";
			}
	}
var Alert = new CustomAlert();
/*==============================================================================*/


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
				document.getElementById('dialogboxhead').innerHTML = "Rating";
	    			document.getElementById('dialogboxbody').innerHTML = dialog;
				document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Confirm.yes(\''+op+'\',\''+id+'\')">Accessible</button> <button onclick="Confirm.no()">Inaccessible</button>';
			}
	this.inaccessible = function()
			{
				document.getElementById('dialogbox').style.display = "none";
				document.getElementById('dialogoverlay').style.display = "none";
			}
	
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
