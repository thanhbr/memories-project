import { 
  Container
} from "@mui/material";
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Auth from './components/auth';

const Blogs = () => {
  return (
    <BrowserRouter>
      <Container maxWidth='xl'>     
        <Navbar />

        <Routes>
          <Route 
            path='/'
            exact
            element={<Home />}
          />
          <Route 
            path='/auth'
            exact
            element={<Auth />}
          />
        </Routes>
      </Container>  
    </BrowserRouter>
  )
}

export default Blogs