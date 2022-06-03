import React, { useState, useEffect } from "react";
import { Form, Table, Button, Input, Modal } from "antd";
import "antd/dist/antd.css";
import Swal from "sweetalert2";
import axios from "axios";
import docsImg from "../../images/docs.png";
import { ArrowRightOutlined, PlusOutlined } from "@ant-design/icons";

export default function StudentSubmissionView() {
  const [loading, setLoading] = useState(true);
  const list = [];
  const [sublist, setSubList] = useState([]);
  const [submissionList, setSubmissionList] = useState([]);
  const [data, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = async (values) => {
    console.log(values);
    await setData(values);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //fetch submissions
  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const result = await axios.get(`https://backend-research-tool.herokuapp.com/submissions`);
      if (result.status === 200) {
        setSubmissionList(result.data);
        for (var i = 0; i < result.data.length; i++) {
          if (result.data[i].mark == null) {
            list.push(result.data[i]);
          }
        }
        setSubList(list);
      }

      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const onFinish = async (values) => {
    try {
      data.mark = values.mark;
      const result = axios.put(
        `https://backend-research-tool.herokuapp.com/submission/${data._id}`,
        data
      );
      console.log(data);
      if (result) {
        await Swal.fire("Mark Added Successfully !");
        fetchSubmissions();
        window.location.reload(true);
      }
    } catch (e) {
      console.log("Error in adding mark ", e);
    }
  };

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
          <a href={`${record.submitURL}`}>
            <img src={docsImg} className="documentImg"></img>
          </a>
        </React.Fragment>
      ),
    },
    {
      title: "Submitted Date and Time",
      dataIndex: "submitDateTime",
      key: "submitDateTime",
    },
    {
      title: "Evaluate",
      dataIndex: "marks",
      key: "marks",
      render: (text, record, index) => (
        <React.Fragment key={index}>
          <Button
            type="primary"
            onClick={() => showModal(record)}
            icon={<PlusOutlined />}
          />
        </React.Fragment>
      ),
    },
  ];

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 16,
    },
  };

  return (
    <div>
      <br />
      <center>
        <h3>Student Submissions</h3>
      </center>
      <br />
      <Table
        columns={columns}
        dataSource={sublist}
        size="middle"
        pagination={false}
        className="crsTable"
      />

      <Modal
        title="Evaluate"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h6>Group ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {data.groupID}</h6>
        <h6>Subject &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {data.subject}</h6>

        <br />
        <br />
        {data && (
          <Form
            {...layout}
            name="nest-messages"
            form={form}
            key={data._id}
            onFinish={onFinish}
          >
            <Form.Item
              name="mark"
              label="Mark"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}
      </Modal>
      <br />
      <br />
      <center>
        <a href="/ViewStudentMarkList">
          <Button type="primary" icon={<ArrowRightOutlined />}>
            Proceed To Student Marks Download
          </Button>
        </a>
      </center>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
