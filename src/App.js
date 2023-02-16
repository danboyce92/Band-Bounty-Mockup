import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { changeUser } from './store';
import { auth } from './firebase/firebase';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Contact from './components/Contact';
// import Route from './components/Route';
import LiveBounties from './components/LiveBounties';
import Venues from './components/Venues';

function App() {
  const [user, setUser] = useState(null);
  // const dispatch = useDispatch();

  // const { user } = useSelector((state) => {
  //   return {
  //     user: state.user.userData,
  //   };
  // });

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      // dispatch(changeUser(currentUser.email));
      setUser(currentUser);
    });
  }, [user]);

  return (
    <div className="App relative bg-gray-900 w-full h-full">
      <BrowserRouter>
        <NavBar user={user} />

        <div className="min-h-[95vh] divide-y-4 divide flex flex-col">
          <Routes>
            <Route path="/signin" element={<SignIn />} />

            <Route path="/signup" element={<SignUp />} />

            <Route path="/" element={<LandingPage user={user} />} />

            <Route
              path="/livebounties"
              element={<LiveBounties user={user} />}
            />

            <Route path="/venues" element={<Venues />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>

          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
