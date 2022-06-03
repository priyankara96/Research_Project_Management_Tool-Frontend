import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, Input } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { jsPDF } from "jspdf";

export default function ViewStudentMarkList() {
  const [markList, setMarkList] = useState([]);
  const [loading, setLoading] = useState(true);

  //fectch student lists
  const fetchMarkList = async () => {
    setLoading(true);
    try {
      const result = await axios.get(`https://backend-research-tool.herokuapp.com/submissions`);
      if (result.status === 200) {
        setMarkList(result.data);
      }
      console.log("Student group list ", result.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarkList();
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
      title: "Evaluate",
      dataIndex: "mark",
      key: "mark",
    },
  ];

  //Search function
  const { Search } = Input;

  const onSearch = (value) => {
    let result = [];
    result = markList.filter((data) => {
      if (value == "") {
        window.location.reload(true);
        return data;
      } else {
        return data.groupID.toLowerCase().search(value) != -1;
      }
    });
    setMarkList(result);
  };

  let doc;

  //Download Student List
  const downloadPDF = () => {
    doc = new jsPDF({
      orientation: "landscape",
      unit: "pt",
      format: [1700, 1000],
    });
    doc.html(document.getElementById("downloadMarkList"), {
      callback: function (pdf) {
        pdf.save("Student Evaluations.pdf");
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

      <div id="downloadMarkList">
        <center>
          <h3>4th Year Research Project - Student Evaluations</h3>
        </center>
        <br />
        <br />
        <Table
          columns={columns}
          dataSource={markList}
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
          Download Student Marks List
        </Button>
      </center>
      <br />
      <br />
    </div>
  );
}
