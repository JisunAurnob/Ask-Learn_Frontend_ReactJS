import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/style.css';

import Home from './components/Home';
import Header from './layouts/Header';
import SignUp from './components/SignUp.js';
import Login from './components/Login.js';
import DisplayImage from './components/DisplayImage.js';
import StudentList from './components/StudentList.js';
import AddCourse from './components/AddCourse';
import CourseList from './components/Admin/CourseList';
import UserList from './components/Admin/User/Userlist';
import ModeratorList from './components/Admin/User/ModeratorList';
import InstructorList from './components/Admin/User/InstructorList';
import LearnerList from './components/Admin/User/LearnerList';
import AdminList from './components/Admin/User/AdminList';
import Homepage from './components/Admin/User/Homepage';
import PendingUser from './components/Admin/User/PendingUser';
import Approve from './components/Admin/User/Approve';
import Profile from './components/Admin/Pages/Profile';
import DeleteUser from './components/Admin/User/DeleteUser';
import BlockUser from './components/Admin/User/BlockUser';
import UnblockUser from './components/Admin/User/UnblockUser';
import AdminHeader from './layouts/AdminHeader';
import Logout from './components/Admin/User/logout';
import PostsList from './components/Admin/User/PostsList';
axios.defaults.baseURL="https://localhost:44375/api/";

var token = "";
var userType="";
if(localStorage.getItem('user')){
  var obj = JSON.parse(localStorage.getItem('user'));
  token = obj.access_token;
  userType=obj.userType;
}
// localStorage.removeItem("user");
axios.defaults.headers.common["Authorization"] = token;
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {token=="" &&
        <Header/>
      }

      {userType=="Admin" &&
        <AdminHeader/>
      }
    

{/* {!token=="" &&
        <AdminHeader/>
      } */}
      
      
      
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/homepage">
          <Homepage />
        </Route>

        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/display/image">
          <DisplayImage />
        </Route>
        <Route exact path="/add/course">
          <AddCourse />
        </Route>
        <Route exact path="/student/list">
          <StudentList />
        </Route>


        {/* Admins Route Start */}

        <Route exact path="/Course/List">
          <CourseList />
        </Route>

        <Route exact path="/Users/List">
          < UserList/>
        </Route>

        <Route exact path="/Moderators/List">
          < ModeratorList/>
        </Route>

        <Route exact path="/Instructors/List">
          < InstructorList/>
        </Route>

        <Route exact path="/Learners/List">
          < LearnerList/>
        </Route>

        <Route exact path="/Admins/List">
          < AdminList/>
        </Route>

        <Route exact path="/Pending/User">
          < PendingUser/>
        </Route>

        <Route exact path="/approve/user/:id">
          < Approve/>
        </Route>

        <Route exact path="/delete/user/:id">
          < DeleteUser/>
        </Route>

        <Route exact path="/block/user/:id">
          < BlockUser/>
        </Route>
        
        <Route exact path="/unblock/user/:id">
          < UnblockUser/>
        </Route>

        <Route exact path="/admin/profile/">
          < Profile/>
        </Route>

        <Route exact path="/logout/:id">
          < Logout/>
        </Route>

        <Route exact path="/recent/post">
          < PostsList/>
        </Route>




         {/* Admins Route End */}
      </Switch>
      {/* <Footer/> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
