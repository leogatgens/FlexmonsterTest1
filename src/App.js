import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as FlexmonsterReact from 'react-flexmonster';
import PivotTable from './PivotTable';
class App extends Component {

  render(){
    return (
        <Router>
          <Route path="/" component={PivotTable} exact/>
          
        </Router>

    );
  }

}

export default App;
