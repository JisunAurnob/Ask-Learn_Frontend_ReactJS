import React, { useState, useEffect } from "react";
// import axios from "axios";
import { useHistory } from "react-router-dom"
const Login = () => {
    useEffect(() => {
        document.title = "Login"
      }, [])
      
    // let[token, setToken]= useState("");
    let[username, setName] = useState("");
    let[password, setPassword] =useState("");
    let history = useHistory();
    const [errorList,setError]= useState([]); 
    const loginSubmit= ()=>{
        var obj = {username: username, password: password};
        //console.log(obj);
        // axios.post("/login",obj)
        // .then(resp=>{
        //    var token = resp.data;
        //     // console.log(token);
        //     var user = {userId: token.userid, access_token:token.token, username:token.username, tokenId: token.id};
        //     localStorage.setItem('user',JSON.stringify(user));
        //     if(!token.userid){
        //         setError(resp.data);
        //     }
        //     console.log(localStorage.getItem('user'));
        //     if(!token.userid==""){
        //         history.push("/admin/dashboard");
        //         window.location.reload(false);
        //       }
        // }).catch(err=>{
        //     console.log(err);
        // });
        
    }

    // if(!localStorage.getItem('user')){
    //     history.push("/");
    // }
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
                                         required  value={username} onChange={(e)=>setName(e.target.value)}/>
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