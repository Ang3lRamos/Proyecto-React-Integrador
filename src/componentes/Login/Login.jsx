import React, { useEffect } from 'react'
import "./Login.css"
import "../../App.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import video1 from "../../Assets/video1.mp4"

import {FaUserShield} from "react-icons/fa"
import {BsFillShieldLockFill} from "react-icons/bs"
import {AiOutlineSwapRight} from "react-icons/ai"
const Login = () => {

    const [loginUserName, setLoginUserName] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const navigateTo = useNavigate()

    const [loginStatus, setLoginStatus] = useState("")
    const [statusHolder, setStatusHolder] = useState("message")

    const loginUser = (e) => {
        e.preventDefault()
        Axios.post("http://localhost:3002/login",{
            LoginUserName: loginUserName,
            LoginPassword: loginPassword
        }).then((response)=>{
            console.log()
            if(response.data.message || loginUserName == "" || loginPassword == ""){   
                navigateTo("/login") 
                setLoginStatus(`Credentials Don't exist`)         
            }
            else{
                navigateTo("/dashboard")
            }
        })
    }

    useEffect(()=>{
        if(loginStatus !== ""){
            setStatusHolder("showMessage")
            setTimeout(()=>{
                setStatusHolder("message")
            },4000)
        }
    },[loginStatus])

    const onSubmit = ()=>{
        setLoginUserName("")
        setLoginPassword("")
    }
  return (
    <div className="loginPage flex">
        <div className="container flex">
            <div className="videoDiv">
                <video src={video1} autoPlay loop muted></video>
                <div className="textDiv">
                    <h2 className="title">
                        Recycle and help the planet
                    </h2>
                    <p>
                        Recycle for a brighter future!
                    </p>
                </div>

                <div className="footerDiv flex">
                    <span className="text">
                        Don't have an account?
                    </span>
                    <a href="/register">
                        <button className="btn">
                            Sign Up
                        </button>
                    </a>
                </div>
            </div>

            <div className="formDiv flex">
                <div className="headerDiv">
                    <h3>
                        Welcome Back!
                    </h3>
                </div>

                <form action="" className="form grid" onSubmit={onSubmit}>
                    <span className={statusHolder}>
                        {loginStatus}
                    </span>
                    <div className="inputDiv">
                        <label htmlFor='username'>
                            Username
                        </label>
                        <div className="input flex">
                            <FaUserShield className="icon"/>
                            <input type="text" id="username" placeholder="Enter username"
                            onChange={(event)=>{
                                setLoginUserName(event.target.value);
                            }}/>
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor='password'>
                            Password
                        </label>
                        <div className="input flex">
                            <BsFillShieldLockFill className="icon"/>
                            <input type="password" id="username" placeholder="Enter password"
                            onChange={(event)=>{
                                setLoginPassword(event.target.value);
                            }}/>
                        </div>
                    </div>

                    <button type='submit' className="btn flex" onClick={loginUser}>
                        <span>
                            Login
                        </span>
                        <AiOutlineSwapRight className="icon"/>
                    </button>

                    <a href="/dashboard">Dash</a>

                    <span className="forgotPassword">
                        Forgot your password? <a href="#">Click here</a>
                    </span>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Login