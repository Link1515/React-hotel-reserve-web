import { useState } from 'react';
import { isEmpty } from '@/utils/utils.js';
import './ImgShower.css';

export default function ImgShower(props) {
  const { imageUrl, name } = props.roomInfo;

  const [mainImg, setMainImg] = useState({ url: '', index: 0 });

  function changeImg(url, index) {
    return () => {
      setMainImg({ url, index });
    };
  }

  if (isEmpty(props.roomInfo)) {
    return <div>loading...</div>;
  } else {
    return (
      <div className="h-[640px] grid grid-rows-4 grid-cols-3 lg:grid-rows-3 lg:grid-flow-col">
        {/* 左側主圖片 */}
        <div className="row-span-3 col-span-3 lg:row-span-3 lg:col-span-4">
          <img src={mainImg.url || imageUrl[0]} alt={name} />
        </div>

        {/* 右側選圖區 */}
        {imageUrl.map((url, index) => (
          <div
            onClick={changeImg(url, index)}
            key={index}
            className={`imgThumb ${index === mainImg.index ? 'active' : ''}`}
          >
            <img src={url} alt={name} />
          </div>
        ))}
      </div>
    );
  }
}
