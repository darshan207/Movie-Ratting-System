import { Button, Input, Link } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
// import { SocialIcon } from 'react-social-icons';
import React, { useState, useEffect } from "react";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import MailOutlineSharpIcon from "@material-ui/icons/MailOutlineSharp";
import LockIcon from "@material-ui/icons/Lock";
import "./App.css";
import Signup from "./authentication/signup";
import Login from "./authentication/login"

// import axios from 'axios';
// import bcrypt from 'bcrypt';

function App() {
  const [data, setData] = useState(null);
  
  function handleCallback(childData){
    setData(childData);
    console.log("Hello");
    console.log(childData);
  }

  return (
    <div className="app">
      
      <div className="nav-5">
        <nav>
          <div className="mainbar">
            <div className="logo"></div>
            <ul>
              <li>
                <Link>home</Link>
              </li>
              <li>
                <Link>discover</Link>
              </li>
            </ul>
          </div>
          <div className="account">
            {
              data?
                (data.success?
                  <h1>Success!</h1>
                  :
                  <>
                    <h1>Fail</h1>
                    <Signup parentCallback={handleCallback}/>
                    <Login />
                  </>
                )
                :
                <>
                  <Signup parentCallback={handleCallback}/>
                  <Login />
                </>
            }
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
