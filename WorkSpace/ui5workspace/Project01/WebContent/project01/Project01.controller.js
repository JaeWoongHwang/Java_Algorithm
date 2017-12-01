sap.ui.controller("project01.Project01", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf project01.Project01
*/
	create: function(){
		mode = "create";
		$("#form1").slideDown();	// JQUERY 기능
	},

	save: function(key){
		sap.ui.getCore().setModel(oModel);
		oModel.setHeaders({"X-Requested-With": "XMLHttpRequest",    //mandatory
			                 "Content-Type": "application/atom+xml",
			                 "DataServiceVersion": "2.0",
			                 "X-CSRF-Token": "Fetch"});
			
		var newData = {
			"Sabun": $("#Sabun").val(),
			"Name": $("#Name").val(),
			"Mobile": $("#Mobile").val(),
			"Gender": $("#Gender").val(),
			"Area": $("#Area").val()
		}
		
		if(mode == 'create'){
			oModel.create('/ZTUI524Set',
				newData,
				null,
				function(){
					sap.ui.getCore().getModel().refresh();
		          			$("#form1").slideUp();
				},function(){
					alert("Create failed");
				}
		        );
		}else if(mode == 'edit'){
			oModel.update("/ZTUI524Set(Sabun='"+newData.Sabun+"')",
					newData,
					null,
					function(){
						sap.ui.getCore().getModel().refresh();
					             	$("#form1").slideUp();
					},function(){
						alert("Update failed");
					});
		}else if(mode == 'delete'){
			oModel.remove("/ZTUI524Set(Sabun='"+key+"')",
					newData,
					null,
					function(){
					sap.ui.getCore().getModel().refresh();
					},function(){
						alert("Delete failed");
					});
			}

	},
	
edit: function() {
		
		mode = 'edit';
		
		var oTable = sap.ui.getCore().byId("itab1");
		var sel_idx = oTable.getSelectedIndex();
		
		var rows = oTable.getRows();
		var cols = rows[sel_idx].getCells();
		
		$("#form1").slideDown(function(){
			$("#Sabun").val(cols[0].getText());
			$("#Name").val(cols[1].getText());
			$("#Mobile").val(cols[2].getText());
			$("#Gender").val(cols[3].getText());
			$("#Area").val(cols[4].getText());
		});
		
},

remove: function() {
	
	mode = 'delete';
	
	var oTable = sap.ui.getCore().byId("itab1");
	var sel_idx = oTable.getSelectedIndex();
	
	var rows = oTable.getRows();
	var cols  = rows[sel_idx].getCells();

	this.save(cols[0].getText());
},


/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf project01.Project01
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf project01.Project01
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf project01.Project01
*/
//	onExit: function() {
//
//	}

});