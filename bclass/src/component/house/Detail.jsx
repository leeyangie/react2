import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRef, useState, useEffect, Component} from 'react';
import styled from 'styled-components' ;


const StyleInput = styled.input`
    width : 100%;
    height : 88px;
    font-size : 17px;
    border : 1px solid rgba(0,0,0,0.2);
    color : black;
    font-weight : bold;
    cursor : pointer;
    display : block;
    margin : auto;
    text-align : center;
`;

const StyleButton = styled.button`
    width : 300px;
    height : 50px;
    font-size : 17px;
    border-radius : 7px;
    border : none;
    color : white;
    font-weight : bold;
    cursor : pointer;
    display : inline-block;
    margin : auto;
    margin-top : 20px;
    margin-bottom : 20px;

`;

const Detail = () => {

    const location = useLocation();
    console.log(location.state);
    const home = location.state.props.home;
    const readOnlyButton = useRef();
    const updateButton = useRef();
    const hiddenFile = useRef();
    const navi = useNavigate();

    const onClickReadOnlyButton = () => {

        readOnlyButton.current.style.display = 'none';
        updateButton.current.style.display = 'inline-block';
        document.querySelectorAll('input').forEach(input => {
            input.readOnly = false;
            input.style.border = '1px solid rgba(255, 0, 0, 0.2)';
            input.style.color = 'rgba(255,0,0,0.7)';
        })
    };

    const [product, setProduct] = useState({
        title : home.title,
        rateCount : home.rateCount,
        attchment : home.attachment
    });

    const onChangeHandler = e => {
        const {name, value} = e.target;
        setProduct({
            ...product,
            [name] : value
        });
    };

    const onClickUpdate = () => {

        axios.put('http://localHost/product/' + home.houseNo, {
            title : product.title,
            rateCount : product.rateCount
        }).then(result => {
            console.log(result);
            const resultCode = result.data.responseData;

            if(resultCode === 1) {
                alert("상품수정 성공");
                readOnlyButton.current.style.display = 'inline-block';
                updateButton.current.style.display= 'none';
                document.querySelectorAll('input').forEach(input => {
                    input.readOnly = true;
                    input.style.border = '1px solid rgba(0,0,0,0.2)';
                    input.style.color = 'black';
                });
            }
            else { 
                alert("수정 실패");
            }
        });
    };

    const onClickFileButton = () => {

        hiddenFile.current.click();

        hiddenFile.current.onChange = e => {

            const formData = new FormData();
            formData.append('file', e.target.files[0]);
            formData.append('houseNo', home.houseNo);

            axios.put('http://localhost/product/file', formData, {
                headers : {
                    'Content-Type' : 'multipart/form-data'
                }
            }).then(result => {

                console.log(result);
                const chageName = result.data.responseData;

                if(chageName !=''){
                    alert('사진이 변경되었습니다.')
                    setProduct({
                        ...product,
                        attachment : {
                            chageName : chageName
                        }
                    });
                }
                else {
                    alert("사진변경 실패")
                }
            }); 
        }
    };

    const onClickDeleteButton = () => {

        axios.delete('http://localhost/product/' + home.housNo)
            .then(result => {

                const resultCode = result.data.responseData;

                if(resultCode === '01') {
                    alert('삭제성공');
                    navi('/house');
                }
                else if(resultCode === '11') {
                    alert('삭제실패');
                }
                else {
                    alert('오류');
                }


            });
    };

    const onClickBack = () => {
        navi(-1);
    };

    return (
        <>
            <div style={{margin : '30px'}}>
                <img src={'product/' + product.attachmnet.changeName} width='1000px' height='600px'/>
                <StyleInput name="title" type="text" value={product.title} readOnly />
                <StyleInput name="rateCount" type="text" value={product.rateCount} readOnly onChange={onChangeHandler}/>
            </div>

            <StyleButton 
            style= {{background : 'lightblue'}}
            ref={readOnlyButton}
            onClick={onClickReadOnlyButton}
            >수정하기</StyleButton>
            <StyleButton 
            style= {{background : 'lightyellow', display : 'none', color : 'black'}}
            ref={updateButton}
            onClick={onClickUpdate}
            >수정하기</StyleButton>

            <input tyle="file" style={{display : 'none'}} ref={hiddenFile}/>
            <StyleButton
            stle={{background : 'lightgreen'}}
            onClick={onClickFileButton}
            >사진 수정하기</StyleButton>
            <StyleButton
            stlye={{background : 'lightpink'}}
            onClick={onClickDeleteButton}
            >삭제하기</StyleButton>
            <br/>
            <StyleButton
            style={{background : 'lightgrey'}}
            onClick={onClickBack}
            >뒤로가기</StyleButton>
        </>

    )


}

export default Detail;