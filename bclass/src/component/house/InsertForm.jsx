import { useState } from 'react';



const InsertForm = () => {

    const[kind, setKind] = useState('hanok');
    const sampleImg = useRef();
    const useFile = useRef();

    const onChangeKind = (e) => {
        setKind(e.target.value);
    }

    const[formState, setFormState] = useState({
        title : '',
        rate : ''
    });

    const onChangeHandler = e => {
        const { name, value} = e.target;

        setFormState(oldState => ({
            ...oldState,
            [name] : value
        }));
    }

    const onSelectFile = e => {

        const selectedFiles = e.target.files;

        if(selectedFiles.length !=0) {

            const reader = new FileReader();
            reader.readAsDataURL(selectedFiles[0]);

            reader.onload = e => {

                sampleImg.current.src = e.target.result;
                sampleImg.current.style.display = 'block';
            }
        } else {
            sampleImg.current.style.display = 'none';
        }
    };

    const onSubmit = e => {

        const formData = new FormData();
        const file = useFile.current.files[0];
        formState.type = kind;

        formData.append('img', file);
        formData.append('product', JSON.stringify(formState));

        axios ({
            url : 'http://localhost/product',
            method : 'POST',
            data : formData,
            headers : {'Content-type' : 'multipart/form-data'}
        }).then(result => {
            console.log(result);
        })



    }

    return (
        <div>
        <div className="insert-form">
            <h1>집 추가하기</h1>
            <select onChange={onChangeKind}>
                <option value="hanok">한옥</option>
                <option value="pools">수영장</option>
            </select>
            <input
            type="text"
            name="title"
            placeholder="집의 이름을 입력해주세요"
            onChane={onChangeHandler}
            />
            <input
            type="file"
            name="src"
            placeholder="이미지경로를 입력해주세요"
            onChane={onChangeHandler}
            />
             <input
            type="text"
            name="rate"
            placeholder="후기개수 입력해주세요"
            onChane={onChangeHandler}
            />
            <button
            style={{backgroundColor : 'red'}}
            onClick={onSubmit}>추가하기</button>
        </div>
            <div style = {{width:'80%', margin : 'auto', height : '200px'}}>
                <button disabled className="btn">이미지업로드</button>
                <img ref={sampleImg} src="" style={{width : '100%', height:'100%', display:'flext'}}></img>
            </div>







        </div>




    )





}