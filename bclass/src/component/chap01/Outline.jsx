



const Outline = () {


    const onClickBtn = () => {

        const arr = [1,2,3,4,5,6,7];
        const newArr= [];
    
        for(let i=0; i < arr.length; i++){
          newArr.push(arr[i]*2);
        }
        console.log(newArr);
      };
    
    
      const ImgEl = () => {
        return (
          <div>
            <h1>사진제목</h1>
            <img src="https://blog.kakaocdn.net/dn/dpwvVE/btrBqolp4WG/xU2kPsR8hJ0Rpx9B1LSoZ1/img.png" width="200"></img>
          <button onClick = {onClickBtn}>버튼</button>
          
          </div>
        )
      };

    return(

        <>
       
            <ImgEl />

            <h1>* react</h1>



            <hr/>
        
        </>
    )
}

