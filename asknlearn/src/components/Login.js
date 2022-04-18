import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"
const Login = () => {
    useEffect(() => {
        document.title = "Login"
      }, [])
      
    // let[token, setToken]= useState("");
    let[username, setUsername] = useState("");
    let[password, setPassword] =useState("");
    let history = useHistory();
    const [errorList,setError]= useState([]); 
    localStorage.removeItem("user");
    const loginSubmit= ()=>{
        
        var obj = {username: username, password: password};
        // console.log(obj);
        axios.post("/user/login/",obj)
        .then(resp=>{
           var token = resp.data;
            console.log(token);
            var user = {userId:token.uid, access_token:token.Token, username:token.username, tokenId: token.tid,userType:token.userType};

            localStorage.setItem('user',JSON.stringify(user));
            if(!token.uid){
                setError(resp.data);
            }
           
            if(localStorage.getItem('user')){
                var obj = JSON.parse(localStorage.getItem('user'));
                var Token = obj.access_token;
                history.push("/Users/List");
                window.location.reload(false);
                if(!Token==""){
                    
                    // window.location.reload(false);
                  }
              }
            
        }).catch(err=>{
            console.log(err);
        });
        
    }

  
    return (
        <div>
            <section id="contact" class="contact">
                <div class="container">
                    <br />
                    <div class="section-title">
                        <h2>Login</h2>
                    </div>

                    <div class="row">
                        <center>
                            <div class="col-lg-5">
                                <form class="php-email-form">
                                <span style={{color:'red'}}>{errorList}</span>
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="username" id="username" placeholder="Username"
                                         required  value={username} onChange={(e)=>setUsername(e.target.value)}/>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="password" class="form-control" name="password" id="password" placeholder="Password"
                                         required  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                    </div>
                                </form>
                                <div class="php-email-form"><button type="submit" onClick={loginSubmit}>Login</button></div>
                            </div>
                        </center>
                    </div>

                </div>
            </section>
        </div>
    )

}
export default Login;