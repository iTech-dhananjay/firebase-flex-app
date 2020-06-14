import React ,{useState}from 'react';
import logo from './logo.svg';


//reactstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


//react-router
import {Route, BrowserRouter as Router ,Switch,Link} from 'react-router-dom'


//toast
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'


//firebase
import firebase from 'firebase/app'
import 'firebase/auth'


//components
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import PageNotFound from './pages/PageNotFound'
import { UserContext } from './context/UserContext';


//layout
import Footer from './layout/Footer'
import Header from './layout/Header'



//Init Firebase
import firebaseConfig from './Config/firebaseConfig'
firebase.initializeApp(firebaseConfig)



const App=()=> {

//it means kind of no user r8 now or logout
const[user,setUser]=useState(null)





  return (
    <Router>
    <ToastContainer/>
    <UserContext.Provider value={{user,setUser}}>
    <Header/>
      <Switch>
         <Route exact path='/' component ={Home}/>
         <Route exact path='/signin' component ={Signin}/>
         <Route exact path='/signup' component ={Signup}/>
         <Route exact path='*' component ={PageNotFound}/>


    </Switch>
    <Footer/>
    </UserContext.Provider>
    </Router>
  )
  
}

export default App;
