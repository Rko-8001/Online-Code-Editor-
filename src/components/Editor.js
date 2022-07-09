import React, { useState } from 'react';  //importing useState from react lib
import 'codemirror/lib/codemirror.css';   //importing codemirror editor for css 
import 'codemirror/theme/material.css';   //importing codemirror editor for css
import 'codemirror/mode/xml/xml';         //importing codemirror editor for html
import 'codemirror/mode/javascript/javascript'; //importing codemirror editor for js
import 'codemirror/mode/css/css';         //importing codemirror editor for css
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //importing icon from fontawesome lib
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import "./Editor.css";    //importing sytling from Editor.css

function Editor(props) {
  const {
    language,
    displayName,
    value,
    onChange
  } = props
  const [open, setOpen] = useState(true)

  function handleChange(editor, data, value) {
    onChange(value)
  }

  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen(prevOpen => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true
        }}
      />
    </div>
  )
}

export default Editor;