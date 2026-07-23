sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("elementbindingexercise.controller.View1", {
        onInit() {
        },
        onItemSelected:function(oEvent){
            var oSelectedItem = oEvent.getSource();
            var oContext = oSelectedItem.getBindingContext("empdetails");
            var sPath = oContext.getPath();
            var oEmpDetailPanel = this.byId("empDetailsPanel");
            EmpDetailPanel.bindElement({path:sPath,model:"empdetails"});
        },

        /*  From this Exercise Start above code is for practice  */
        onPress:function(oEvent){
            var oItem = oEvent.getParameter("listItem");
            var sPath = oItem.getBindingContext("empdetails2").getPath();
            this.byId("_IDGenPanel2").bindElement({path:sPath,model:"empdetails2"});
        }
    });
});