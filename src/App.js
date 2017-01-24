import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MarkdownElement from './components/MarkdownElement';
import introMarkdown from './intro.md';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar title={document.title} showMenuIconButton={false} />
        <MarkdownElement text={introMarkdown} />
        <RaisedButton label="Default"/>
      </div>
    );
  }
}

export default App;
