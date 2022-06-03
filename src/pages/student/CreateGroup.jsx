import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { useHistory } from "react-router-dom";
import useRequest from "../../services/RequestContext";
import useUser from "../../services/UserContext";
import "antd/dist/antd.css";
import "./Student.css";
import Swal from "sweetalert2";
import groupImg from "../../images/teamwork.png";
import member from "../../images/member.png";

export default function CreateGroup() {
  const [form] = Form.useForm();
  let history = useHistory();
  const { request } = useRequest();
  const { user } = useUser();
  const [loading, setLoading] = useState(true);

  //validation messages
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

  //fetch research group if the student has already created a group
  const fetchResearchGroup = async () => {
    setLoading(true);
    try {
      const result = await request.get(`studentresearchgroup/${user._id}`);
      if (result.data[0]._id != null) {
        await Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You have already registered your group. You cannot create more than one research group!",
        });
        history.push(`/ViewGroup/${result.data[0]._id}`);
        window.location.reload(true);
      }
      console.log(" My group get ", result.data[0]._id);
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

  //regsitering a research group
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

  //reset fields
  const onReset = () => {
    form.resetFields();
  };

  //Demo button function
  onFill = () => {
    form.setFieldsValue({
      leaderName: "Chamindu Priyankara",
      leaderRegNo: "IT20245631",
      leaderSliitMail: "IT20245631@my.sliit.lk",
      leaderPersonalMail: "priyankara@gmail.com",
      leaderContactNo: "0725636253",
      member1Name: "Chanduni Nethmini",
      member1RegNo: "IT20785203",
      member1SliitMail: "IT20785203@my.sliit.lk",
      member1PersonalMail: "chanduni@gmail.com",
      member1ContactNo: "0764582356",
      member2Name: "Nipuna Udayantha",
      member2RegNo: "IT20715245",
      member2SliitMail: "IT20715245@my.sliit.lk",
      member2PersonalMail: "nipuna@gmail.com",
      member2ContactNo: "0714578456",
      member3Name: "Erandika Roshani",
      member3RegNo: "IT20457120",
      member3SliitMail: "IT20457120@my.sliit.lk",
      member3PersonalMail: "erandika@gmail.com",
      member3ContactNo: "0762354120",
    });
  };

  return (
    <div data-testid="create-group">
      <center>
        <br />
        <br />
        <img src={groupImg} className="groupImg"></img>
        <h3 className="heading">Group Registration</h3>
        <br />
        <br />
        <div className="groupContainer">
          <Form
            {...layout}
            form={form}
            name="registerGroup"
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
              <img src={member} className="memberImg"></img>
              <h5 className="memberHeading">Member 1</h5>
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
              <img src={member} className="memberImg"></img>
              <h5 className="memberHeading">Member 2</h5>
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
              <img src={member} className="memberImg"></img>
              <h5 className="memberHeading">Member 3</h5>
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
            <Button
              htmlType="button"
              onClick={onFill}
              className="resetBtn"
            >
              Demo
            </Button>
          </Form>
        </div>
      </center>
    </div>
  );
}
