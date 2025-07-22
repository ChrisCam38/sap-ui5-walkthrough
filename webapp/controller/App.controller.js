sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onShowHello: function () {
        MessageToast.show("Hola desde el controlador");
      },

      onShowBye: function(){
        alert("Adios desde el controller");
      }
    });
  }
);
