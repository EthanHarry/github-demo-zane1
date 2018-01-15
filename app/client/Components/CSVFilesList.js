import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

var CSVFilesList = (props) => {

  var textStyle = {color: props.muiTheme.palette.primary1Color}

  var listItemStyle = {color: props.muiTheme.palette.primary1Color, padding: '0px'}

  if (props.csvFiles.length) {
    return (
      <List id='CSVFilesList'>
        {props.csvFiles.map((csvFile) => {
          return (
            <div>
              <ListItem style={listItemStyle} key={csvFile} primaryText={csvFile} />
              <Divider />
            </div>
          )
        })}
      </List>
    )
  }
  else {
    return <h3 id='CSVFilesList' style={textStyle}></h3> // Figure out if I want to say anything
  }
}

export default CSVFilesList;