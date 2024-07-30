import ResponseHome from "./ResponseHome";

/*
 Componet를 나눠서 return 할때 주의점 
 반드시 하나의 ReactElement로 감싸주어야함.
 딱히 감쌀 태그가 없다면 <Fragment> 또는 <> 빈태그를 사용함
  
 */

 


const ComponentPage = () => {

    /* 
    컴포넌트를 정의 할 때는 반드시 대문자로 시작해야함!
    리액트는 소문자로 시작하는 컴포넌트는 컴포넌트가 아닌 DOM요소로 인식함. 
    const divEl = () => {
        return (
            <div>함수형으로 정의한 컴포넌트</div>
        );
    };
    */

    const Home = () => {
        return (

            <div className="home">
                <img src="https://a0.muscache.com/im/pictures/f73781e9-ce80-41c0-8d7d-50e9486b9292.jpg?im_w=720"></img>
                <h4>홍천</h4>
                <p>신규</p>
            </div>

        )
    };

    /*
    DB - AJAX - API 요청 
    */

    const homeObj = {
        src : 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTg2NzMzNDc0MDk1Nzg4NA%3D%3D/original/b676fc8d-8250-4df0-a7cb-728b0486e371.jpeg?im_w=960&im_q=highq',
        title : '뉴캐슬, 뉴욕, 미국 엑스 맨션',
        rate : '후기 1개'

    };

    const homeObj2 = {
        src : 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjE4NTg5MzIzNjI0NjI2MA%3D%3D/original/e6b26733-2c15-47d9-b097-6968b39bb697.jpeg?im_w=960&im_q=highq',
        title : '둥둥 떠다니는 업 하우스',
        rate : '후기 없음'

    };

    const homeObj3 = {
        src : 'https://a0.muscache.com/im/pictures/f73781e9-ce80-41c0-8d7d-50e9486b9292.jpg?im_w=720',
        title : '홍천',
        rate : '신규'
      
    };

    const homes = [homeObj, homeObj2, homeObj3];
/*
    const ResponseHome = props => {
        console.log(props);
        const home=props.home;
        return (
            <div className="home">
                <img src={home.src}/>
                <h4>{home.title}</h4>
                <p>{home.rate}</p>
            </div>

        )

    };
    */

    return (
        <>

            <h1>Component</h1>

            <pre>
                - React는 Component를 이용해서 재상용이 가능한 조각들을 만들어서 화면을 완성
                - 조각들을 조합해서 View를 재 구성 할 수 있음
                - Component 정의 방법은 함수 / 클래스가 있음! 클래스는 권장하지 않는 방법


            </pre>

            <h2>Component는 데이터(props)를 전달받아서 View(state)상태에 따라 다르게 렌더링 할수 있음!</h2>

            <h3>Component 나누기 연습</h3>
        
            <div className="home-list">
                {/* <Home/>
                <ResponseHome home={homeObj}/>
                <ResponseHome home={homeObj2}/> */}

                {
                    homes.map((home, index) => {
                        //console.log(home);
                        //console.log(index);
                        return (<ResponseHome home={home} key={index}/>) 
                    })

                }
            </div>

            <h5>주의사항</h5>
            <p>
            react컴포넌트는 항상 퓨어한 것이 원칙이기 때문에 
            props의 값을 변경해서는 안됨
            </p>

        </>

    )


}

export default ComponentPage;