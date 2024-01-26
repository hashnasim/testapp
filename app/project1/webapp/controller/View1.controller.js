sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {

            },

    remove: function () {
        const oSelected = oEvent.getSource();
        oSelected.getBindingContext("CatalogModel").delete("$auto")
        .then(function () {
        const oI18nBundle =
        this.getOwnerComponent().getModel("i18n").getResourceBun
        dle();
        this.editTaskDialog.close();
        sap.m.MessageToast.show(
        oI18nBundle.getText("deletionSuccessMessage"));
        }.bind(this),
        function (oError) {
        this.editTaskDialog.close();
        sap.m.MessageBox.error(oError.message);
        }.bind(this));
        
    },

    randomName: function () {
        const oNewTask = oNewTaskModel.getData();
const oList = this.byId("MainTaskList");
const oBinding = oList.getBinding("items");
const oContext = oBinding.create(oNewTask);
this.getView().getModel("CatalogModel").submitBatch("taskGroup");

    }

        });
    });
