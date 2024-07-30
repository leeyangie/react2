import React from 'react';

const ImgEl = ({ onClickBtn }) => {
  return (
    <div>
      <h1>사진제목</h1>
      <img 
        src="https://blog.kakaocdn.net/dn/dpwvVE/btrBqolp4WG/xU2kPsR8hJ0Rpx9B1LSoZ1/img.png" 
        width="200" 
        alt="Sample"
      />
      <button onClick={onClickBtn}>버튼</button>
    </div>
  );
};

const Outline = () => {
  const onClickBtn = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const newArr = arr.map(num => num * 2);
    console.log(newArr);
  };

  return (
    <>
      <ImgEl onClickBtn={onClickBtn} />
      <h1>* react</h1>
      <hr />
    </>
  );
}
export default Outline;
