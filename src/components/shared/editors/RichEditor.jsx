import React from 'react'
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from '@taoqf/quill-image-resize-module';
import { ImageDrop } from 'quill-image-drop-module';

Quill.register('modules/imageResize', ImageResize);
Quill.register('modules/imageDrop', ImageDrop);

let toolbarOptions = [
  ['omega', 'bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['link', 'image', 'video'],
  ['clean'],
];

const modules = {
  imageResize: {
    displaySize: true
  },
  imageDrop: true,
  toolbar: {
    container: toolbarOptions,
    handlers: {
      omega: () => {
        const element = document.getElementById('react-quill-editor');
        var isFullScreen = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || (document.msFullscreenElement != null);
        if (element) {
          if(!isFullScreen) {
            element.classList.add("isFullScreen");
            if (element.requestFullscreen)
              element.requestFullscreen();
            else if (element.mozRequestFullScreen)
              element.mozRequestFullScreen();
            else if (element.webkitRequestFullscreen)
              element.webkitRequestFullscreen();
            else if (element.msRequestFullscreen)
              element.msRequestFullscreen();
          } else {
            element.classList.remove("isFullScreen");
            if (document.exitFullscreen)
              document.exitFullscreen();
            else if (document.mozCancelFullScreen)
              document.mozCancelFullScreen();
            else if (document.webkitExitFullscreen)
              document.webkitExitFullscreen();
            else if (document.msExitFullscreen)
              document.msExitFullscreen();
          }
        }
      }
    }
  }
}

export default ({ onChange, value, disabled, ...rest }) => {
  return (
    <ReactQuill
      modules={modules}
      readOnly={disabled}
      theme="snow"
      value={value ? value : ''}
      onChange={onChange}
      {...rest}
      id="react-quill-editor"
    />
  );
}