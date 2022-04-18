import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";




const UserList = () => {
    var x = 0;
    useEffect(() => {
        document.title = "Student List From API"
    }, [])
    const [students, setMessages] = useState([]);
    

    useEffect(() => {
        axios.get("/admin/user/")
            .then(resp => {
                console.log(resp.data);
                setMessages(resp.data);
            }).catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div class="container">
            <div class="section-title">
                        <h2> User List</h2>
                    </div>
            <table class="table table-striped table-hover table-dark">
                <thead>
                    <tr>
                    <th scope="col">UID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Gender</th>
                        <th scope="col">User Type</th>
                        <th scope="col">Edu_Info</th>
                        <th scope="col">Current Position</th>
                        <th scope="col">Reputation</th>
                        {/* <th scope="col">Profile Pic</th> */}
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(st => (
                            <tr class="table-light">

                                <th scope="row">{st.uid}</th>
                                <td>{st.name}</td>
                                <td>{st.username}</td>
                                <td>{st.email}</td>
                                <td>{st.gender}</td>
                                <td>{st.userType}</td>
                                <td>{st.eduInfo}</td>
                                <td>{st.currentPosition}</td>
                                <td>{st.reputation}</td>
                                <td>{st.approval}</td> 
                                
      
                                {/* <td>{<img src={require(st.proPic)}/>}</td> */}
                                <td>
                                    {st.approval=="active" && st.userType!="Admin" &&
                                      <Link to={"/block/user/"+st.uid} class="btn btn-danger" style={{marginRight:"5px"}}> Block</Link>  }
                                    
                                    {st.approval=="blocked" && st.userType!="Admin" &&
                                      <Link to={"/unblock/user/"+st.uid} class="btn btn-primary" style={{marginRight:"5px"}}> Active</Link> 
                                      
                                    }
                                    { st.userType!="Admin" &&
                                    <Link to={"/delete/user/"+st.uid} class="btn btn-danger"> Delete</Link> }
                                
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default UserList;