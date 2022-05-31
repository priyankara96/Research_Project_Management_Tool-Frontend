import React, { useState, useEffect } from "react";
import axios from "axios";
import uniqueRandom from "unique-random";
import { Form, Input, Button, Modal, Search, Table } from "antd";
import "antd/dist/antd.css";
import Swal from "sweetalert2";
import { ArrowRightOutlined, PlusOutlined } from "@ant-design/icons";

export default function StudentDetails() {
  const [studentList, setStudentList] = useState([]);
  const [student, setStudent] = useState([]);
  const list = [];
  const [groupList, setGroupList] = useState([]);
  const [loading, setLoading] = useState(true);
  const random = uniqueRandom(1, 100);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const showModal = async (values) => {
    console.log(values);
    await setStudent(values);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //fectch student groups
  const fetchStudentGroups = async () => {
    setLoading(true);
    try {
      const result = await axios.get(`http://localhost:8000/researchgroups`);
      if (result.status === 200) {
        setStudentList(result.data);
        for (var i = 0; i < result.data.length; i++) {
          if (result.data[i].groupID == null) {
            list.push(result.data[i]);
          }
        }
        setGroupList(list);
        console.log(studentList[0].groupID);
      }

      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudentGroups();
  }, []);

  //Adding Group ID
  const onFinish = (values) => {
    try {
      student.groupID = values.groupID;
      const result = axios.put(
        `http://localhost:8000/researchgroup/${student._id}`,
        student
      );
      console.log(student);
      if (result) {
        Swal.fire("Group ID Added Successfully !");
      }
    } catch (e) {
      console.log("Error in adding group id ", e);
    }
  };

  //Search function
  const { Search } = Input;

  const onSearch = (value) => {
    let result = [];
    result = groupList.filter((data) => {
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
    setGroupList(result);
  };

  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      render: (text, record, index) => index + 1,
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
    {
      title: "Group ID",
      dataIndex: "groupID",
      key: "groupID",
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

  return (
    <div className="studentlist-container">
      <center>
        <br />
        <br />
        <Search
          placeholder="Search"
          onSearch={onSearch}
          enterButton
          className="searchbar"
        />

        <br />
        <br />
        <h3 className="heading">Student List</h3>
        <br />
        <br />

        <Table
          columns={columns}
          dataSource={groupList}
          size="middle"
          pagination={false}
        />

        <Modal
          title="Research Group"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <h6>
            Leader
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            {student.leaderName}
          </h6>
          <h6>Member 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {student.member1Name}</h6>
          <h6>Member 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {student.member2Name}</h6>
          <h6>Member 3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {student.member3Name}</h6>

          <br />
          <br />
          {student && (
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              form={form}
              key={student._id}
            >
              <Form.Item
                name="groupID"
                label="Group ID"
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
        <a href="/StudentList">
          <Button type="primary" icon={<ArrowRightOutlined />}>
            {" "}
            Proceed To Student List Download
          </Button>
        </a>
        <br />
        <br />
      </center>
    </div>
  );
}
