import React from 'react';
import Canvas from './Canvas'
import { isCustomVisionConfigured } from './azure-cognitiveservices-computervision';

class Translator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClearAllClick = this.handleClearAllClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleWordCompleteClick = this.handleWordCompleteClick.bind(this);
    this.state = {
      translation: ''
    }
  }

  handleChange(letter) {
    this.setState({ translation: this.state.translation + letter });
  }

  handleClearAllClick() {
    this.setState({ translation: '' });
  }

  handleDeleteClick() {
    this.setState({ translation: this.state.translation.slice(0, -1) });
  }

  handleWordCompleteClick(letter) {
    this.setState({ translation: this.state.translation + ' ' });
  }


  render() {
    const ready = isCustomVisionConfigured();
    if (ready) {
      const translation = this.state.translation;

      return (
        <div>
          <Canvas onExport={this.handleChange}></Canvas>

          <textarea value={translation} rows={3} />
          <button onClick={this.handleWordCompleteClick}>Add Space</button>
          <button onClick={this.handleDeleteClick}>Clear Last Letter</button>
          <button onClick={this.handleClearAllClick}>Clear All</button>
        </div>
      );
    }
    else {
      return (<h1>Custom vision is not configured.</h1>);
    }
  }
}
export default Translator;