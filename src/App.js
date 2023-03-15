import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUser } from './redux/slices/userLogin';

import Navigation from './components/NavBar/Navigation';
import Home from './pages/Home';
import Breakfast from './pages/Breakfast';
import Brunch from './pages/Brunch';
import Lunch from './pages/Lunch';
import Dinner from './pages/Dinner';
import Login from './pages/Login';
import CreateUser from './pages/CreateUser';
import UserProfile from './pages/UserProfile';
import './App.css';
import MyRecipes from './pages/MyRecipes';
import Footer from './components/Footer/Footer';
import CreateRecipe from './pages/CreateRecipe';
import NotFound from './pages/NotFound';
import EditRecipePage from './pages/EditRecipePage';

function App() {
  const isLoggedIn = useSelector(selectUser);

  return (
    <BrowserRouter>
      <div className='container'>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/breakfast/:pageNumber' element={<Breakfast />} />
          <Route path='/brunch/:pageNumber' element={<Brunch />} />
          <Route path='/lunch/:pageNumber' element={<Lunch />} />
          <Route path='/dinner/:pageNumber' element={<Dinner />} />
          <Route
            path='/login'
            element={isLoggedIn.isLoggedIn ? <Navigate to='/' /> : <Login />}
          />
          <Route
            path='/register'
            element={
              isLoggedIn.isLoggedIn ? <Navigate to='/' /> : <CreateUser />
            }
          />
          <Route
            path='/profile/:id'
            element={
              isLoggedIn.isLoggedIn ? <UserProfile /> : <Navigate to='/login' />
            }
          />
          <Route
            path='/my-recipes/:id'
            element={
              isLoggedIn.isLoggedIn ? <MyRecipes /> : <Navigate to='/login' />
            }
          />
          <Route
            path='/create-recipe/:id'
            element={
              isLoggedIn.isLoggedIn ? (
                <CreateRecipe />
              ) : (
                <Navigate to='/login' />
              )
            }
          />
          <Route
            path='/edit-recipe/:recipeId'
            element={
              isLoggedIn.isLoggedIn ? (
                <EditRecipePage />
              ) : (
                <Navigate to='/login' />
              )
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
