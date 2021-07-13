import React from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
export default function Imageupload({ disabled }) {
    
 // const [fileList, setFileList] = useState([]);

 const onChange = (obj) => {

     console.log("fileList ",obj)
     //const { fileList: newFileList }=obj
    // setFileList(newFileList);
  };

  const onPreview = async file => {
    let src = file.url;
    console.log("FILE SRC ",src)
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    // <ImgCrop rotate>
    //   <Upload
    //     action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    //     listType="picture-card"
    //     onChange={onChange}
    //     onPreview={onPreview}
    //     disabled={disabled ? false : true}
    //   >
    //     + Upload
    //   </Upload>
    // </ImgCrop>
    <div>Harish</div>
  );
};

