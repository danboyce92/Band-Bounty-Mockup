import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { auth } from './firebase/firebase';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
// import Route from './components/Route';
import LiveBounties from './components/LiveBounties';
import Venues from './components/Venues';

function App() {
  const [ user, setUser ] = useState(null);
  

  useEffect(() => {

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
}, [user])

  return (
    <div className="App relative bg-gray-900 w-full h-full">
      <BrowserRouter>
      <NavBar user={user}/>
      <Routes>
        
        <Route path="/signin" element={<SignIn />} />
        
        <Route path="/signup" element={<SignUp />} />
        
        <Route path="/" element={<LandingPage user={user}/>} />
          
        <Route path="/livebounties" element={<LiveBounties />} />

        <Route path="/venues" element={<Venues />} />
          
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
