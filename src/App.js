import { Routes, Route,  Navigate } from 'react-router-dom';
import UserComponent from './pages/user'
import Header from './components/header';
import Footer from './components/footer';

import AdminComponent from './pages/admin'
function App() {
  return (
    <div className='w-full max-w-[980px] m-auto p-[15px] App'>
      <Header/>
      <Routes>
        <Route path = "/" element ={<UserComponent/>} />
        <Route path = "/admin" element = {<AdminComponent/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
