import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar title={document.title} showMenuIconButton={false} />
        <RaisedButton label="Default"/>
      </div>
    );
  }
}

export default App;
