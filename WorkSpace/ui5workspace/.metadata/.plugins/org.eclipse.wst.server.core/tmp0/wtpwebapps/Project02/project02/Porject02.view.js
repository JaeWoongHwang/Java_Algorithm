//구성된 Model을 Binding하는 역할
sap.ui.jsview("project02.Porject02", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf project02.Porject02
	*/ 
	getControllerName : function() {
		return "project02.Porject02";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf project02.Porject02
	*/ 
	createContent : function(oController) {

		var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			width : '300px',
			columns : 3
		});

		oMatrix.createRow(new sap.ui.commons.Button({
			text : "Create",
			width : "100px",
			press : function() {
				oController.create();
			}
		}),

		new sap.ui.commons.Button({
			text : "Edit",
			width : "100px",
			press : function() {
				oController.edit();
			}
		}),

		new sap.ui.commons.Button({
			text : "Delete",
			width : "100px",
			press : function() {
				oController.remove();
			}
		})

		);

		// Table
		var oTable = new sap.ui.table.Table("itab1", {
			visibleRowCount : 10
		});

		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "사번"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Sabun")
		}));

		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "성명"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Name")
		}));

		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "핸드폰"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Mobile")
		}));

		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "성별"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Gender")
		}));

		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "지역"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Area")
		}));

		oTable.bindRows("/ZTUI524Set");

		var oform = new sap.ui.layout.form.SimpleForm("form1", {
			title : "Data Maintainance",
			content : [ new sap.ui.commons.Label({
				text : "사번"
			}), new sap.ui.commons.TextField("Sabun", {
				width : "200px"
			}),

			new sap.ui.commons.Label({
				text : "성명"
			}), new sap.ui.commons.TextField("Name", {
				width : "200px"
			}),

			new sap.ui.commons.Label({
				text : "핸드폰"
			}), new sap.ui.commons.TextField("Mobile", {
				width : "200px"
			}),

			new sap.ui.commons.Label({
				text : "성별"
			}), new sap.ui.commons.TextField("Gender", {
				width : "200px"
			}),

			new sap.ui.commons.Label({
				text : "지역"
			}), new sap.ui.commons.TextField("Area", {
				width : "200px"
			}),

			new sap.ui.commons.Label({
				text : ""
			}), new sap.ui.commons.Button({
				text : "Save",
				width : "100px",
				press : function() {
					oController.save();
				}
			}) ]
		});

		var ele = [ oMatrix, oTable, oform ];

		return ele;

	}

});
