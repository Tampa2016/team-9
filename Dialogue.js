
/*==============================================================================*/

var totalclicks = 0;
var totalinac = 0;
var dialog ='Accessible';
var dialog2 = '      Inaccessible';
function addPosRev()
{
	totalclicks++; 
	
	document.getElementById('Dboxmiddle').innerHTML = dialog + " " + totalclicks + " " + dialog2 + " " + totalinac; // + " "+ totalclicks/totalinac;	
}

function addNegRev()
{
	totalinac++;
	document.getElementById('Dboxmiddle').innerHTML = dialog + " " + totalclicks + " " + dialog2 + " " + totalinac; //+ " " + totalclicks/totalinac;

}

function cFirm()
	{
		this.render = function(dialog,op,id)
			{
			
				var windowW = window.innerWidth;
	   			var windowH = window.innerHeight;
				var Doverlay = document.getElementById('Doverlay');
	    			var Dbox = document.getElementById('Dbox');
				Doverlay.style.display = "block";
	 			Doverlay.style.height = windowH+"px";
				Dbox.style.left = (windowW/2) - (550 * .5)+"px";
	    			Dbox.style.top = "100px";
	   			Dbox.style.display = "block";
				document.getElementById('Dboxtop').innerHTML = "Rating";
				document.getElementById('Dboxmiddle').innerHTML = dialog + " " + totalclicks;
	    			
				document.getElementById('Dboxbottom').innerHTML = '<button onclick="addPosRev()">Accessible</button> <button onclick="addNegRev()">Inaccessible</button>';
			}
	
}	

var Firm = new cFirm();
