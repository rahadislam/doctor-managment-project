import {Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Sheard/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<Home></Home>}></Route>
        <Route path='/appoinment' element={<Home></Home>}></Route>
        <Route path='/contuct' element={<Home></Home>}></Route>
        <Route path='/login' element={<Home></Home>}></Route>
        <Route path='*' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
