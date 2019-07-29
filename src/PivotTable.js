import React, { Component } from "react";
import * as FlexmonsterReact from "react-flexmonster";
import FormDialog from "./FormAjuste";



class PivotTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abrir: false
    };
    console.log(this);
    
  }
  

  handleClickOpen = () => {
    this.setState({ abrir: true });
  };

  handleClose = () => {
    this.setState({ abrir: false });
  };

  customizeToolbar = (toolbar) => {
    // get all tabs
    var tabs = toolbar.getTabs();
    this.AddAjusteTab(toolbar, tabs);
  };

  AddAjusteTab = (toolbar, tabs) => {    
    let opcionAjustar={
      id: "fm-tab-ajustar",
      title: "Ajustar",
      handler: this.handleClickOpen,
      icon: null//this.icons.open
    }
    
    toolbar.getTabs = function() {//Si no se utiliza function se pierde protypes y se pierden iconos            
      delete tabs[0];
      tabs.splice(2,0,{...opcionAjustar, icon : this.icons.open });
      return tabs;
    };    
  }



  render() {
    let datasourceCustom = {
      dataSourceType: "ocsv",
      filename: "http://localhost:55772/api/Flexmonster/Get"
    };
    return (
      <div className="App">
        <FlexmonsterReact.Pivot
          toolbar={true}
          beforetoolbarcreated={this.customizeToolbar}
          width="100%"
          report={datasourceCustom}
          ready={this.onFlexmonsterReady}
          reportcomplete={this.onReportComplete}
          reportchange={this.onReportChange}
          update={this.onUpdate}
          cellclick={this.onCellClick}
          celldoubleclick={this.onCellDoubleClick}
          filteropen={this.onFilterOpen}
          fieldslistopen={this.onFieldsListOpen}
          fieldslistclose={this.onFieldsListClose}
        />
        <FormDialog
          open={this.state.abrir}
          handleClose={this.handleClose}
          handleClickOpen={this.handleClickOpen}
        />
      </div>
    );
  }
  onReportComplete = () => {
    console.log("[reportcomplete]");
  };
  onReportChange = () => {
    console.log("[reportchange]");
  };
  onUpdate = () => {
    console.log("[update]");
  };
  onCellClick = cell => {
    console.log("[cellclick]", cell);
  };
  onCellDoubleClick = cell => {
    console.log("[celldoubleclick]", cell);
  };
  onFilterOpen = params => {
    console.log("[filteropen]", params);
  };
  onFieldsListOpen = () => {
    console.log("[fieldslistopen]");
  };
  onFieldsListClose = () => {
    console.log("[fieldslistclose]");
  };
}

export default PivotTable;
