import React, { useState, useEffect } from "react";
import submission from "../../images/submissionfile.png";
import { Table, Button, Input } from "antd";
import "./styles1.css";
import axios from "axios";

export default function ViewAdminUpload() {

    const [uploads, setUploads] = useState([]);
    const [loading, setLoading] = useState(true);

   //fetch uploads
   const fetchUploads = async () => {
    setLoading(true);
    try {
        const result = await axios.get(`https://backend-research-tool.herokuapp.com/resources`);
        if (result.status === 200) {
            setUploads(result.data);
        }
        console.log(" Uploads get ", result);
        setLoading(false);
    } catch (e) {
        setLoading(false);
    }
};

useEffect(() => {
    fetchUploads();
},[]);

const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Topic",
      dataIndex: "topic",
      key: "topic",
    },
    {
      title: "Submitted File",
      dataIndex: "submitURL",
      key: "submitURL",
      render: (text, record, index) => (
        <React.Fragment key={index}>
          <a href={`${record.submitURL}`}><img src={submission} className="documentImg"></img></a>
        </React.Fragment>
      ),
    },
    {
      title: "Submitted Date and Time",
      dataIndex: "submitDateTime",
      key: "submitDateTime",
    },
  ];

  return (
    <div><h6> Note: Double click on file to download</h6>
        <br/><br/>
        <Table
        columns={columns}
        dataSource={uploads}
        size="middle"
        pagination={false}
        className="crsTable"
      />
    </div>
  )
}
