sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("fragmentexercise2.controller.View1", {
        onInit() {
        },

        onOpenDialog: function () {

            if (!this.dialog) {

                this.dialog = sap.ui.xmlfragment(
                    "fragmentexercise2.fragments.ProductDialog",
                    this
                );

                this.getView().addDependent(this.dialog);

                var oModel = this.getOwnerComponent().getModel("products");
                this.dialog.setModel(oModel, "products");
            }

            this.dialog.open();
        },

        onCloseDialog: function () {
            this.dialog.close();
        }
    });
});