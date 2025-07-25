sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      
        onShowHello: function () {
            //Read message from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView()
            .getModel()
            .getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            //Show message
            MessageToast.show(sMsg);
        },  
    });
  });
