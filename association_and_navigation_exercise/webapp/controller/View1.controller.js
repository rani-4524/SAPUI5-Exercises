sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/Device",
    "sap/base/Log",
    "sap/m/MessageToast"
], (Controller ,Device,Log,MessageToast) => {
    "use strict";

    return Controller.extend("associationandnavigationexercise.controller.View1", {
        onInit() {
            this.getSplitAppObj().setHomeIcon({

                'phone': 'phone-icon.png',

                'tablet': 'tablet-icon.png',

                'icon': 'desktop.ico'

            });

            Device.orientation.attachHandler(this.onOrientationChange, this);
        },


        getSplitAppObj: function () {

            var result = this.byId("SplitAppDemo");

            if (!result) {

                Log.info("SplitApp object can't be found");

            }

            return result;

        },

        onExit: function () {

            Device.orientation.detachHandler(this.onOrientationChange, this);

        },



        onOrientationChange: function (mParams) {

            var sMsg = "Orientation now is: " + (mParams.landscape ? "Landscape" : "Portrait");

            MessageToast.show(sMsg, {

                duration: 5000

            });

        },



        onPressNavToDetail: function () {

            this.getSplitAppObj().to(this.createId("detailDetail"));

        },



        onPressDetailBack: function () {

            this.getSplitAppObj().backDetail();

        },



        onPressMasterBack: function () {

            this.getSplitAppObj().backMaster();

            //this.getSplitAppObj().backDetail2();

        },



        onPressGoToMaster: function () {

            this.getSplitAppObj().toMaster(this.createId("master2"));

        },



        onListItemPress: function (oEvent) {

            var oDetailPage = this.getSplitAppObj().getDetailPages()[0];

            var sPath = oEvent.getSource().getBindingContextPath();

            oDetailPage.bindElement({

                path: sPath

            });

            this.getSplitAppObj().to(oDetailPage.getId());

            //debugger;

            //this.getSplitAppObj().toDetail(this.createId(oDetailPage));

            //debugger;

            //var oApp = this.getView().getParent().getParent();

            // var page_id = oDetailPage.getId();

            // debugger;

            //oApp.to(page_id);

            //var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();



            //this.getSplitAppObj().toDetail(this.createId(oDetailPage));

        },



        onPressModeBtn: function (oEvent) {

            var sSplitAppMode = oEvent.getSource().getSelectedButton().getCustomData()[0].getValue();



            this.getSplitAppObj().setMode(sSplitAppMode);

            MessageToast.show("Split Container mode is changed to: " + sSplitAppMode, {

                duration: 5000

            });
        }
    });
});