import React from 'react';
import Upload from 'material-ui-upload/Upload';
import FilesToBeConvertedList from './FilesToBeConvertedList';
import CSVFilesList from './CSVFilesList';

class ConvertToCSV extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      filesToBeConverted: [],
      csvFiles: []
    }

    this.headerStyle = {color: this.props.muiTheme.palette.primary1Color};

    this.uploaderStyle = {
      color: this.props.muiTheme.palette.primary1Color,
      border: '2px purple solid'
    }

    this.onFileLoad = this.onFileLoad.bind(this);
  }

  onFileLoad(e,file) {
    console.log(file.name)
    var filesToBeConvertedList = this.state.filesToBeConverted.slice();
    filesToBeConvertedList.push(file.name);
    this.setState({filesToBeConverted: filesToBeConvertedList})
  }

  render() {
    console.log(this.props.muiTheme.palette)
    return (
      <div>
        <h1 style={this.headerStyle}> Convert to CSV </h1>
        <div id='convertToCSVParentContainer'>
          <div id='convertToCSVPreUploadContainer'>
            <Upload style={this.uploaderStyle} label='Upload file(s)' onFileLoad={this.onFileLoad} />
            <h3 style={this.headerStyle}> Files to be converted </h3>
            <FilesToBeConvertedList muiTheme={this.props.muiTheme} filesToBeConverted={this.state.filesToBeConverted}/>
          </div>
          <div id='convertToCSVPostUploadContainer'>
            <h3 style={this.headerStyle}> CSV Files </h3>
            <CSVFilesList muiTheme={this.props.muiTheme} csvFiles={this.state.csvFiles}/>
          </div>
        </div>
      </div>
    )
  }
}

export default ConvertToCSV;