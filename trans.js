/*/// <reference path="angular.min.js" />

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

				}*/

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








<link rel="stylesheet" href="dialog.css">


<script src = "dialog.js"></script>

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

<p id="post_1">
	aaaaaaaaaaaaaa...
	<button onclick= "confirm.render('Delete Post?','delete_post','post_1')">Delete</button>
</p>
<p id="post_1">
	bbbbbbbbbbbbbbbb...
	<button onclick= "confirm.render('Delete Post?','delete_post','post_1')">Delete</button>
</p>
</body>
<html>

