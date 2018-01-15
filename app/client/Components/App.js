import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import ConvertToCSV from './ConvertToCSV';
import MapCSVKeys from './MapCSVKeys';


class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider >
        <div id='componentContainer'>
          <ConvertToCSV muiTheme={getMuiTheme()} />
          <MapCSVKeys muiTheme={getMuiTheme()} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
