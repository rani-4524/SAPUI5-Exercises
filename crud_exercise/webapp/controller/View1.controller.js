sap.ui.define([
    "sap/ui/core/mvc/Controller",

], (Controller) => {
    "use strict";

    return Controller.extend("crudexercise.controller.View1", {
        onInit: function () {


        },
        readEmployee: function () {

            var oModel = new sap.ui.model.odata.v2.ODataModel(
                "https://services.odata.org/V2/Northwind/Northwind.svc/"
            );

            oModel.read("/Employees", {
                success: function () {
                    sap.m.MessageToast.show("Employees Loaded Successfully");
                },
                error: function () {
                    sap.m.MessageToast.show("Error while loading Employees");
                }
            });

            this.getView().byId("idEmployeesTable").setModel(oModel);

        },
        readSingleEmployee: function () {

            var oModel = this.getView().getModel();

            var empId = this.getView().byId("id1").getValue();

            if (!empId) {
                sap.m.MessageToast.show("Please enter Employee ID");
                return;
            }

            oModel.read("/Employees(" + empId + ")", {

                success: function (oData) {

                    this.getView().byId("id2").setValue(oData.FirstName);
                    this.getView().byId("id3").setValue(oData.LastName);
                    this.getView().byId("id4").setValue(oData.Title);

                    sap.m.MessageToast.show("Employee Found");

                }.bind(this),

                error: function () {
                    sap.m.MessageToast.show("Employee Not Found");
                }

            });

        }
    });
});