import React, { PureComponent } from "react";
import classname from "classname";
import ReactDropzone from "react-dropzone";
import { isEmpty } from "lodash";

class Dropzone extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imageBase64: props.value,
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      imageBase64: newProps.value,
    });
  }

  onDropHandler = (files) => {
    // Refact - need to implement this
  };

  render() {
    // Refact - need to implement this
    const { imageBase64 } = this.state;
    const { className, onDrop, style, ...props } = this.props;
    const classComponent = classname("dropzone", className, {
      "dropzone--filled": !isEmpty(imageBase64),
    });

    return (
      <ReactDropzone className={classComponent} style={style}>
        <i className="icon icon-photo" />
      </ReactDropzone>
    );
  }
}

export default Dropzone;
