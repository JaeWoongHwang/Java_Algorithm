sap.ui.jsview("ui5_edu.ui5_edu", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf ui5_edu.ui5_edu
	 */
	getControllerName : function() {
		return "ui5_edu.ui5_edu";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf ui5_edu.ui5_edu
	 */
	createContent : function(oController) {
//		var oModel = new sap.ui.model.json.JSONModel({
//			"ScarrSet" : [
//			      {"Carrid" : "AA", "Carrname" : "American Airlines", "Currcode" : "USD", "Url" : "http://www.aa.com" },
//			      {"Carrid" : "AB", "Carrname" : "Air Berlin", "Currcode" : "EUR", "Url" : "http://www.airberlin.de" },
//			      {"Carrid" : "AC", "Carrname" : "Air Canada", "Currcode" : "CAD", "Url" : "http://www.aircanada.ca" },
//			      {"Carrid" : "AF", "Carrname" : "Air France", "Currcode" : "EUR", "Url" : "http://www.airfrance.fr" },
//			      {"Carrid" : "AZ", "Carrname" : "Alitalia", "Currcode" : "EUR", "Url" : "http://www.alitalia.it" },
//			      {"Carrid" : "BA", "Carrname" : "British Airways", "Currcode" : "GBP", "Url" : "http://www.british-airways.com" },
//			      {"Carrid" : "CO", "Carrname" : "Continental Airlines", "Currcode" : "USD", "Url" : "http://www.continental.com" },
//			      {"Carrid" : "DL", "Carrname" : "Delta Airlines", "Currcode" : "USD", "Url" : "http://www.delta-air.com" },
//			      {"Carrid" : "FJ", "Carrname" : "Air Pacific", "Currcode" : "USD", "Url" : "http://www.airpacific.com" },
//			      {"Carrid" : "JL", "Carrname" : "Japan Airlines", "Currcode" : "JPY", "Url" : "http://www.jal.co.jp" },
//			      {"Carrid" : "LH", "Carrname" : "Lufthansa", "Currcode" : "EUR", "Url" : "http://www.lufthansa.com" },
//			      {"Carrid" : "NG", "Carrname" : "Lauda Air", "Currcode" : "EUR", "Url" : "http://www.laudaair.com" },
//			      {"Carrid" : "NW", "Carrname" : "Northwest Airlines", "Currcode" : "USD", "Url" : "http://www.nwa.com" },
//			      {"Carrid" : "QF", "Carrname" : "Qantas Airways", "Currcode" : "AUD", "Url" : "http://www.qantas.com.au" },
//			      {"Carrid" : "SA", "Carrname" : "South African Air.", "Currcode" : "ZAR", "Url" : "http://www.saa.co.za" },
//			      {"Carrid" : "SQ", "Carrname" : "Singapore Airlines", "Currcode" : "SGD", "Url" : "http://www.singaporeair.com" },
//			      {"Carrid" : "SR", "Carrname" : "Swiss", "Currcode" : "CHF", "Url" : "http://www.swiss.com" },
//			      {"Carrid" : "UA", "Carrname" : "United Airlines", "Currcode" : "USD", "Url" : "http://www.ual.com" }
//			    ]
//			});
//		
//		var oTable = new sap.ui.table.Table({
//		      title: " Scarr Table ",
//		      visibleRowCount: 8,
//		      selectionMode: sap.ui.table.SelectionMode.Single,
//		      navigationMode: sap.ui.table.NavigationMode.Paginator,
//		      fixedColumnCount: 2,
//		      width: "1000px"
//		});
//		
//		oTable.addColumn(new sap.ui.table.Column({
//		     label: new sap.ui.commons.Label({text: "항공사ID"}),
//		     template: new sap.ui.commons.TextView().bindProperty("text","Carrid"),
//		     sortProperty: "Carrid",
//		     filterProperty: "Carrid",
//		     width: "100px"
//		}));
//		
//		oTable.addColumn(new sap.ui.table.Column({
//		     label: new sap.ui.commons.Label({text: "항공사이름"}),
//		     template: new sap.ui.commons.TextView().bindProperty("text","Carrname"),
//		     sortProperty: "Carrname",
//		     filterProperty: "Carrname",
//		     width: "100px"
//		}));
//		
//		oTable.addColumn(new sap.ui.table.Column({
//		     label: new sap.ui.commons.Label({text: "통화유형"}),
//		     template: new sap.ui.commons.TextView().bindProperty("text","Currcode"),
//		     sortProperty: "Currcode",
//		     filterProperty: "Currcode",
//		     width: "100px"
//		}));
//		
//		oTable.addColumn(new sap.ui.table.Column({
//		     label: new sap.ui.commons.Label({text: "URL"}),
//		     template: new sap.ui.commons.TextView().bindProperty("text","Url"),
//		     sortProperty: "Url",
//		     filterProperty: "Url",
//		     width: "200px"
//		}));
//		
//	   oTable.bindRows("/ScarrSet");
//	   oTable.setModel(oModel);
//	   
//	   var oShell = new sap.ui.ux3.Shell({
//		     appTitle : "Test Shell",
//		     showSearchTool : false,
//		     showFeederTool : false,
//		     worksetItems : [
//		        new sap.ui.ux3.NavigationItem("oNavItem1", {key: "Nav_1", text: "Table"})
//		     ],
//		     content: oTable,
//		});
//		
//		return oShell;
//	 
//-------------Sflight table-------------------------------------------------------
//		var oModel = new sap.ui.model.json.JSONModel({
//			"SflightSet" : [
//			      {"Carrid" : "AA", "Connid" : "0017", "Fldate" : "\/Date(1268179200000)\/", "Price" : "422.94",
//			       "Currency" : "USD","Planetype" : "747-400", "Seatsmax" : 385, "Seatsocc" : 0, "Paymentsum" : "0.00",
//			       "SeatsmaxB" : 31, "SeatsoccB" : 0, "SeatsmaxF" : 21, "SeatsoccF" : 0},
//			      {"Carrid" : "AZ", "Connid" : "0555", "Fldate" : "\/Date(1268179200000)\/", "Price" : "185.00",
//			       "Currency" : "EUR", "Planetype" : "A319", "Seatsmax" : 220, "Seatsocc" : 15, "Paymentsum" : "3777.70",
//			       "SeatsmaxB" : 22, "SeatsoccB" : 2, "SeatsmaxF" : 10, "SeatsoccF" : 1},
//			      {"Carrid" : "AZ", "Connid" : "0789", "Fldate" : "\/Date(1268179200000)\/", "Price" : "1030.00",
//			       "Currency" : "EUR", "Planetype" : "DC-10-10", "Seatsmax" : 380, "Seatsocc" : 19, "Paymentsum" : "24668.50",
//			       "SeatsmaxB" : 41, "SeatsoccB" : 2, "SeatsmaxF" : 18, "SeatsoccF" : 1},
//			      {"Carrid" : "AZ", "Connid" : "0790", "Fldate" : "\/Date(1268179200000)\/", "Price" : "1014.00",
//			       "Currency" : "EUR", "Planetype" : "747-400", "Seatsmax" : 385, "Seatsocc" : 44, "Paymentsum" : "58071.78",
//			       "SeatsmaxB" : 31, "SeatsoccB" : 4, "SeatsmaxF" : 21, "SeatsoccF" : 3},
//			      {"Carrid" : "QF", "Connid" : "0006", "Fldate" : "\/Date(1268179200000)\/", "Price" : "788.64",
//			       "Currency" : "AUD", "Planetype" : "A319", "Seatsmax" : 220, "Seatsocc" : 25, "Paymentsum" : "24881.62",
//			       "SeatsmaxB" : 22, "SeatsoccB" : 3, "SeatsmaxF" : 10, "SeatsoccF" : 1},
//			      {"Carrid" : "SQ", "Connid" : "0015", "Fldate" : "\/Date(1268179200000)\/", "Price" : "2320.04",
//			       "Currency" : "SGD", "Planetype" : "DC-10-10", "Seatsmax" : 380, "Seatsocc" : 16, "Paymentsum" : "49300.85",
//			       "SeatsmaxB" : 41, "SeatsoccB" : 2, "SeatsmaxF" : 18, "SeatsoccF" : 1}
//			    ]
//			});
		
		var oTable = new sap.ui.table.Table({
	      title: " ZTEDU24 Table ",
	      visibleRowCount: 8,
	      selectionMode: sap.ui.table.SelectionMode.Single,
	      navigationMode: sap.ui.table.NavigationMode.Paginator,
	      fixedColumnCount: 3,
	      width: "1000px"
	});

		oTable.addColumn(new sap.ui.table.Column({
		     label: new sap.ui.commons.Label({text: "회계년도"}),
		     template: new sap.ui.commons.TextView().bindProperty("text","Gjahr"),
		     sortProperty: "Gjahr",
		     filterProperty: "Gjahr",
		     width: "100px"
		}));
		
		oTable.addColumn(new sap.ui.table.Column({
		     label: new sap.ui.commons.Label({text: "회사코드"}),
		     template: new sap.ui.commons.TextView().bindProperty("text","Bukrs"),
		     sortProperty: "Bukrs",
		     filterProperty: "Bukrs",
		     width: "100px"
		}));
		
		oTable.addColumn(new sap.ui.table.Column({
		     label: new sap.ui.commons.Label({text: "자재문서번호"}),
		     template: new sap.ui.commons.TextView().bindProperty("text","Belnr"),
		     sortProperty: "Belnr",
		     filterProperty: "Belnr",
		     width: "100px"
		}));
		
		oTable.addColumn(new sap.ui.table.Column({
		     label: new sap.ui.commons.Label({text: "로컬금액"}),
		     template: new sap.ui.commons.TextView().bindProperty("text","Dmbtr"),
		     sortProperty: "Dmbtr",
		     filterProperty: "Dmbtr",
		     width: "100px"
		}));
		
		oTable.addColumn(new sap.ui.table.Column({
		     label: new sap.ui.commons.Label({text: "통화키"}),
		     template: new sap.ui.commons.TextView().bindProperty("text","Waers"),
		     sortProperty: "Waers",
		     filterProperty: "Waers",
		     width: "100px"
		}));
		
//		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
//	    dimensions : [
//	        { axis : 1, name : '회사코드', value : "{Bukrs}" } 
//	    ],
//	    measures : [ 
//	        { name : '금액', value : '{Dmbtr}' } 
//	    ],
//	    data : {
//	        path : "/ZTEDU_24Set",
//	        filters: [
////	               new sap.ui.model.Filter("Fldate",sap.ui.model.FilterOperator.EQ,"2010-03-10")
//	        ]
//	    }
//	});
		
//		var oChart = new sap.viz.ui5.Donut({
//		    width : "80%",
//		    height : "400px",
//		    title : {
//		        visible : true,
//		        text : 'Company Code Chart'
//		    },
//		});
		
		oTable.bindRows("/ZTEDU_24Set");
        oTable.setModel(oModel);	
//		oChart.setDataset(oDataset);
//		oChart.setModel(oModel);
		return oTable;
		
		
	}
	

	
});
