import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MarkdownElement from './components/MarkdownElement';
import PronunciationWord from './components/PronunciationWord';
import introMarkdown from './intro.md';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar title={document.title} showMenuIconButton={false} />
        <MarkdownElement text={introMarkdown} />
        <PronunciationWord word="hello" ipa="hə'loʊ"/>
      </div>
    );
  }
}

export default App;
