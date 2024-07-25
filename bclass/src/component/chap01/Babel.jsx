import { Fragment } from "react";




const Babel = () => {

    

    return(
        <Fragment>
            <div>
                U.I(User Interface)를 구현하기 위한 JavaScript 라이브러리 <br/>
                화면을 구성하는 코드의 단위를 component로 구분하여 component를 조합해서 복잡한 U.I를 구성할수 있음 <br/>
                SPA를 구현하기위한 도구로 사용됨
                React를 사용할때 Node.js라는 JavaScript 런타임을 설치하는데 <br>
                </br>
                node.js에 포함된 NPM라는 패키지 매니저 JSX(Babel)문법을 활용하기 위함.
            </div>

            <div>
                <p>JSX(JavaScriptXML) JavaScript + XML 을 사용한 자바스크립트의 확장문법<br/>

                </p>

                리액트 문법 : React.createElement('h1', null, 'Hello React World');

                주의점 : XML 기반이기때문에 반드시 여는태그와 닫는태그가 쌍으로 존재해야함 <br></br>
                JSX문법을 사용하여 JavaScript코드 내부에서 Reactdml "Element"를 생성할수 있음 <br/>
                U.I를 구성하기 위해 React와 함께 사용하길 권장 
                JavaScriptdml 모든 기능 포함 <br/>

                <h3>ReactElement</h3>
                component를 구성하는 요소 <br/>
                화면에 만들어내고 싶은 요소를 작성하여 React가 브라우저 화면에 렌더링 할 수 있게 만들어줌 <br/>
                특징 : 불변객체  무슨말인지 모르겠음
                <br/><br/>

                React는 index.html 안에 있는 root라는 아이디 속성값을 가진 div요소 안에 모든 요소를 관리<br/>
                일반적인 React애플리케이션은 하나의 root만 가지기 때문에 index.js에서 root.render()를  호출해서 ReactElement를 전달<br/>
                즉 React를 가지고 UI를 변경하는 방법은 ReactElement를 만들어서 rootRender()에 인자로 전달 


            </div>
        </Fragment>




    )

}

export default Babel;