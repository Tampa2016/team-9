/// <reference path="angular.min.js" />

var myApp = angular.module("myModule", []);

my.App.controller("myController", function ($scope)

	{
		var Locations = LocationService.getLocations();
				{
					name: "Busch Gardens Tampa Bay",
					address: "10165 N McKinley Dr, Tampa, FL 33612", 
					phone: "(888) 800-6447",
					category: "Attractions"'
					rating: "4.4",
					comment:"Busch Gardens was a great experience! The roller coasters were fun,
					//category: "Amusement Park"
					
				}
				
				{
					name: "Adventure Island",
					address:"10001 N Malcolm McKinley Dr. Tampa, FL 33612",
					phone: "(888) 800-5447",
					rating: "4.2",
					comment:"gfdgfgfgfdgfd"
				}

				{
					name: "Lowry Park Zoo",
					address: "1101 W Sligh Ave, Tampa, FL 33604",
					phone: "(813) 935-8552",
					rating:"4.1",
					comment:"Ggfdgfdgfd"
				}
				{
					name: "Florida Aquarium",
					address: "701 Channelside Dr, Tampa, FL 33602",
					phone:"(813) 273-4000",
					rating:"4.1"
					comment:"dsdss"
				}
				{
					name:"Amalie Arena",
					address: "401 Channelside Dr, Tampa, FL 33602",
					phone:"(813) 301-6500",
					rating:"4.5",
					comment:"trretretre"
				}
				{
					name:"A

				}

			/*	 </script>

					</head>

    						<body>

    							<div ng-controller="rate">

     							 Rating: <input ng-model="Rating" type="text"/>

    						  <button ng-click="greet()">Rate</button>
			
    					</div>

  				</body>
	
			</html>

		} */

/*

<form method="post" action="/echo/html/">
    <input type="hidden" name="html" value="&lt;p&gt;Thank you for rating&lt/p&gt;" />
    <input type="submit" value="RATE" />
</form>
<div id="confirmBox">
    <div class="message"></div>
    <span class="button yes">Yes</span>
    <span class="button no">No</span>
</div>	

function doConfirm(msg, yesFn, noFn)
	{
   		 var confirmBox = $("#confirmBox");
   		 confirmBox.find(".message").text(msg);
  		  confirmBox.find(".Accessible,.Inaccessible").unbind().click(function()
    			{
     			   confirmBox.hide();
   			 });
   	 	confirmBox.find(".Accessible").click(yesFn);
  		confirmBox.find(".Inaccessible").click(noFn);
   		confirmBox.show();
	}

doConfirm("Accessible or Inaccessible", function yes()
	{
		

	}

$(function () {
    $("form").submit(function (e) {
        e.preventDefault();
        var form = this;
        doConfirm("Your rating will up us", function yes() {
            form.submit();
        }, function no() {
            form.submit();
        });
    });
});
*/





<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<style type="text/css">
#dialogoverlay
	{
		display: none;
		opacity: .8;
		position: fixed;
		top: 0px;
		left: 0px;
		backgroud: #FFF;
		widith: 100%;
		z-index: 10;
	}
#dialogbox
	{
		display: none;
		position: fixed;
		background: #000;
		border-radius: 7px;
		width: 550px;
		z-index: 10;
	}
#dialogbox > div {background: #FFF; margin: 8px; }
#dialogbox > div > #dialogboxhead{ background: #666; font-size: 19px; padding:10px; color:#CCC;
#dialogbox > div > #dialogboxbody{ background: #333; padding:20px; color:#FFF;}
#dialogbox > div > #dialogboxfoot{ background: #666; padding: 10px; text-align:right;}
</style>
<script>

</script>
</head>	
<body>
<div id="dialogoverlay"></div>
<div id="dialogbox">
	<div>
		<div id="dialogboxhead"></div>
		<div id="dialogboxbody"></div>
		<div id="dialogboxfoot"></div>
	</div>
</div>
<h1>My web document content ...</h1>
<h2>My web document content ...</h2>
<button onclick="
<h3>My web document content ...</h3>

<html>

