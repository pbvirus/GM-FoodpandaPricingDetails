// ==UserScript==
// @name        Foodpanda Pricing Details
// @namespace   https://github.com/pbvirus
// @include     https://www.foodpanda.in/restaurants*
// @version     1.0.0
// @grant       none
// @description A Greasemonkey script to add pricing details to the Foodpanda search results page
// ==/UserScript==


(function()
	{
		var PriceTooltips = document.getElementsByClassName("price-tooltip-items");
		var VendorFooters = document.getElementsByClassName("vendor__details__footer");

		if (PriceTooltips.length = VendorFooters.length)
		{
			for(i=0;i<PriceTooltips.length;i++)
			{
				VendorFooters[i].appendChild(PriceTooltips[i]);
			}
		}
	}
)();