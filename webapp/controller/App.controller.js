sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, MessageToast, JSONModel) {
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
      },

      onShowHello: function () {
        MessageToast.show(
          //Show a messagetoast
          "Hola, vamos progresando"
        );
      },
    });
  }
);
