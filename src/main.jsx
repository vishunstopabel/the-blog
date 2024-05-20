import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App.jsx";
import { Provider, useSelector } from "react-redux";
import store from "./store/store.js";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Authentication from './components/authentication.jsx';
import Loginpage from './pages/loginpage.jsx';
import Signuppage from './pages/singuppage.jsx';
import Homepage from './pages/homepage.jsx';
import Postformpage from './pages/postform.jsx';
import Postspage from './pages/postspage.jsx';
import EditPost from './pages/editpost.jsx';
import Addprofilepage from './pages/addprofile.jsx';
import Profilepage from './pages/profilepage.jsx';
import Editprofile from './pages/editprofile.jsx';
import Trendingpage from './pages/trendingpage.jsx';
import Savedpage from './pages/savepage.jsx';
import Followingpage from './pages/following.jsx';
import Followerpage from './pages/followers.jsx';
import Searchpage from './pages/searchpage.jsx';
import Loader from './components/loader.jsx';
import Likepage from './pages/likepage.jsx';
import Developerpage from './pages/develperpage.jsx'
import Singlepage from './pages/singlepage.jsx';
const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<App />}>
      <Route path='/login' element={<Authentication authentication={false}><Loginpage /></Authentication>} />
      <Route path='/singup' element={<Authentication authentication={false}><Signuppage /></Authentication>} />
      <Route path='/home' element={<Authentication authentication><Homepage /></Authentication>} />
      <Route path='/addpost' element={<Authentication authentication><Postformpage /></Authentication>} />
      <Route path='/post/:slug' element={<Authentication authentication><Postspage /></Authentication>} />
      <Route path='/edit-post/:slug' element={<Authentication authentication><EditPost /></Authentication>} />
      <Route path='/profile/:slug' element={<Profilepage />} />
      <Route path='/editprofile/:slug' element={<Editprofile />} />
      <Route path='/trendingpage' element={<Trendingpage />} />
      <Route path='/saved' element={<Savedpage />} />
      <Route path='/profile/followers/:slug' element={<Followerpage />} />
      <Route path='/profile/following/:slug' element={<Followingpage />} />
      <Route path='/searchpage' element={<Searchpage />} />
      <Route path='/liked' element={<Likepage />} />
      <Route path='/developercontact' element={<Developerpage />} />
      <Route path='/singlepage' element={<Singlepage />} />
    </Route>
    <Route path='/addprofile' element={<Addprofilepage />} />
  </Route>
));

const RootComponent = () => {
  const loaderdata = useSelector((state) => state.loader);
  
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
       {loaderdata.status && <Loader loaderdata={loaderdata.Loaderdata} />}
      <RouterProvider router={router} />
     
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RootComponent />
  </Provider>
);
