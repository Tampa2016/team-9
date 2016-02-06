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

	}	


