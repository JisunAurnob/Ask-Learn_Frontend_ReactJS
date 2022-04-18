import { Link } from "react-router-dom";
import React,{useState,useEffect} from "react";
import axios from 'axios';

import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
const Logout=()=>{
    let history = useHistory();
    const {id}=useParams();
    const [posts,setPosts]=useState([]);

   if(
        axios.get("/user/logout/"+id).then(resp=>{
            console.log(resp.data);
            setPosts(resp.data);
        }).catch(err=>{
            console.log(err);
        })
   )
    {
      
        history.push("/login");
        window.location.reload(false);
        
    }
    return (
        <div>
      
                
        </div>
    )
}
export default Logout;