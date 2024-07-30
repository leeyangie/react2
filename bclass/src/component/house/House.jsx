import styled from "styled-components";
import hanok from '../../hanok.json';
import pools from '../../pool.json';
import ResponseHome from "../chap02/ResponseHome";



const StyleDiv = styled.div`
    margin-top : 40px;
    margin-bottom : 40px;
`;

const StyledButton = styled.button`
    width : 300px;
    height : 50px;
    font-size : 17px;
    border-radius : 7px;
    border : none;
    color : white;
    font-weight : bold;

`;


const House = () => {

    return (
        <>
            <StyleDiv>
                <StyledButton style={{backgroundColor : 'lightpink'}}>한옥</StyledButton>
                <StyledButton style={{backgroundColor : 'lightblue'}}>수영장</StyledButton>
            </StyleDiv>

            <div className="home-list">
                {
                    /*
                    hanok.map((h, i) => {
                        return <ResponseHome home={h} key={i} />
                    })
                    */

                    pools.map((p, i) => {
                        return <ResponseHome home={p} key={i} />
                    })
                }
            
            </div>
        
        </>
    )


}

export default House;