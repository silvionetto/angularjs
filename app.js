(function(){
			var app = angular.module('store', []);

			app.controller('StoreController', function(){
				this.products = gems;
			});

			app.controller('PanelController', function(){
				this.tab = 1;

				this.selectTab = function(setTab) {
					this.tab = setTab;
				};

				this.isSelected = function(checkTab) {
					return this.tab === checkTab;
				};
			});

			var gems = [
				{
					name: 'Dodecahedron',
					price: 2.95,
					description: 'Stone',
					canPurchase: true,
					soudOut: false,
					reviews: [
						{
							stars: 5,
							body: "I love this product!",
							author: "joe@joe.com"
						},
						{
							stars: 1,
							body: "I hate this product!",
							author: "hate@hate.com"
						}
					]
				},
				{
					name: 'Dodecahedron Plus',
					price: 5.95,
					description: 'Stone',
					canPurchase: true,
					soudOut: false
				},
				{
					name: 'Pentagonal Gem',
					price: 5.95,
					description: 'Different Stone',
					canPurchase: false,
					soudOut: true
				},
			];
		})();