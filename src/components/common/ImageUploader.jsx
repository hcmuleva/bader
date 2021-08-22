import { Image } from 'antd';

export default function ImageUploader(props) {
  return (
    <Image
      width={200}
      src={props.imageUrl}
    />
  );
}
