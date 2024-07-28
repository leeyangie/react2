import style from 'styled-components';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../../App';

const Nav = style.nav`
    background-color : #f38484;
    text-align : center;
    padding : 12px;
`;

const Ul = style.ul`

    list-style-type : none;
    margin : 0;
    padding : 0;
    height : 80px;
`;

const Li = style.li`

    display : inline-block;
    margin-right : 30px;
    height : 100%;
`;

const A = style.a`
    color : #c3e3d8;
    text-decoration : none;
    padding : 7px;
    display : block;
    width : 100%;
    height : 100%;
    line-height : 80px;
    font-weight : bold;
    font-size : 33px;

    &:hover { 
        cursor : pointer;
        background-color : yellowgreen;
        color : white;
    }
`;

const Navibar = () => {

    return(
        <Nav>
            <Ul>
                <Li><A>메인으로</A></Li>
                <Li><A>JSX란?</A></Li>
                <Li><A>스타일 부여방법</A></Li>
                <Li><A>컴포넌트 나누기</A></Li>
                <Li><A>상태와 Hook</A></Li>
            </Ul>
        </Nav>

    );


}

export default Navibar;