import logo from './logo.svg';
import './App.css';
import StylePage from './component/chap01/StylePage';
import Babel from './component/chap01/Babel';
import ComponentPage from './component/chap02/ComponentPage.jsx';
import Condition from './component/chap03/Condition.jsx';
import Navibar from './component/common/Navibar.jsx';
import { Route, Routes, useNavigate } from 'react-router-dom';


function App() {

  

  return (
    <div className="App">
      <br/>

      {
      //<StylePage/>
      //<Babel/>
      //<Outline/>
      //<ComponentPage/>
      }

      {Condition()}
      
      {/*
      요청 URL에 따라서 다른 컴포넌트를 보여주고 싶음 
      React는 HTML 파일이 하나기 때문에 URL에 따라서 페이지를 분류할 수 가 없음
      따라서 라이브러리를ㅇ 이용해서 컴포넌트를 구분
      -React Router
      터미널 -> npm install react-router-dom#6버전은 바뀔수 있으니 항상 확인 잘해야함 
    
      index.js로 이동 <BrowseRouter>태그로 감싸줘야함

      */}     

      <Navibar/>

      <Routes>
        <Route path="/" element={<Outline/>}/>
        <Route path="/jsx" element={<Babel/>}/>
        <Route path="/style" element={<StylePage/>}/>
        <Route path="/component" element={<ComponentPage/>}/>
        <Route path="/state" element={<Condition/>}/>
      </Routes>
     

    </div>
  );
}

export default App;
