sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("sapbtphome.sapbtphome.controller.Home", {
			onInit: function () {
				const oJSONModelBTPMenu = new sap.ui.model.json.JSONModel();
                oJSONModelBTPMenu.loadData("./localService/mockdata/BTPMenu.json");
                this.getView().setModel(oJSONModelBTPMenu);
			},

			onSideNavButtonPress: function() {
				const oRootPage = this.getView().byId("rootPage");				
				oRootPage.setSideExpanded(!oRootPage.getSideExpanded());
			}
		});
	});
