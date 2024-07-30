import style from 'styled-components';
import { useNavigate } from 'react-router-dom';
import '../../index.css';
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

    const navi = useNavigate();

    const toMain = () => {
        navi('/');
    };

    const toJsx = () => {
        navi('/jsx');
    };

    const toStyle = () => {
        navi('/style');
    };

    const toComponent = () => {
        navi('/component');
    };

    const toState = () => {
        navi('/state');
    };

    const toProduct = () => {
        navi('/product')
    };

    return(
        <Nav>
            <Ul>
                <Li><A onClick={toMain}>메인으로</A></Li>
                <Li><A onClick={toJsx}>JSX란?</A></Li>
                <Li><A onClick={toStyle}>스타일 부여방법</A></Li>
                <Li><A onClick={toComponent}>컴포넌트 나누기</A></Li>
                <Li><A onClick={toState}>상태와 Hook</A></Li>
                <Li><A onClick={toProduct}>입장하러가기</A></Li>
                
            </Ul>
        </Nav>

    );


}

export default Navibar;