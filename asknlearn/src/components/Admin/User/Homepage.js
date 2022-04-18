

import { Link } from 'react-router-dom'
// import HomeNav from '../../layouts/HomeNav';
import {Carousel,Nav} from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import axios from "axios";


import image1 from '../../../Contents/6.jpg';
import image2 from '../../../Contents/7.jpg';
import image3 from '../../../Contents/8.jpg';
import '../../../assets/css/Courses.css';
import '../../../assets/css/Post.css';


function Homepage()
{
    const [students, setMessages] = useState([]);

    useEffect(() => {
        axios.get("/admin/recentPost")
            .then(resp => {
                console.log(resp.data);
                setMessages(resp.data);
            }).catch(err => {
                console.log(err);
            });
    }, []);
    var name=[];
    var userType=[];
    var title=[];
    var details=[];
    var dateTime=[];
   
    
    return(
    
            <div>
                    {/* <img src={image1} class="img-fluid" alt=""/>
                    <img src={image2} class="img-fluid" alt=""/>
                    <img src={image3} class="img-fluid" alt=""/> */}
                {/* Carousel Start */}
                <div>

                <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                      />
                      <Carousel.Caption>
                      <Nav.Link href="/signup"><b>Sign Up Now</b></Nav.Link>
                        {/* <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                      />

                      <Carousel.Caption>
                      <Nav.Link href="/signup"><b>Sign Up Now</b></Nav.Link>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                      />

                      <Carousel.Caption>
                      <Nav.Link href="/signup"><b>Sign Up Now</b></Nav.Link>
                        {/* <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
               
                </div>
                {/* Carousel End */}

                

                {/* Courses List Start */}
                <div style={{textAlign:'center'}}>
                  <h2> Recent Courses</h2>
                </div>

                <div style={{marginLeft:'80px'}}>
              <Link to='/signup'>
                <div className="box1" style={{border:'none' ,backgroundColor:'white',color:'black',padding:'15px 25px',textAlign:'center',textDecoration:'none',display:'inline-block',marginRight:'100px',marginLeft:'50px'}}>
                  {/* <Link to="/signup" style={{}}>React</Link> */}
                  <img src={image1} style={{width:'100%',borderRadius:'20px'}}/>
                  <h4>Course Thumbnail</h4>
                  <h5>Course Name </h5>
                  <h6>Price </h6>
                </div>
                </Link>
                <Link to='/signup'>
                <div className="box1" style={{border:'none' ,backgroundColor:'white',color:'black',padding:'15px 25px',textAlign:'center',textDecoration:'none',display:'inline-block',marginRight:'100px',marginLeft:'50px'}}>
                  {/* <Link to="/signup" style={{}}>React</Link> */}
                  <img src={image1} style={{width:'100%',borderRadius:'20px'}}/>
                  <h4>Course Thumbnail</h4>
                  <h5>Course Name </h5>
                  <h6>Price </h6>
                </div>
                </Link>
                <Link to='/signup'>
                <div className="box1" style={{border:'none' ,backgroundColor:'white',color:'black',padding:'15px 25px',textAlign:'center',textDecoration:'none',display:'inline-block',marginRight:'100px',marginLeft:'50px',borderRadius:'10px'}}>
                  {/* <Link to="/signup" style={{}}>React</Link> */}
                  <img src={image1} style={{width:'100%',borderRadius:'20px'}}/>
                  <h4>Course Thumbnail</h4>
                  <h5>Course Name </h5>
                  <h6>Price </h6>
                </div>
                </Link>
                </div>


                <div style={{marginLeft:'80px',marginTop:'30px'}}>
              <Link to='/signup'>
                <div className="box1" style={{border:'none' ,backgroundColor:'white',color:'black',padding:'15px 25px',textAlign:'center',textDecoration:'none',display:'inline-block',marginRight:'100px',marginLeft:'50px'}}>
                  {/* <Link to="/signup" style={{}}>React</Link> */}
                  <img src={image1} style={{width:'100%',borderRadius:'20px'}}/>
                  <h4>Course Thumbnail</h4>
                  <h5>Course Name </h5>
                  <h6>Price </h6>
                </div>
                </Link>
                <Link to='/signup'>
                <div className="box1" style={{border:'none' ,backgroundColor:'white',color:'black',padding:'15px 25px',textAlign:'center',textDecoration:'none',display:'inline-block',marginRight:'100px',marginLeft:'50px'}}>
                  {/* <Link to="/signup" style={{}}>React</Link> */}
                  <img src={image1} style={{width:'100%',borderRadius:'20px'}}/>
                  <h4>Course Thumbnail</h4>
                  <h5>Course Name </h5>
                  <h6>Price </h6>
                </div>
                </Link>
                <Link to='/signup'>
                <div className="box1" style={{border:'none' ,backgroundColor:'white',color:'black',padding:'15px 25px',textAlign:'center',textDecoration:'none',display:'inline-block',marginRight:'100px',marginLeft:'50px'}}>
                  {/* <Link to="/signup" style={{}}>React</Link> */}
                  <img src={image1} style={{width:'100%',borderRadius:'20px'}}/>
                  <h4>Course Thumbnail</h4>
                  <h5>Course Name </h5>
                  <h6>Price </h6>
                </div>
                </Link>
                </div>
         
                {/* Courses List End */}


                        {/* Posts show here */}

                        {
                        students.map(st => (
                           
                                
                               name.push(st.name),
                               userType.push(st.username),
                               title.push(st.title),
                               details.push(st.details),
                               dateTime.push(st.dateTime)
                        ))

                        }
                        {/*  */}
                       
                       
                  <div class="row">
                    <div >


                        <div class="white-box">
                            <h3 class="box-title">Top Posts</h3>
                            <div class="comment-center">

                                <div class="comment-body">
                                    <div class="user-img">
                                        <img src={image1} alt="user"
                                             class="img-circle"/>
                                    </div>
                                    <div class="mail-contnet">
                                        <h5>{name[0]}[<b> {userType[0]}</b>]</h5> <span class="mail-desc">
                                            <h4 class="post-title">{title[0]}</h4>
                                            <h5 class="post-details">{details[0]}</h5>
                                        </span><a href="javacript:void(0)"
                                                  class="action"><i class="ti-close text-danger"></i></a> <a href="javacript:void(0)" class="action">
                                            <i class="ti-check text-success"></i>
                                        </a><span class="time pull-right">{dateTime[0]}</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="white-box">
                            <h3 class="box-title">Top Posts</h3>
                            <div class="comment-center">

                                <div class="comment-body">
                                    <div class="user-img">
                                        <img src={image1} alt="user"
                                             class="img-circle"/>
                                    </div>
                                    <div class="mail-contnet">
                                        <h5>{name[1]}[<b> {userType[1]}</b>]</h5> <span class="mail-desc">
                                            <h4 class="post-title">{title[1]}</h4>
                                            <h5 class="post-details">{details[1]}</h5>
                                        </span><a href="javacript:void(0)"
                                                  class="action"><i class="ti-close text-danger"></i></a> <a href="javacript:void(0)" class="action">
                                            <i class="ti-check text-success"></i>
                                        </a><span class="time pull-right">{dateTime[1]}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="white-box">
                            <h3 class="box-title">Top Posts</h3>
                            <div class="comment-center">

                                <div class="comment-body">
                                    <div class="user-img">
                                        <img src={image1} alt="user"
                                             class="img-circle"/>
                                    </div>
                                    <div class="mail-contnet">
                                        <h5>{name[2]}[<b> {userType[2]}</b>]</h5> <span class="mail-desc">
                                            <h4 class="post-title">{title[2]}</h4>
                                            <h5 class="post-details">{details[2]}</h5>
                                        </span><a href="javacript:void(0)"
                                                  class="action"><i class="ti-close text-danger"></i></a> <a href="javacript:void(0)" class="action">
                                            <i class="ti-check text-success"></i>
                                        </a><span class="time pull-right">{dateTime[2]}</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="white-box">
                            <h3 class="box-title">Top Posts</h3>
                            <div class="comment-center">

                                <div class="comment-body">
                                    <div class="user-img">
                                        <img src={image1} alt="user"
                                             class="img-circle"/>
                                    </div>
                                    <div class="mail-contnet">
                                        <h5>{name[3]}[<b> {userType[3]}</b>]</h5> <span class="mail-desc">
                                            <h4 class="post-title">{title[3]}</h4>
                                            <h5 class="post-details">{details[3]}</h5>
                                        </span><a href="javacript:void(0)"
                                                  class="action"><i class="ti-close text-danger"></i></a> <a href="javacript:void(0)" class="action">
                                            <i class="ti-check text-success"></i>
                                        </a><span class="time pull-right">{dateTime[3]}</span>
                                    </div>
                                </div>

                            </div>
                        </div>





                    </div>
                </div>
                

                

            </div>
           
           
    );
}

export default Homepage;