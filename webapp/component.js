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
        rootView: {
          viewName: "sap.ui.demo.walkthrough.view.App",
          type: "XML",
          async: true,
          id: "app",
        },
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

        //Set i18n model on view
        var i18nModel = new ResourceModel({
          bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
          supportedLocales: [""],
          falbackLocale: "",
        });
        this.setModel(i18nModel, "i18n");
      },
    });
  }
);
