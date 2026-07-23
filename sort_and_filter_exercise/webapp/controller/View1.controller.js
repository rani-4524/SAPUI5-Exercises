sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Sorter",
    "sap/ui/model/Filter"
], (Controller, Sorter, Filter) => {
    "use strict";

    return Controller.extend("sortandfilterexercise.controller.View1", {
        onInit() {
        },
        onFilterClick: function () {

            this.dialogs = new sap.ui.xmlfragment("sortandfilterexercise.fragments.FilterDialog", this);

            this.dialogs.open();

        },
        onSortClick: function () {

            this.dialogs = new sap.ui.xmlfragment("sortandfilterexercise.fragments.SortDialog", this);

            this.dialogs.open();

        },
        handleSortDialogConfirm: function (oEvent) {

            var oTable = this.byId("idTable"),

                mParams = oEvent.getParameters(),

                oBinding = oTable.getBinding("items"),

                sPath,

                bDescending,

                aSorters = [];

            sPath = mParams.sortItem.getKey();

            bDescending = mParams.sortDescending;

            aSorters.push(new Sorter(sPath, bDescending));

            oBinding.sort(aSorters);

        },
        handleFilterDialogConfirm: function (oEvent) {

            var oTable = this.byId("idTable"),

                mParams = oEvent.getParameters(),

                oBinding = oTable.getBinding("items"),

                aFilters = [];

            mParams.filterItems.forEach(function (oItem) {

                //  window.globalVariable = oItem.getKey().split("___");

                var aSplit = oItem.getKey().split("___"),

                    sPath = aSplit[0],

                    sOperator = aSplit[1],

                    sValue1 = aSplit[2],

                    oFilter = new Filter(sPath, sOperator, sValue1);

                aFilters.push(oFilter);

            });
            oBinding.filter(aFilters);

        }
    });
});