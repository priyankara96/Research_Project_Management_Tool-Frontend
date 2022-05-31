import React, { useState, useEffect } from "react";
import { Table, Button, Input } from "antd";
import axios from "axios";

export default function StudentSubmissionView() {
  const [loading, setLoading] = useState(true);
  const [submissionList, setSubmissionList] = useState([]);

  //fetch submissions
  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const result = await axios.get(`http://localhost:8000/submissions`);
      if (result.status === 200) {
        setSubmissionList(result.data);
      }
      console.log(" Marks get ", result);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Group ID",
      dataIndex: "groupID",
      key: "groupID",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Submitted File",
      dataIndex: "submitURL",
      key: "submitURL",
      render: (text, record, index) => (
        <React.Fragment key={index}>
          <a href={`${record.submitURL}`}>${record.submitURL}</a>
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
    <div>
      <br />
      <center>
        {" "}
        <h3>Student Submissions</h3>
      </center>
      <br />
      <Table
        columns={columns}
        dataSource={submissionList}
        size="middle"
        pagination={false}
        className="crsTable"
      />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
