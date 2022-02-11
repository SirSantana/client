import { useEffect, useState } from "react";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import {useDispatch} from 'react-redux'
import { getProducts } from "./reducers/actions/product";
import {BrowserRouter as Router, Routes, Route} from'react-router-dom'
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";
import Postdetails from "./components/PostDetails/Postdetails";
import Profile from "./components/Profile/Profile";
import MyAccount from "./components/MyAccount/MyAccount";
import  './styles.css'

export default function App(){

    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null)
    const user = JSON.parse(localStorage.getItem('profile'))

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch, currentId])


    return(
        <>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home setCurrentId={setCurrentId} currentId={currentId}/>}/>
                <Route path="/auth" element={<Auth/>}/>
                <Route path="/products/:id" element={<Postdetails/>}/>
                <Route path="/profile/:id" element={<Profile/>} />
                <Route path="/myaccount/:id" element={<MyAccount/>} />
            </Routes>
        </Router>
        
        </>
    )
}