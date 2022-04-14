import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"

const AddCourse = () => {
    useEffect(() => {
        document.title = "Add Course!"
      }, [])
    const [errorList,setError]= useState([]); 
    let[title, setName] = useState("");
    let[titleErr, setTitleErr] = useState("");
    let[details, setEmail] =useState("");
    let[price, setPhone] = useState("");
    let[ImageFile, setUsername] = useState("");
    let history = useHistory();

    const signupSubmit= ()=>{
        var obj = {title: title, details: details, price: price, ImageFile: ImageFile};
        console.log(obj);
        axios.post('/instructor/course/add/4', obj)
        .then(resp=>{
                //  console.log(resp.data);
                // console.log(resp.data.Message);
                setError(resp.data.ModelState);
                setTitleErr(resp.data.Message);
            //  history.push("/login");
            console.log(errorList.c.price);
        })
        // .catch(err=>{
        //     // console.log(err);
        //     console.log(err.data);
        //     // setTitleErr(err.data.ModelState.c.title);
        //     // console.log(err.data.ModelState);
        //     // console.log(err.response.data.errors);
        //     // setError(err.response.data.errors)
        // });
        
    }


    return (
        <div>
            <section id="contact" class="contact">
                <div class="container">
                    <br />
                    <div class="section-title">
                        <h2>Add Course</h2>
                    </div>

                    <div class="row">
                        <center>
                            <div class="col-lg-7">
                                <form role="form" class="php-email-form">
                                    <div class="row">
                                        <div class="col-md-6 form-group">
                                            <input type="text" name="title" class="form-control" id="title" placeholder="Title" required 
                                            value={title} onChange={(e)=>setName(e.target.value)}/>
                                            <span style={{color:'red'}}>{titleErr}</span>
                                        </div>
                                        <div class="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="text" class="form-control" name="details" id="details" placeholder="Details" required 
                                            value={details} onChange={(e)=>setEmail(e.target.value)}/>
                                            <span style={{color:'red'}}>{errorList.ModelState}</span>
                                        </div>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="number" class="form-control" name="price" id="price" placeholder="Price" required  
                                            value={price} onChange={(e)=>setPhone(e.target.value)}/>
                                            {/* <span style={{color:'red'}}>{errorList.c.price}</span> */}
                                    </div>
                                    <div class="form-group mt-3">
                                    <input type="file" class="form-control" name="ImageFile" id="ImageFile" placeholder="ImageFile"
                                         required  value={ImageFile} onChange={(e)=>setUsername(e.target.value)}/>
                                         {/* <span style={{color:'red'}}>{errorList.username}</span> */}
                                    </div>

                                </form>
                                <div class="php-email-form"><button type="submit" onClick={signupSubmit}>Signup</button></div>
                            </div>
                        </center>
                    </div>

                </div>
            </section>
        </div>
    )
}
export default AddCourse;