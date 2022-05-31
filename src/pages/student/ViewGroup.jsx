import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import "antd/dist/antd.css";
import "./Student.css";
import Swal from "sweetalert2";
import groupImg from "../../images/teamwork.png";
import member from "../../images/member.png";

export default function ViewGroup() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const { id } = useParams();

  //validations
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  //fetching specific group
  const fetchGroup = async (val) => {
    setLoading(true);
    try {
      const result = await axios.get(
        `http://localhost:8000/researchgroup/${val}`
      );

      if (result.status === 200) {
        setData(result.data);
        console.log("test ", result.data);
      }

      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchGroup(id);
    }
  }, [id]);

  let history = useHistory();

  //update research group
  const onFinish = async (values) => {
    try {
      const result = await axios.put(
        `http://localhost:8000/researchgroup/${data._id}`,
        values
      );
      if (result) {
        Swal.fire(
          "Successful!",
          "Your Have Successfully Updated Your Research Group.",
          "success"
        );
      }
    } catch (e) {
      console.log("update research group error ", e);
    }
  };

  //delete research group
  const onDelete = async (value) => {
    try {
      await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!, You will need to re-register a research group !!!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const result = axios.delete(
            `http://localhost:8000/researchgroup/${value}`
          );
          if (result) {
            Swal.fire("Deleted!", "Your Group has been deleted.", "success");
            history.push(`/CreateGroup`);
            window.location.reload(true);
          }
        }
      });
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong in deleting!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <div>
      <center>
        <br />
        <br />
        <img src={groupImg} className="groupImg"></img>
        <h3 className="heading">Your Research Group</h3>
        <h6>
          <br />
          <p className="note">
            Note: If You want to change the group members you need to make a
            special request
          </p>
        </h6>
        <br />
        <br />
        <div className="groupContainer">
          {data && (
            <Form
              {...layout}
              form={form}
              name="addmarks"
              initialValues={data}
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <div className="memberContainer">
                <img src={member} className="memberImg"></img>
                <h5 className="memberHeading">Leader</h5>
                <br />
                <Form.Item
                  label="Name"
                  name="leaderName"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Name" disabled />
                </Form.Item>
                <Form.Item
                  label="Registration Number"
                  name="leaderRegNo"
                  rules={[{ required: true, min: 10, max: 10 }]}
                >
                  <Input placeholder="Registration Number" disabled />
                </Form.Item>
                <Form.Item
                  label="SLIIT Email"
                  name="leaderSliitMail"
                  rules={[{ type: "email", required: true }]}
                >
                  <Input placeholder="SLIIT Email" />
                </Form.Item>
                <Form.Item
                  label="Personal Email"
                  name="leaderPersonalMail"
                  rules={[{ type: "email", required: true }]}
                >
                  <Input placeholder="Personal Email" />
                </Form.Item>
                <Form.Item
                  label="Contact Number"
                  name="leaderContactNo"
                  rules={[{ required: true, min: 10, max: 10 }]}
                >
                  <Input placeholder="Contact Number" />
                </Form.Item>
              </div>
              <div className="memberContainer">
                <img src={member} className="memberImg"></img>
                <h5 className="memberHeading">Member 1</h5>
                <br />
                <Form.Item
                  label="Name"
                  name="member1Name"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Name" disabled />
                </Form.Item>
                <Form.Item
                  label="Registration Number"
                  name="member1RegNo"
                  rules={[{ required: true, min: 10, max: 10 }]}
                >
                  <Input placeholder="Registration Number" disabled />
                </Form.Item>
                <Form.Item
                  label="SLIIT Email"
                  name="member1SliitMail"
                  rules={[{ type: "email", required: true }]}
                >
                  <Input placeholder="SLIIT Email" />
                </Form.Item>
                <Form.Item
                  label="Personal Email"
                  name="member1PersonalMail"
                  rules={[{ type: "email", required: true }]}
                >
                  <Input placeholder="Personal Email" />
                </Form.Item>
                <Form.Item
                  label="Contact Number"
                  name="member1ContactNo"
                  rules={[{ required: true, min: 10, max: 10 }]}
                >
                  <Input placeholder="Contact Number" />
                </Form.Item>
              </div>
              <div className="memberContainer">
                <img src={member} className="memberImg"></img>
                <h5 className="memberHeading">Member 2</h5>
                <br />
                <Form.Item
                  label="Name"
                  name="member2Name"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Name" disabled />
                </Form.Item>
                <Form.Item
                  label="Registration Number"
                  name="member2RegNo"
                  rules={[{ required: true, min: 10, max: 10 }]}
                >
                  <Input placeholder="Registration Number" disabled />
                </Form.Item>
                <Form.Item
                  label="SLIIT Email"
                  name="member2SliitMail"
                  rules={[{ type: "email", required: true }]}
                >
                  <Input placeholder="SLIIT Email" />
                </Form.Item>
                <Form.Item
                  label="Personal Email"
                  name="member2PersonalMail"
                  rules={[{ type: "email", required: true }]}
                >
                  <Input placeholder="Personal Email" />
                </Form.Item>
                <Form.Item
                  label="Contact Number"
                  name="member2ContactNo"
                  rules={[{ required: true, min: 10, max: 10 }]}
                >
                  <Input placeholder="Contact Number" />
                </Form.Item>
              </div>
              <div className="memberContainer">
                <img src={member} className="memberImg"></img>
                <h5 className="memberHeading">Member 3</h5>
                <br />
                <Form.Item
                  label="Name"
                  name="member3Name"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Name" disabled />
                </Form.Item>
                <Form.Item
                  label="Registration Number"
                  name="member3RegNo"
                  rules={[{ required: true, min: 10, max: 10 }]}
                >
                  <Input placeholder="Registration Number" disabled />
                </Form.Item>
                <Form.Item
                  label="SLIIT Email"
                  name="member3SliitMail"
                  rules={[{ type: "email", required: true }]}
                >
                  <Input placeholder="SLIIT Email" />
                </Form.Item>
                <Form.Item
                  label="Personal Email"
                  name="member3PersonalMail"
                  rules={[{ type: "email", required: true }]}
                >
                  <Input placeholder="Personal Email" />
                </Form.Item>
                <Form.Item
                  label="Contact Number"
                  name="member3ContactNo"
                  rules={[{ required: true, min: 10, max: 10 }]}
                >
                  <Input placeholder="Contact Number" />
                </Form.Item>
              </div>
              <Button type="primary" className="updttButton" htmlType="submit">
                Update
              </Button>
              <Button
                type="primary"
                className="dlttButton"
                onClick={() => onDelete(data._id)}
              >
                Delete
              </Button>
            </Form>
          )}
        </div>
      </center>
    </div>
  );
}
