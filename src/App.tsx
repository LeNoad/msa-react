import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './cmm/Login';
import Token from './cmm/Token';
import UserDataGrid from './Grid/UserDataGrid';
import Example from './Grid/Exmaple';
import MaterialReactTableTest from './Grid/MaterialReactTableTest';
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/token' element={<Token />}/>
          <Route path='/grid' element={<UserDataGrid />}/>
          <Route path='/test' element={<MaterialReactTableTest />}/>
        </Routes>
      </BrowserRouter>
  );
}
export default App;
