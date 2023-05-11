import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './cmm/Login';
import Token from './cmm/Token';
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/token' element={<Token />}/>
        </Routes>
      </BrowserRouter>
  );
}
export default App;
