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
      onInit: function () {
        //1. Creamos un objeto JSON
        var oData = {
          recipient: {
            name: "Estudiante",
          },
        };

        //2. Creamos el modelo con esos datos
        var oModel = new JSONModel(oData);

        //3. Asignamos el modelo a la vista
        this.getView().setModel(oModel);

        //Set i18n model on view
        var i18nModel = new ResourceModel({
          bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
          supportedLocales: [""],
          falbackLocale: "",
        });
        this.getView().setModel(i18nModel, "i18n");
      },

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
  }
);
