import React, { Component } from "react";
import { Stage, Layer, Image } from "react-konva";
import { getPrediction } from './azure-cognitiveservices-computervision';

class Canvas extends Component {
  state = {
    isDrawing: false,
  };

  componentDidMount() {
    const canvas = document.createElement("canvas");
    canvas.width = 450;
    canvas.height = 450;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    this.setState({ canvas, context });
  }

  handleMouseDown = () => {
    this.setState({ isDrawing: true });
    const stage = this.image.getStage();
    this.lastPointerPosition = stage.getPointerPosition();
  };

  handleMouseUp = () => {
    this.setState({ isDrawing: false });
  };

  handleMouseMove = ({ evt }) => {
    const { context, isDrawing } = this.state;

    if (isDrawing) {
      context.strokeStyle = "#000";
      context.lineJoin = "round";
      context.lineWidth = 5;
      context.globalCompositeOperation = "source-over";
      context.beginPath();

      var localPos = {
        x: this.lastPointerPosition.x - this.image.x(),
        y: this.lastPointerPosition.y - this.image.y()
      };
      context.moveTo(localPos.x, localPos.y);

      const stage = this.image.getStage();

      var pos = stage.getPointerPosition();
      localPos = {
        x: pos.x - this.image.x(),
        y: pos.y - this.image.y()
      };
      context.lineTo(localPos.x, localPos.y);
      context.closePath();
      context.stroke();
      this.lastPointerPosition = pos;
      this.image.getLayer().draw();
    }
  };

  handleTranslateClick = ({ evt }) => {
    const { canvas } = this.state;

    canvas.toBlob((blob) => {
      const reader = new FileReader();
      reader.addEventListener('loadend', () => {
        console.log(blob);
        this.translateLetter(blob);
      });
      reader.readAsArrayBuffer(blob);
    }, 'image/png');
  }

  handleClearClick = ({ evt }) => {
    const { context, canvas } = this.state;
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    this.image.getLayer().draw();
  }

  translateLetter(data) {
    // Call to Custom Vision
    var letter = "abc";
    getPrediction(data).then((item) => {
      console.log(item);
      this.props.onExport(item);
    });
    return letter;
  }

  render() {
    const { canvas } = this.state;

    var dims = 500;
    return (
      <div>
        <Stage width={dims} height={dims}>
          <Layer>
            <Image
              image={canvas}
              ref={node => (this.image = node)}
              width={dims}
              height={dims}
              stroke="black"
              onTouchStart={this.handleMouseDown}
              onTouchEnd={this.handleMouseUp}
              onTouchMove={this.handleMouseMove}
            />
          </Layer>
        </Stage>
        <button onClick={this.handleTranslateClick}>GetTranslation</button>
        <button onClick={this.handleClearClick}>Clear Canvas</button>
      </div>
    );
  }
}

export default Canvas;