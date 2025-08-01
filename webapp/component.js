sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (UIComponent, JSONModel, ResourceModel) {
    "use strict";
    return UIComponent.extend("sap.ui.walkthrough.Component", {
      metadata: {
        manifest: "json",
      },

      init: function () {
        //Call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);
        //Set data models
        var oData = {
          recipient: {
            name: "Estudiante",
          },
        };

        //Creamos el modelo con esos datos
        var oModel = new JSONModel(oData);

        //Asignamos el modelo a la vista
        this.setModel(oModel);
      },
    });
  }
);
