import React, { useState } from 'react'
import "./Register.css"
import "../../App.css"
import Axios from "axios"
import video1 from "../../Assets/video1.mp4"
import { useNavigate } from 'react-router-dom'
import {FaUserShield} from "react-icons/fa"
import {BsFillShieldLockFill} from "react-icons/bs"
import {AiOutlineSwapRight} from "react-icons/ai"
import {MdMarkEmailRead} from "react-icons/md"
const Register = () => {

    const [email,setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const navigateTo = useNavigate()

    const createUser = (e) => {
        e.preventDefault()
        Axios.post("http://localhost:3002/register",{
            Email: email,
            UserName: userName,
            Password: password
        }).then(()=>{
            navigateTo("/login")

            setEmail = ("")
            setUserName = ("")
            setPassword = ("")
        })
    }
  return (
    <div className="registerPage flex">
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
                        Have an account?
                    </span>
                    <a href="/login">
                        <button className="btn">
                            Login
                        </button>
                    </a>
                </div>
            </div>

            <div className="formDiv flex">
                <div className="headerDiv">
                    <h3>
                        Let Us Know You!
                    </h3>
                </div>

                <form action="" className="form grid">

                    <div className="inputDiv">
                        <label htmlFor='email'>
                            Email
                        </label>
                        <div className="input flex">
                            <MdMarkEmailRead className="icon"/>
                            <input type="email" id="email" placeholder="Enter email" 
                            onChange={(event)=>{
                                setEmail(event.target.value);
                            }}/>
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor='username'>
                            Username
                        </label>
                        <div className="input flex">
                            <FaUserShield className="icon"/>
                            <input type="text" id="username" placeholder="Enter username"
                            onChange={(event)=>{
                                setUserName(event.target.value);
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
                                setPassword(event.target.value);
                            }}/>
                        </div>
                    </div>

                    <button type='submit' className="btn flex" onClick={createUser}>
                        <span>
                            Register
                        </span>
                        <AiOutlineSwapRight className="icon"/>
                    </button>

                    <span className="forgotPassword">
                        Forgot your password? <a href="#">Click here</a>
                    </span>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Register