(function() {
	function MainCtrl() {
	  var items = [[]];
	  
	  this.data = items;
	  this.col = [
		{
		  data: 'id',
		  title: 'ID',
		  readOnly: true
		},
		{
		  data: 'price',
		  title: 'Price',
		  readOnly: false
		}
	  ];
	  
	  this.columns = [{
		  label: "Product Title",
		  isMandatory: true,
		  isSelect: false,
		  isMultiValue: false,
		  stepId: "PROD_TITL_N",
		  editedBy: "V",
		  default: null
		}, {
		  label: "Brand",
		  isMandatory: true,
		  isSelect: true,
		  isMultiValue: false,
		  stepId: "BRND_I",
		  editedBy: "M",
		  default: null,
		  values : [
				{
					"id": "123456",
					"value": "INDIA"
				}, {
					"id": "4545",
					"value": "USA"
				}, {
					"id": "567r6",
					"value": "France"
				}
		  ]
		}
	  ];
	  
	  this.addColumn = function() {
		this.columns.push({});
	  };
	  this.removeColumn = function() {
		this.columns.pop();
	  };
	}

	MainCtrl.$inject = [];

	angular
	  .module('app', ['ngHandsontable'])
	  .controller('MainCtrl', MainCtrl);
}());