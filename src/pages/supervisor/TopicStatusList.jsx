import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, Input } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { jsPDF } from "jspdf";

export default function TopicStatusList() {

    const [topicList, setTopicList] = useState([]);
    const [loading, setLoading] = useState(true);
  
    //fectch student lists
    const fetchTopics = async () => {
      setLoading(true);
      try {
        const result = await axios.get(`http://localhost:8000/researchTopics`);
        if (result.status === 200) {
            setTopicList(result.data);
        }
        console.log("Research topic list ", result.data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchTopics();
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
          title: "Research Topic",
          dataIndex: "researchTopic",
          key: "researchTopic",
        },
        {
          title: "Description",
          dataIndex: "description",
          key: "description",
        },
        {
          title: "Submitted Date and Time",
          dataIndex: "submitDateTime",
          key: "submitDateTime",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
          },
          {
            title: "Feedback",
            dataIndex: "feedback",
            key: "feedback",
          }
        
      ];
  
    //Search function
    //Search function
  const { Search } = Input;

  const onSearch = (value) => {
    let result = [];
    result = topicList.filter((data) => {
      if (value == "") {
        window.location.reload(true);
        return data;
      } else {
        return (
          data.groupID.toLowerCase().search(value) != -1 ||
          data.researchTopic.toLowerCase().search(value) != -1 ||
          data.description.toLowerCase().search(value) != -1 
        );
      }
    });
    setTopicList(result);
  };
  
    let doc;
  
    //Download topic List
    const downloadPDF = () => {
      doc = new jsPDF({
        orientation: "landscape",
        unit: "pt",
        format: [1700, 1000],
      });
      doc.html(document.getElementById("downloadTopicList"), {
        callback: function (pdf) {
          pdf.save("Research Topic Evaluations.pdf");
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

      <div id="downloadTopicList">
        <center>
          <h3>4th Year Research Project - Research Topic Evaluations</h3>
        </center>
        <br />
        <br />
        <Table
          columns={columns}
          dataSource={topicList}
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
          Download Topic Evaluation List
        </Button>
      </center>
      <br />
      <br />
    </div>
  )
}
