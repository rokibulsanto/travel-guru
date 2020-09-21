import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Components/Nomatch/NoMatch';
import BookingDetails from './Components/BookindDetails/BookingDetails';
import Login from './Components/Login/Login';
import Hotel from './Components/Hotel/Hotel';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
 
 export const userContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
           <Home></Home>
          </Route>
          <Route exact path="/">
           <Home></Home>
          </Route>
          <Route path="/Booking/:id">
           <BookingDetails></BookingDetails>
          </Route>
          <Route path="/login">
           <Login></Login>
          </Route>
          <PrivateRoute path="/hotel/:id">
           <Hotel></Hotel>
          </PrivateRoute>
          <Route path="*">
           <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
      
    </userContext.Provider>
  );
}

export default App;
