import styled from 'styled-components';
/* 스타일을 적용한 컴포넌트를 정의할 수 있도록 도와주는 라이브러리*/ 

const StyleDiv = styled.div`
  inline-height: 1.5;

`;



const StylePage = () => {

    return(
        <div>
            <h3>* ReactElement에 style을 부여하는 방법</h3>

            <p>
            JSX는 XML기반 기술이기 때문에 HTML에서의 class속성을 그대로 사용할수 없읍<br/>
            className이라는 속성을 이용해서 Element에 class속성을 부여해야함!

            </p>

            <div className="area1">
                스타일 부여하기 // App.css에서
            </div>

            <div style={{backgroundColor : 'lightblue', fontSize : '22px' }}>
                스타일 부여하기        
            </div>

            <div >
                스타일 부여하기 //위에다가 기재함
            </div>

            <StyleDiv>
                스타일 부여하기 <br/>
                StyleDive로 
            </StyleDiv>
        </div> //하나의 부모요소로 감싸줌

    )

}

export default StylePage;