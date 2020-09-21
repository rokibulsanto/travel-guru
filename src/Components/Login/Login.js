import React, { useContext, useState } from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import AppBar from '../AppBar/AppBar';
import gIcon from '../../Icon/google.png';
import fIcon from '../../Icon/fb.png';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

function Login() {
  
  const [newUser,setNewUser] = useState(false);
  const [user,setUser] = useState({
    isSignedIn: false,
    name:'',
    email:'',
    password:'',
    ConfirmPassword:'',
    photo:''
  })

  const [loggedInuser,setLoggedInUser] = useContext(userContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  
const googleProvider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();
const handleSignIn = () => {
    firebase.auth().signInWithPopup(googleProvider)
    .then(res =>{
      const {displayName,photoURL,email} = res.user;
            const signInUser = {
                isSignedIn: true,
                name:displayName,
                photo:photoURL,
                email: email,
            
            }
            setUser(signInUser);
            setLoggedInUser(signInUser);
            history.replace(from);
        })
        .catch(err => {
            console.log(err);
            console.log(err.message);
        })
    }

    const handleFbSignIn = () => {
      firebase.auth().signInWithPopup(fbProvider)
      .then(res => {
        const {displayName,photoURL,email} = res.user;
        const signInUser = {
            isSignedIn: true,
            name:displayName,
            photo:photoURL,
            email: email,
        
        }
        setUser(signInUser);
        setLoggedInUser(signInUser);
        history.replace(from);
        
        
      })
      .catch(err=> {
        console.log(err);
        console.log(err.message);
        
      });
    }

    const handleSignOut = () => {
      firebase.auth().signOut()
      .then(res => {
          const signOutUser = {
              isSignedIn:false,
              name:'',
              email:'',
              photo:'',
              error:'',
              success:false
          }
          setUser(signOutUser);
      })
      .catch(err => {

      })
  }

  const handleBlur = (e) => {
       
    let isFieldValid = true;
    if(e.target.name === 'email'){
        isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        
    }
    if(e.target.name === 'password'){
        isFieldValid = e.target.value.length > 6
        
    }
    if(e.target.name === 'confirmPassword'){
      isFieldValid = e.target.value.length > 6
      
  }
    if(e.target.name === 'password' === 'ConfirmPassword'){
      isFieldValid = true;
    }
    if(isFieldValid){
        const newUserInfo = {...user};
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
    }
}

const handleSubmit = (e) => {

  if(newUser && user.email && user.password){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        updateUserInfo(user.name);
        setLoggedInUser(newUserInfo);
        history.replace(from);
      })
      .catch(error => {
          const newUserInfo = {...user};
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo)
        
          
        });
  }

  if(!newUser && user.email && user.password){
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(res => {
      const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo);
        history.replace(from);
        console.log('sign in user',res.user);
    })
    .catch(error => {
      const newUserInfo = {...user};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      setUser(newUserInfo)
    });
  }

  e.preventDefault();
}
    

const updateUserInfo = (name) =>{

  const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
    }).then(function() {
      
    }).catch(error => {
      console.log(error);
      
    });
}


  return (
    <div className="Login">
          
            <AppBar></AppBar>
            
            {newUser && <div className="signUp-area">
            <form onSubmit={handleSubmit}>
            <h4 className="loginStyle">Create an account</h4>
            <input className="inputStyle" name="name" type="text" onBlur={handleBlur} placeholder="First name" required/>
            <br/>
            <input className="inputStyle" name="name" type="text" onBlur={handleBlur} placeholder="Last name" required/>
            <br/>
            <input className="inputStyle" type="text" name="email" onBlur={handleBlur} placeholder="Your Email Address" required/>
            <br/>
            <input className="inputStyle" type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required /> 
            <br/>
            <input className="inputStyle" type="password" name="ConfirmPassword" onBlur={handleBlur} placeholder="Confirm Password" required /> 
            <br/>
            <input  className="inputStyle"type="submit" style={{border:'3px solid goldenrod',backgroundColor:'orange'}} value="Create an account"/>
            <br/>
            <small>Already have an account?</small>
            <input type="checkbox" name="newUser" onChange={()=> setNewUser(!newUser)} id=""/>
            <label htmlFor="newUser">Login</label>
            </form>
            </div>}

            {!newUser &&<div className="login-area">
            <form onSubmit={handleSubmit}>
              <h4 className="loginStyle">Login</h4>
            <input className="inputStyle" type="text" name="email" onBlur={handleBlur} placeholder="Your Email Address" required/>
            <br/>
            <input className="inputStyle" type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required /> 
            <br/>
            <input className="inputStyle" type="submit" style={{border:'3px solid goldenrod',backgroundColor:'orange'}} value="Log in"/>
            <br/>
            <small>Don't have an account?</small>
            <input type="checkbox" name="newUser" onChange={()=> setNewUser(!newUser)} id=""/>
            <label htmlFor="newUser">Create an account</label>
            </form>
            </div>}
            <p style={{color:'red'}}>{user.error}</p>
            {user.success && <p style={{color:'green'}}>User {newUser?'Created':'Logged in'}  Successfully</p>}

            <hr style={{width:'260px',marginTop:'20px'}}></hr>
            {
              user.isSignedIn ? <button onClick={()=>handleSignOut()}>sign Out</button> :
              <button className="continueButton" onClick={()=>handleSignIn()}>Continue with Google</button> 
            } 
            <img src={gIcon} alt=""/> 

           
            <br/>

            <button className="continueButton" onClick={()=>handleFbSignIn()}>Continue with Facebook</button>
            <img src={fIcon} alt=""/>
           
    </div>
  );
}

export default Login;
