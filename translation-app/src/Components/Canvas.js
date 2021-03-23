import React, { Component } from "react";
import { Stage, Layer, Image } from "react-konva";

class Canvas extends Component {
  state = {
    isDrawing: false,
  };

  componentDidMount() {
    const canvas = document.createElement("canvas");
    canvas.width = 450;
    canvas.height = 450;
    const context = canvas.getContext("2d");

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

  handleTranslateClick = ({evt}) => {
    const stage = this.image.getStage();
    var dataURL = stage.toDataURL({ pixelRatio: 1 });
    var letter = translateLetter(dataURL);
    this.props.onExport(letter);
  }

  handleClearClick = ({evt}) => {
    const { context, canvas } = this.state;
    context.clearRect(0, 0, canvas.width, canvas.height);
    this.image.getLayer().draw();
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

function translateLetter() {
  // Call to Custom Vision
  return 'E';
}

export default Canvas;