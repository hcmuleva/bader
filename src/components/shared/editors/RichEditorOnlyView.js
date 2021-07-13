import React from 'react';
import ReactQuill, { Quill } from 'react-quill';


// *** add your custom Blots to Quill
const Inline = Quill.import('blots/inline');

class CustomTag extends Inline {
  static blotName = 'custom-tag';
  static tagName = 'custom-tag';
}

Quill.register(CustomTag);

class RichEditorOnlyView extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }
  handleButtonClick() {
    maybeApplyFormat(this.refs.quillEditorRef.getEditor(), 'custom-tag');
  }
  render() {
    console.log("propps ", this.props)
    return (
      <div className="quill__editor-container">

        <ReactQuill
          className="my-quill"
          theme={null}
          ref="quillEditorRef"

          value={this.props.data}
          modules={modules}
          defaultValue={this.props.data}
          onChange={this.props.onChange}
        />
        <button onClick={()=>
        {this.props.setValue(this.props.data)
          this.props.setIsEdit(false)
        }
        }>Edit</button>
        {/*<CustomToolbar*/}
        {/*  handleButtonClick={this.handleButtonClick}*/}
        {/*/>*/}
      </div>
    );
  }
};

const CustomToolbar = ({ handleButtonClick }) => (
  <div id="toolbar" className="editor-toolbar">
    <div className="ql-insertCustomTag">
      <button onClick={handleButtonClick}>Save</button>
    </div>
  </div>
);

// checks the selected text has some length > 0 and applies the relevant formatting
const maybeApplyFormat = (quill, format) => {
  const sel = quill.getSelection();
  const length = sel ? sel.length : 0;
  const hasFormat = quill.getFormat()[format];
  if (length > 0) {
    quill.removeFormat(quill.getSelection());
    quill.format(format, !hasFormat);
  }
};

const modules = {
  toolbar: {
    container: '#toolbar',
  },
  clipboard: {
    matchVisual: false,
  },
};

export default RichEditorOnlyView;