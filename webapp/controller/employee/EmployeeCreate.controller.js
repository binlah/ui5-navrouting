sap.ui.define([ 
	"sap/ui/demo/nav/controller/BaseController" ,
	"sap/m/MessageToast"
], function(BaseController, MessageToast) {
	"use strict";

	var sServiceUrl = "/sap/opu/odata/sap/ZUI5_EMP_SRV/";
	
	return BaseController.extend("sap.ui.demo.nav.controller.employee.EmployeeCreate", {

		onInit: function () {
			var oRouter = this.getRouter();
			oRouter.getRoute("employee").attachMatched(this._onRouteMatched, this);

//			$.ajax({
//			  type: "GET",
//			  url: "http://nwasabap.protos.co.th:8000/sap/opu/odata/sap/ZUI5_EMP_SRV/ZUI5_DEMO_EMPSet?sap-client=001&sap-language=EN&$format=json",
//			  dataType: 'json',
//			  headers: {
//					"X-Requested-With" : "XMLHttpRequest",
//					"Content-Type": "application/atom+xml",
//					"DataServiceVersion":"2.0",
//					"X-CSRF-Token":"Fetch"
//			  },
//			  success: function(data, response, xhr) {
//				  sap.ui.getCore().setModel(xhr.getResponseHeader('x-csrf-token'),"csrftoken");
//			  },
//			  error: function(XMLHttpRequest, textStatus, errorThrown){
//				  alert("Problem in connnection.");
//			  }
//			});
		},
		
		_onRouteMatched : function (oEvent) {
//			var oArgs, oView;
//			oArgs = oEvent.getParameter("arguments");
//			oView = this.getView();
//			
//			oView.bindElement({
//				path : "/ZUI5_DEMO_EMPSet(" + oArgs.employeeId + ")",
//				events : {
//					change: this._onBindingChange.bind(this),
//					dataRequested: function (oEvent) {
//						oView.setBusy(true);
//					},
//					dataReceived: function (oEvent) {
//						oView.setBusy(false);
//					}
//				}
//			});
		},
		
		_onBindingChange : function (oEvent) {
			// No data for the binding
			if (!this.getView().getBindingContext()) {
				this.getRouter().getTargets().display("notFound");
			}
		},
		
		saveEmployee: function () {

//			var oModel = this.getView().getModel(),
//				oData = oModel.getData();
//
//			MessageToast.show("Name:" + oData.FirstName + " " + oData.LastName);

			var sPath = "/ZUI5_DEMO_EMPSet(2)?$format=json";			
			var oModel = new sap.ui.model.odata.v2.ODataModel(sServiceUrl);
			
			oModel.read(sPath, {
//			method: "GET", 
			success: function(oData, oResponse) {
				MessageToast.show(oData.FirstName);
			 },
			 error: function(oError) {
				 MessageToast.show("fail");
			 }});

			MessageToast.show(oModel.getProperty("/FirstName"))
			
////			oModel.getData("/ZUI5_DEMO_EMPSet(1)");
//			oModel.setUseBatch(false);
//			
////			var oMetadata = oModel.getServiceMetadata();
////			alert(oMetadata);
//			
//			var firstName = oModel.getProperty("/ZUI5_DEMO_EMPSet(1)/FirstName");
//			alert(firstName);
//
			

		},
		
		updateEmployee: function () {
			var sPath = "/ZUI5_DEMO_EMPSet(2)?$format=json";			
			var oModel = new sap.ui.model.odata.v2.ODataModel(sServiceUrl);
			
			oModel.read(sPath, {
//			method: "GET", 
			success: function(oData, oResponse) {
				MessageToast.show(oData.FirstName);
			 },
			 error: function(oError) {
				 MessageToast.show("fail");
			 }});

			this.getView().bindElement({
				path : "/ZUI5_DEMO_EMPSet(" + oArgs.employeeId + ")",
				events : {
					change: this._onBindingChange.bind(this),
					dataRequested: function (oEvent) {
						oView.setBusy(true);
					},
					dataReceived: function (oEvent) {
						oView.setBusy(false);
					}
				}
			});
		},
		
		cancelEmployee: function () {
			if(confirm("Cancel?")) {
				this.getRouter().navTo("appHome");
			}
		}
		
	});
});