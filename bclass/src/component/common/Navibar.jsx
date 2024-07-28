import style from 'styled-components';

const Nav = styled.nav`
    background-color : red;
    text-align : center;
    padding : 12px;
`;

const Ul = styled.ul`

    list-style-type : none;
    margin : 0;
    padding : 0;
    width : 130px;
    height : 80px;
`;

const Li = styled.li`

    display : inline-block;
    margin-right : 30px;
    width : 100%;
    height : 100%;
`;

const A = styled.a`
    color : greenyellow;
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



}

export default Navibar;