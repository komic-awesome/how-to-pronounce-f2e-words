import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MarkdownElement from './components/MarkdownElement';
import WordList from './generated-components/WordList';
import introMarkdown from './intro.md';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div>
        <AppBar title={document.title} showMenuIconButton={false} />
        <MarkdownElement text={introMarkdown} />
        <MarkdownElement>
          <WordList />
        </MarkdownElement>
      </div>
    );
  }
}

export default App;
