import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

function playSound(url){
  var audio = document.createElement('audio');
  audio.style.display = "none";
  audio.src = url;
  audio.autoplay = true;
  audio.onended = function(){
    audio.remove()
  };
  document.body.appendChild(audio);
}

class MarkdownElement extends Component {

  static propTypes = {
    word: PropTypes.string.isRequired,
    ipa: PropTypes.string.isRequired,
  };

  handleClicked() {
    const {
      word,
    } = this.props;

    let pronunciation = process.env.PUBLIC_URL + '/pronunciations/'
      + word + '.mp3'

    playSound(pronunciation)
  }

  render() {
    const {
      word,
      ipa,
    } = this.props;

    let labelStyle = { textTransform: 'none', }
      , style = { margin: 12, }
      , label = word + ' /' + ipa + '/'

    return (
      <RaisedButton
        labelStyle={labelStyle}
        style={style}
        label={label} onClick={this.handleClicked.bind(this)} />
    );
  }
}

export default MarkdownElement;
