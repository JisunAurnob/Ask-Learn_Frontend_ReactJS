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

axios.defaults.baseURL="https://localhost:44375/api/";
axios.defaults.headers.common["Authorization"] = "8e42a646-70d4-499c-bec2-8de964ca25d4";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home />
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
      </Switch>
      {/* <Footer/> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
