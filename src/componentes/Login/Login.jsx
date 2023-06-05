import React from 'react'
import "./Login.css"
import "../../App.css"
import {Link} from "react-router-dom"
import video1 from "../../Assets/video1.mp4"

import {FaUserShield} from "react-icons/fa"
import {BsFillShieldLockFill} from "react-icons/bs"
import {AiOutlineSwapRight} from "react-icons/ai"
const Login = () => {
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

                <form action="" className="form grid">
                    <span className='showMessage'>
                        Login status will go here
                    </span>
                    <div className="inputDiv">
                        <label htmlFor='username'>
                            Username
                        </label>
                        <div className="input flex">
                            <FaUserShield className="icon"/>
                            <input type="text" id="username" placeholder="Enter username"/>
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor='password'>
                            Password
                        </label>
                        <div className="input flex">
                            <BsFillShieldLockFill className="icon"/>
                            <input type="password" id="username" placeholder="Enter password"/>
                        </div>
                    </div>

                    <button type='submit' className="btn flex">
                        <span>
                            Login
                        </span>
                        <AiOutlineSwapRight className="icon"/>
                    </button>

                    <a href="#">Dashboard</a>

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