import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Contact from "./pages/contact/Contact";
import { Home,Contact } from "./pages";
import {Header,Footer} from "./components"
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
