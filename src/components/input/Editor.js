import React, { Component } from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Editor as DraftEditor } from "react-draft-wysiwyg";
import classname from "classname";
import { stateFromHTML } from "draft-js-import-html";
import InputBlock from "./InputBlock";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: this.htmlValue(props.value),
    };
  }

  changeHandler = (editorState) => {
    const { onChange, name } = this.props;
    const value = draftToHtml(convertToRaw(editorState.getCurrentContent()));

    this.setState({
      editorState,
    });

    onChange(name, value);
  };

  componentWillReceiveProps(newProps) {
    if (this.props.value === "") {
      this.setState({
        editorState: this.htmlValue(newProps.value),
      });
    }
  }

  htmlValue(data) {
    return EditorState.createWithContent(stateFromHTML(data));
  }

  render() {
    const { className, onChange, label, name, ...props } = this.props;
    const { editorState } = this.state;
    const classComponent = classname("editor", className);

    return (
      <InputBlock label={label} name={name} {...props}>
        <div className={classComponent}>
          <DraftEditor
            {...props}
            editorState={editorState}
            onEditorStateChange={this.changeHandler}
            toolbar={{
              inline: { inDropdown: true },
              textAlign: { inDropdown: false },
              link: { inDropdown: true },
            }}
          />
        </div>
      </InputBlock>
    );
  }
}

export default Editor;
