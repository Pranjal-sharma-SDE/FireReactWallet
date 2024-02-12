import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/Authcontext';
import Home from './page/Home';
import SignUp from './page/SignUp';
import SignIn from './page/SignIn';
import Dashbord from './page/Dashbord';
import ErrorMessage from './components/layouts/ErrorMessage';
import WithPrivateRoute from './utils/WithPrivateRoute';
import Transaction from './page/Transaction';

import  {StickyNavbar } from './components/Navbar/NavMain';
import AboutUs from './page/AboutUs';
import Toc from './page/Toc';
import ContactUs from './page/ContactUs';
import { Footer } from './components/Footer/Footer';

import './App.css'

function App() {
  

  return (
    <AuthProvider>
      <Router>

        
        {/* <NavMain /> */}
        <StickyNavbar />
        <ErrorMessage />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/toc' element={<Toc />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route exact path='/dashboard' element={<WithPrivateRoute><Dashbord /></WithPrivateRoute>} />
        <Route path='/transaction' element={<WithPrivateRoute><Transaction /></WithPrivateRoute>} />
        </Routes>
        <Footer />
      </Router>


      
      
    </AuthProvider>
  )
}

export default App
