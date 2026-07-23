sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("routingexercise.controller.Home", {

        onNextPage: function () {

            var sUser = this.byId("idInput").getValue();

            var oRouter = this.getOwnerComponent().getRouter();

            oRouter.navTo("Details", {
                userName: sUser
            });

        }

    });

});