import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CourseList = () => {
    var x = 0;
    useEffect(() => {
        document.title = "Courses List"
    }, [])
    const [students, setMessages] = useState([]);

    useEffect(() => {
        axios.get("/admin/recentCourses/")
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
                        <h2>All Courses</h2>
                    </div>
            <table class="table table-striped table-hover table-dark">
                <thead>
                    <tr>
                    <th scope="col">UID</th>
                        <th scope="col">Course ID</th>
                        <th scope="col">Instructor</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Title</th>
                        <th scope="col">Course Details</th>
                        <th scope="col">Price</th>
                        <th scope="col">UpVote</th>
                        {/* <th scope="col">Profile Pic</th> */}
                        <th scope="col">DownVote</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(st => (
                            <tr class="table-light">
                                <th scope="row">{st.uid}</th>
                                <td>{st.coid}</td>
                                <td>{st.name}</td>
                                <td>{st.username}</td>
                                <td>{st.email}</td>
                                <td>{st.title}</td>
                                <td>{st.details}</td>
                                <td>{st.price+" BDT"}</td>
                                <td>{st.upVote}</td>
                                <td>{st.downVote}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default CourseList;