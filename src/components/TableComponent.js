import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button
} from "@mui/material";
import axios from "axios";
import {FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'



const TableComponent = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const getUserInfo = async() => {
      const userInfoData = await fetchUserInfoData();
      console.log(userInfoData);
      setUserInfo(userInfoData);
    };

    getUserInfo();
    
  }, []);

  const deleteUserData = async(id) => {
    console.log('delete user data', id);
    const userInfoResult = await axios.delete(`http://localhost:5000/userInfo/${id}`);
    const userInfoData = await fetchUserInfoData();
    setUserInfo(userInfoData);
  };

  const deleteAllUsers = async () => {
    console.log('deleteAllUsers');
    userInfo.map(async (user) => {
      console.log('delete user data', user.id);
      const userInfoResult = await axios.delete(`http://localhost:5000/userInfo/${user.id}`);
    });
    
    const userInfoData = await fetchUserInfoData();
    setUserInfo(userInfoData);
  };

  const fetchUserInfoData = async () => {
    const userInfoResult = await axios.get('http://localhost:5000/userInfo');
    const userInfoData = await userInfoResult.data;
    return userInfoData;
  }


  return (
    <>
    <Button color="error" variant="contained" onClick={async () => await deleteAllUsers()} style={{ marginTop:100,marginLeft:50 }}>DELETE ALL</Button>
    <Link to="/addUser" style={{textDecoration: 'none'}}><Button color="success" variant="contained"  style={{ marginTop:100,marginLeft:1000 }}>ADD USER</Button></Link>
    <TableContainer
      sx={{ maxHeight: "300px" }}
      component={Paper}
      style={{ marginTop: 100 }}
    >
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="center">Email Address</TableCell>
            <TableCell align="center">Contact Number</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userInfo.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.contactNumber}</TableCell>
              <TableCell align="center"><Button color="error" onClick={async () => await deleteUserData(row.id)}><FaTimes className='cross'></FaTimes></Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default TableComponent;
