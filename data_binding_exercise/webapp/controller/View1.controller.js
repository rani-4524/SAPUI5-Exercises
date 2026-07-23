sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("databindingexercise.controller.View1", {
        onInit() {
        },

        onSelect: function (oEvent) {

            var sKey = oEvent.getParameter("key");

            var oModel = this.getView().getModel("proddetails");

            var aProducts = oModel.getProperty("/products");

            for (var i = 0; i < aProducts.length; i++) {

                if (aProducts[i].ProdDetails.ProdId == sKey) {

                    oModel.setProperty("/selected", aProducts[i]);
                    break;
                }
            }
        }
    });
});