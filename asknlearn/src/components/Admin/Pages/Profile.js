import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
const Profile = () => {
    // let[token, setToken]= useState("");
    let[name, setName] = useState("");
    let[username, setUsername] = useState("");
    let[email, setEmail] =useState("");
    let[eduInfo, seteduInfo] =useState("");
    let[gender, setGender] =useState("");
    let[dateTime, setdateTime] =useState("");
    let[dob, setDob] =useState("");
    let[currPosition, setCurrentPosition] =useState("");
    let[userType, setuserType] =useState("");
    let[password, setPassword] =useState("");
    let history = useHistory();
    const {id}=useParams();
    const [posts,setPosts]=useState([]);
    var uid = "";
    if(localStorage.getItem('user')){
      var obj = JSON.parse(localStorage.getItem('user'));
      uid=obj.userId;
    }
    useState(()=>{
      var uid = "";
    if(localStorage.getItem('user')){
      var obj = JSON.parse(localStorage.getItem('user'));
      uid=obj.userId;
    }
       
      axios.get("/admin/user/"+uid).then(resp=>{
        // setPosts(resp.data[0])
        const Data=resp.data[0]
        // setPosts(JSON.stringify(resp.data[0]))
        // console.log(JSON.stringify(resp.data));
        //   console.log(Data);
          setPosts(Data)
          console.log(Data);

        // console.log(resp.data[0]);

      }).catch(err=>{
          console.log(err);
      });
  },[])




    const Update= ()=>{
        
     
        if(email=="")
        {
          email=posts.email;
        }

        if(name=="")
        {
          name=posts.name;
        }
        if(username=="")
        {
          username=posts.username;
        }
        if(password=="")
        {
            password=posts.password;
        }
        if(dob=="")
        {
          dob=posts.dob;
        }
        if(gender=="")
        {
          gender=posts.gender;
        }
        if(userType=="")
        {
          userType=posts.userType;
        }
        if(dateTime=="")
        {
          dateTime=posts.dateTime;
        }
        if(eduInfo=="")
        {
          eduInfo=posts.eduInfo;
        }
        if(gender=="")
        {
          currPosition=posts.currentPosition;
        }

        var obj = {uid:uid,name : name,username:username,email : email,password : password,dob : dob,gender : gender, userType:userType,dateTime:dateTime,eduInfo:eduInfo,currentPosition:currPosition};
        //console.log(posts.Freelance_Id);
          console.log(obj);

        if(axios.post("/admin/UpdateUser",obj)
        .then(resp=>{
            var token = resp.data;
            {
                history.push("/users/list");
            }
            // console.log(token);
            // var user = {userId: token.userid, access_token:token.token,tokenid:token.id};
            //localStorage.setItem('user',JSON.stringify(user));
            // console.log(localStorage.getItem('user'));
            // if(!token.userid==""){
            //     //history.push("/dashboard");
               // window.setTimeout(function(){window.location.reload()},100);
            //   }
        }).catch(err=>{
            console.log(err);
        }))
        {
          alert("Update Success");
          history.push("/dashboard");
        }
        
    }


    return (
        <div >
            <section id="contact" class="contact">
                <div className="container">
                    <br />
                    <div className="section-title">
                        <h2 align="center" style={{color:"#990000"}}>Admin Profile</h2>
                    </div>

                    <div className="row">
                        <center>
                            <div className="col-lg-5">
                                <form className="php-email-form">

                                    <div class="form-group mt-3">
                                        <input type="test" class="form-control" name="name" id="name" placeholder="name" 
                                        
                                         required  defaultValue={posts.name} onChange={(e)=>setName(e.target.value)}/>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="test" class="form-control" name="name" id="username" placeholder="name" readOnly
                                        
                                         required  defaultValue={posts.username} onChange={(e)=>setUsername(e.target.value)}/>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="email" id="email" placeholder="Email" 
                                       
                                         required  defaultValue={posts.email} onChange={(e)=>setEmail(e.target.value)}/>
                                    </div>

                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="password" id="password" placeholder="Ente New Password" 
                                       
                                         required  defaultValue={posts.password} onChange={(e)=>setPassword(e.target.value)}/>
                                    </div>

                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="dob" id="dob" placeholder="date of birth" readOnly
                                         required  defaultValue={posts.dob} onChange={(e)=>setGender(e.target.value)}/>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="gender" id="gender" placeholder="gender" 
                                       
                                         required  defaultValue={posts.gender} onChange={(e)=>setGender(e.target.value)}/>
                                    </div>
                                  

                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="userType" id="userType" placeholder="User Type" readOnly
                                       
                                         required  defaultValue={posts.userType} onChange={(e)=>setuserType(e.target.value)}/>
                                    </div>


                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="dateTime" id="dateTime" placeholder="Date Time" 
                                       
                                         required  defaultValue={posts.dateTime} onChange={(e)=>setdateTime(e.target.value)} readOnly/>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="eduInfo" id="eduInfo" placeholder="User Type" 
                                       
                                         required  defaultValue={posts.eduInfo} onChange={(e)=>seteduInfo(e.target.value)}/>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="currPosition" id="currPosition" placeholder="Current Position" 
                                       
                                         required  defaultValue={posts.currentPosition} onChange={(e)=>setCurrentPosition(e.target.value)}/>
                                    </div>





                                        {/* phn, nuid, address,jobtype */}
                                </form>
                                <div class="php-email-form"><button type="submit" class="btn btn-primary"onClick={Update}>Update</button></div>
                            </div>
                        </center>
                    </div>

                </div>
            </section>
        </div>
    )
}
export default Profile;