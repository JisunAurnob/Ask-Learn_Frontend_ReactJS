import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PostsList = () => {
    var x = 0;
    useEffect(() => {
        document.title = "Courses List"
    }, [])
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

    return (
        <div class="container">
            <div class="section-title">
                        <h2>Recent Post</h2>
                    </div>
            <table class="table table-striped table-hover table-dark">
                <thead>
                    <tr>
                    <th scope="col">Post ID</th>
                        <th scope="col">Author</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Title</th>
                        <th scope="col">Post Details</th>
                        <th scope="col">UpVote</th>
                        <th scope="col">DownVote</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(st => (
                            <tr class="table-light">
                                <th scope="row">{st.pid}</th>
                                <td>{st.name}</td>
                                <td>{st.username}</td>
                                <td>{st.email}</td>
                                <td>{st.title}</td>
                                <td>{st.details}</td>
                                <td>{st.upVote}</td>
                                <td>{st.downVote}</td>
                                <td>{st.dateTime}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default PostsList;