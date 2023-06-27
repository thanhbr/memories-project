import { 
  Container
} from "@mui/material";
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Auth from './components/auth';
import PostDetail from "./components/posts/detail";

const Blogs = () => {
  const user = JSON.parse(localStorage.getItem('profile'))
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
            path='/posts'
            exact
            element={<Home />}
          />
          <Route 
            path='/posts/search'
            exact
            element={<Home />}
          />
          <Route 
            path='/posts/:id'
            exact
            element={<PostDetail />}
          />
          <Route 
            path='/auth'
            exact
            element={!user ? <Auth /> : <Home />}
          />
        </Routes>
      </Container>  
    </BrowserRouter>
  )
}

export default Blogs