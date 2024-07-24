// {/* <link href=”https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap” rel=”stylesheet”> */}
// npm i TagCloud
// import cur1 from './cursor.png';
import './App.css';
import Log from './Pages/Log';
import Home from './Pages/Home';
import {Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Log/>}/>
            <Route path='/Balamurugan' element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
