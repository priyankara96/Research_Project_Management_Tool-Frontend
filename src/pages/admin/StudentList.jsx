import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, Input } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { jsPDF } from "jspdf";
import "./styles1.css";

export default function StudentList() {
  const [studentList, setStudentList] = useState([]);
  const [loading, setLoading] = useState(true);
  
  //fectch student lists
  const fetchStudentGroups = async () => {
    setLoading(true);
    try {
      const result = await axios.get(`https://backend-research-tool.herokuapp.com/researchgroups`);
      if (result.status === 200) {
        setStudentList(result.data);
      }
      console.log("Student group list ", result.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudentGroups();
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
      title: "Leader",
      dataIndex: "leaderName",
      key: "leaderName",
    },
    {
      title: "Member 1",
      dataIndex: "member1Name",
      key: "member1Name",
    },
    {
      title: "Member 2",
      dataIndex: "member2Name",
      key: "member2Name",
    },
    {
      title: "Member 3",
      dataIndex: "member3Name",
      key: "member3Name",
    },
  ];

  //Search function
  const { Search } = Input;

  const onSearch = (value) => {
    let result = [];
    result = studentList.filter((data) => {
      if (value == "") {
        window.location.reload(true);
        return data;
      } else {
        return (
          data.leaderName.toLowerCase().search(value) != -1 ||
          data.member1Name.toLowerCase().search(value) != -1 ||
          data.member2Name.toLowerCase().search(value) != -1 ||
          data.member3Name.toLowerCase().search(value) != -1
        );
      }
    });
    setStudentList(result);
  };

  let doc;

  //Download Student List
  const downloadPDF = () => {
    doc = new jsPDF({
      orientation: "landscape",
      unit: "pt",
      format: [1700, 1000],
    });
    doc.html(document.getElementById("downloadstdlist"), {
      callback: function (pdf) {
        pdf.save("Research-Project-Student-List.pdf");
      },
    });
  };

  return (
    <div>
      <Search
        placeholder="Search"
        onSearch={onSearch}
        enterButton
        className="searchbar"
      />

      <br />
      <br />

      <div id="downloadstdlist">
        <center>
          <h3>4th Year Research Project - Student Lists</h3>
        </center>
        <br />
        <br />
        <Table
          columns={columns}
          dataSource={studentList}
          size="middle"
          pagination={false}
        />
      </div>
      <br />
      <br />
      <center>
      <Button
        type="primary"
        className="DownloadBtn"
        icon={<DownloadOutlined />}
        onClick={downloadPDF}
      >
        Download Student List
      </Button>
      </center>
      <br />
      <br />
    </div>
  );
}
