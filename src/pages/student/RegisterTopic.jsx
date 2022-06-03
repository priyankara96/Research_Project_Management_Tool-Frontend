import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { useHistory } from "react-router-dom";
import useRequest from "../../services/RequestContext";
import useUser from "../../services/UserContext";
import "antd/dist/antd.css";
import "./Student.css";
import Swal from "sweetalert2";
import teamImg from "../../images/team.png";

export default function RegisterTopic() {
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

  //Demo button function
  onFill = () => {
    form.setFieldsValue({
      groupID: "Y4G002",
      researchTopic: "Robotics Aid in Elder Age",
      description: "We are going to develop a robot to aid elderly people",
    });
  };

  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 16,
    },
  };

  //fetch the registered topic if already registered
  const fetchResearchGroup = async () => {
    setLoading(true);
    try {
      const result = await request.get(`studentresearchtopic/${user._id}`);
      console.log(result);
      if (result.data[0]._id != null) {
        await Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You have already registered your topic. You cannot register more than one research topic!",
        });
        history.push(`/ViewResearchTopic/${result.data[0]._id}`);
        window.location.reload(true);
      }
      console.log(" My topics get ", result.data[0]._id);
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
      const result = request.post("researchTopic", values);
      if (result) {
        await Swal.fire(
          "Successful!",
          "Your Have Successfully Registered Your Research Topic.",
          "success"
        );
        const test = (await result).data;
        history.push(`/ViewResearchTopic/${test}`);
        window.location.reload(true);
      }
    } catch (e) {
      console.log("post topic registration error ", e);
    }
    form.resetFields();
  };

  //reset fields
  const onReset = () => {
    form.resetFields();
  };

  return (
    <div>
      <center>
        <br />
        <br />

        <h3 className="heading">Topic Registration</h3>
        <br />

        <img src={teamImg} className="topicImg"></img><br/><br/><br/><br/><br/>
        <div className="groupContainer">
          <Form
            {...layout}
            form={form}
            name="addTopic"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <div className="topicContainer">
              <br />
              <Form.Item
                label="Group ID"
                name="groupID"
                rules={[{ required: true }]}
              >
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item
                label="Research Topic"
                name="researchTopic"
                rules={[{ required: true }]}
              >
                <Input placeholder="Research Topic" />
              </Form.Item>
              <Form.Item
                label="Description"
                name="description"
                rules={[{ required: true }]}
              >
                <Input placeholder="Description" />
              </Form.Item>
              <Form.Item label="Submit Date and Time" name="submitDateTime">
                <Input defaultValue={new Date()} disabled="true" />
              </Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>{" "}
              &nbsp;&nbsp;
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
              &nbsp;&nbsp;
              <Button htmlType="button" onClick={onFill}>
                Demo
              </Button>
            </div>
          </Form>
        </div>
      </center>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
