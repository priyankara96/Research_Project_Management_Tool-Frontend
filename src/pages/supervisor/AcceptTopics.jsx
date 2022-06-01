import React, { useState, useEffect } from "react";
import { Form, Table, Button, Input, Modal } from "antd";
import "antd/dist/antd.css";
import Swal from "sweetalert2";
import axios from "axios";
import { ArrowRightOutlined, PlusOutlined } from "@ant-design/icons";

export default function AcceptTopics() {
  const [loading, setLoading] = useState(true);
  const list = [];
  const [sublist, setSubList] = useState([]);
  const [data, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = async (values) => {
    console.log(values);
    setData(values);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 16,
    },
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
      title: "Evaluate",
      dataIndex: "accept",
      key: "accept",
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

  //fetch topics
  const fetchTopics = async () => {
    setLoading(true);
    try {
      const result = await axios.get(`http://localhost:8000/researchTopics`);
      if (result.status === 200) {
        for (var i = 0; i < result.data.length; i++) {
          if (result.data[i].status == null) {
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
    fetchTopics();
  }, []);

  const onFinish = async (values) => {
    try {
      data.status = values.status;
      data.feedback = values.feedback;
      const result = axios.put(
        `http://localhost:8000/researchTopics/${data._id}`,
        data
      );
      console.log(data);
      if (result) {
        await Swal.fire("Status Updated Successfully !");
        fetchTopics();
        window.location.reload(true);
      }
    } catch (e) {
      console.log("Error in updating status ", e);
    }
  };

  return (
    <div>
      <br />
      <center>
        <h3>Research Topic Evaluations</h3>
      </center>
      <br />
      <Table
        columns={columns}
        dataSource={sublist}
        size="middle"
        pagination={false}
        className="dataTable"
      />

      <Modal
        title="Evaluate"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h6>
          Group ID
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          {data.groupID}
        </h6>
        <h6>
          Research Topic &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {data.researchTopic}
        </h6>

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
              name="status"
              label="Status"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="feedback"
              label="Feedback"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.TextArea />
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
        <a href="/TopicStatusList">
          <Button type="primary" icon={<ArrowRightOutlined />}>
            Proceed To Topic Evaluation Download
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
