import { useState, useEffect } from "react";




const Condition = props => {

    /*
    함수형 Component 에서는 state를 이용하기 위해서 useState라는 Hook을 사용함
    Hook : React 16.8 버전부터 새롭게 추가된 기능 리액트를 사용할때 쓸 수있는 유용한 함수들
     */

    let [num, setNum] = useState(0);
    // Hook 사용하기 위해서는 import 선행 필요
    // 구조분해 문법
    // useState() 호출할 때 인자값을 전달하는데 => 초기값! / 분자, 숫자, 논리값, 객체, 배열 무엇이든 가능
    // 반환값 == 초기값이 들어있는 변수, setter함수
    
    
    const onClickButton = () => {
        //num += 1;
        setNum(num => num + 1);
        console.log(num);
    }

    useEffect(() => {
        alert(num + '번 클릭했다');
    }, [num]);

    /*
    Hook 사용시 주의사항 
    블럭 최상위에서만 Hook을 호출 (반복문, 조건문 ,함수내부에서 호출 금지)
    - React 함수 컴포넌트에서만 사용 가능 (클래스 컴포넌트에서는 사용할 수 없음)
    
    */

    return (
        <>
            <label>{num}</label>
            <br/>
            <button onClick={onClickButton}>like</button>
        </>


    )



};

export default Condition;