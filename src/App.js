
import './App.css';
import Askvit from './components/Askvit';
import Login from './components/auth/Login';
import { login,selectUser } from './feature/userSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {auth} from './firebase';
import {onAuthStateChanged} from 'firebase/auth'

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          login({
            userName: authUser.displayName,
            photo: authUser.photoURL,
            email: authUser.email,
            uid: authUser.uid,
          })
        );
        console.log("AuthUser", authUser);
      }
    });
  }, [dispatch]);
  return (
    <div className="App">
      {/* <h1>This is for testing</h1> */}
      {user ? <Askvit /> : <Login />}
    </div>
  );
}

export default App;
