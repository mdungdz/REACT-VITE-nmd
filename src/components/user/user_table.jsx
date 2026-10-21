import { Table } from "antd";
import { fetchAllUserAPI } from "../../services/api_services";
import { useEffect, useState } from "react";

const UserTable = () => {

  const [dataUser, setDataUser]= useState([
    {_id: "nmd", fullName: 25, email: "hn"}

  ]);

  useEffect(()=>{
    console.log("run useEffect");
    loadUser();
  }, []);
  

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
  
    },
    {
      title: "Email",
      dataIndex: "email",
  
    }
  ];


  const loadUser=async()=>{
    const res=await fetchAllUserAPI()
    setDataUser(res.data)
  }

  
  console.log(">>>run render");


  return <Table columns={columns} dataSource={dataUser} rowKey={"_id"} />;
};

export default UserTable;
