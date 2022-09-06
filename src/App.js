// import axios from 'axios';
import { useState, useEffect } from "react";
import "./App.css";
import React from "react";
//import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
//import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Container, Table } from 'react-bootstrap'
// import DataFetch from './DataFetch';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://stockradars.co/assignment/data.php")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>จัดเรียงข้อมูล</h1>
      <table border="1">
        <tr>
          <td>Name</td>
          <td>Short Name</td>
          <td>Marketcap</td>
          <td>Company_T</td>
          <td>Company_E</td>
          <td>URL</td>
          <td>TYPE</td>
          <td>Type_E</td>
          <td>Type_T</td>
          <td>Full name</td>
        </tr>
        {posts.map((item) => (
          <tr>
            <td>{item.N_name}</td>
            <td>{item.N_shortname}</td>
            <td>{item.marketcap}</td>
            <td>{item.N_COMPANY_T}</td>
            <td>{item.N_COMPANY_E}</td>
            <td>{item.N_URL}</td>
            <td>{item.F_TYPE}</td>
            <td>{item.N_BUSINESS_TYPE_E}</td>
            <td>{item.N_BUSINESS_TYPE_T}</td>
            <td>{item.N_fullname}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
