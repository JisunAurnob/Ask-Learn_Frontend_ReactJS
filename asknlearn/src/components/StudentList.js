import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const StudentList = () => {
    var x = 0;
    useEffect(() => {
        document.title = "Student List From API"
    }, [])
    const [students, setMessages] = useState([]);

    useEffect(() => {
        axios.get("Student")
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
                        <h2>All Students</h2>
                    </div>
            <table class="table table-striped table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Department</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(st => (
                            <tr class="table-light">
                                <th scope="row">{st.Id}</th>
                                <td>{st.Name}</td>
                                <td>{st.Dept}</td>
                                <td><Link to="/#"> <img src="https://img.icons8.com/material-rounded/24/000000/edit--v1.png" /> </Link> {" "} <Link to="/#"> <img src="https://img.icons8.com/material-outlined/24/000000/filled-trash.png" /> </Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default StudentList;