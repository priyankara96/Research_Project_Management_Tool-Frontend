import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { useHistory } from "react-router-dom";
import useRequest from "../../services/RequestContext";
import useUser from "../../services/UserContext";
import "antd/dist/antd.css";
import "./Student.css";
import Swal from "sweetalert2";

export default function CreateGroup() {
  const [form] = Form.useForm();

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

  let history = useHistory();
  const { request } = useRequest();
  const { user } = useUser();
  const [researchGroup, setResearchGroup] = useState([]);
  const [loading, setLoading] = useState(true);

  //fetch research group if the student has already created a group
  const fetchResearchGroup = async () => {
    setLoading(true);
    try {
      const result = await request.get(`studentresearchgroup/${user._id}`);
      if (result.status === 200) {
        await Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You have already registered your group. You cannot create more than one research group!",
        });
        history.push(`/ViewGroup/${result.data[0]._id}`);
        window.location.reload(true);
      }
      console.log(" My Courses get ", result.data[0]._id);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user && user._id) {
      fetchResearchGroup();
    }
  }, [user]);

  const onFinish = async (values) => {
    console.log(values);
    try {
      const result = request.post("researchgroup", values);
      if (result) {
        await Swal.fire(
          "Successful!",
          "Your Have Successfully Registered Your Research Group.",
          "success"
        );
        const test = (await result).data;
        history.push(`/ViewGroup/${test}`);
        window.location.reload(true);
      }
    } catch (e) {
      console.log("post group registration error ", e);
    }
    form.resetFields();
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div>
      <center>
        <br />
        <br />
        <h3>Group Registration</h3>
        <br />
        <br />
        <div className="groupContainer">
          <Form
            {...layout}
            form={form}
            name="addmarks"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <div className="memberContainer">
              <h5>Leader</h5>
              <br />
              <Form.Item
                label="Name"
                name="leaderName"
                rules={[{ required: true }]}
              >
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item
                label="Registration Number"
                name="leaderRegNo"
                rules={[{ required: true, min: 10, max: 10 }]}
              >
                <Input placeholder="Registration Number" />
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
              <h5>Member 1</h5>
              <br />
              <Form.Item
                label="Name"
                name="member1Name"
                rules={[{ required: true }]}
              >
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item
                label="Registration Number"
                name="member1RegNo"
                rules={[{ required: true, min: 10, max: 10 }]}
              >
                <Input placeholder="Registration Number" />
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
              <h5>Member 2</h5>
              <br />
              <Form.Item
                label="Name"
                name="member2Name"
                rules={[{ required: true }]}
              >
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item
                label="Registration Number"
                name="member2RegNo"
                rules={[{ required: true, min: 10, max: 10 }]}
              >
                <Input placeholder="Registration Number" />
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
              <h5>Member 3</h5>
              <br />
              <Form.Item
                label="Name"
                name="member3Name"
                rules={[{ required: true }]}
              >
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item
                label="Registration Number"
                name="member3RegNo"
                rules={[{ required: true, min: 10, max: 10 }]}
              >
                <Input placeholder="Registration Number" />
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

            <Button type="primary" className="submitbutton" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset} className="resetBtn">
              Reset
            </Button>
          </Form>
        </div>
      </center>
    </div>
  );
}
