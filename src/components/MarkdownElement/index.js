import React, {Component, PropTypes} from 'react';
import marked from 'marked';

require('./mui-github-markdown.css');

const styles = {
  root: {
    marginTop: 20,
    marginBottom: 20,
    padding: '0 10px',
  },
};

class MarkdownElement extends Component {

  static propTypes = {
    style: PropTypes.object,
    text: PropTypes.string.isRequired,
  };

  static defaultProps = {
    text: '',
  };

  componentWillMount() {
    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
    });
  }

  render() {
    const {
      style,
      text,
      children,
    } = this.props;

    /* eslint-disable react/no-danger */

    let View = (props) => {
      return (
        <div style={ Object.assign({}, styles.root, style) }
          className="markdown-body"
          {...props}
        >{ props.children }</div>
      )
    }

    if (children) {
      return (<View>{children}</View>)
    }

    return (
      <View dangerouslySetInnerHTML={{__html: marked(text)}} />
    );

    /* eslint-enable */
  }
}

export default MarkdownElement;
