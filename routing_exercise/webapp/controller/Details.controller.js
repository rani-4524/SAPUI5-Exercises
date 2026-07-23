sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("routingexercise.controller.Details", {

        onInit: function () {

            var oRouter = this.getOwnerComponent().getRouter();

            oRouter.getRoute("Details").attachPatternMatched(this._onObjectMatched, this);

        },

        _onObjectMatched: function (oEvent) {

            var sUser = oEvent.getParameter("arguments").userName;

            this.byId("idText").setText(sUser);

        },

        onHomePage: function () {

            var oRouter = this.getOwnerComponent().getRouter();

            oRouter.navTo("Home");

        }

    });

});