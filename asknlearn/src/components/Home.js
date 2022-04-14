import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {Breadcrumb} from 'react-bootstrap';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
const Home = () => {
    useEffect(() => {
        document.title = "Home"
    }, [])
return (
    <div>
        <br />
        This is homepage <br />
  <button type="button" class="btn btn-danger">Secondary</button>
  <ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul><br />
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
<table class="table table-responsive table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-light">
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr class="table-secondary">
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr class="table-light">
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td>GG</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
)
}

export default Home;