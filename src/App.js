import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { Provider } from "react-redux";
import store from './store';
import Login from '../src/components/Login';
import Register from '../src/components/Register'
import Page from '../src/components/Page'



const App = (props) => {



  return (
<BrowserRouter>
        
             <Header />
              <Navbar />
              <div className='app-wrapper'>
              <Provider store={store}>
                <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Register />} />
                <Route path="/userlist" element={<Page />} />
              
              {/* <DarkExample /> */}
              </Routes>
              </Provider>
        </div>
     </BrowserRouter>

  );
}

export default App;
