import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import "antd/dist/antd.css";
import "./Student.css";
import Swal from "sweetalert2";
import teamImg from "../../images/researchteam.png";

export default function ViewResearchTopic() {
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
      span: 13,
    },
  };

  //fetching specific group
  const fetchTopic = async (val) => {
    setLoading(true);
    try {
      const result = await axios.get(
        `http://localhost:8000/researchTopic/${val}`
      );

      if (result.status === 200) {
        setData(result.data);
        console.log("topic ", result.data);
      }

      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchTopic(id);
    }
  }, [id]);

  let history = useHistory();

  //update research group
  const onFinish = async (values) => {
    try {
      const result = await axios.put(
        `http://localhost:8000/researchTopics/${data._id}`,
        values
      );
      if (result) {
        Swal.fire(
          "Successful!",
          "Your Have Successfully Updated Your Research Topic.",
          "success"
        );
      }
    } catch (e) {
      console.log("update research topic error ", e);
    }
  };

  //delete research group
  const onDelete = async (value) => {
    try {
      await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!, You will need to re-register a research topic !!!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const result = axios.delete(
            `http://localhost:8000/researchTopics/${value}`
          );
          if (result) {
            Swal.fire("Deleted!", "Your Topic has been deleted.", "success");
            history.push(`/RegisterTopic`);
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
      <br />
      <br />
      <center>
        <h3 className="heading">Your Research Topic</h3>

        <br />

        <h6 className="note">
          Note: You can only delete or update the research topic with the
          permission of supervisor/co-supervisor
        </h6>
      </center>
      <img src={teamImg} className="topicImg"></img>
      <div className="topicContainer">
        {data && (
          <Form
            {...layout}
            form={form}
            initialValues={data}
            name="addTopic"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
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
            <center>
              <Button type="primary" htmlType="submit">
                Update
              </Button>
              &nbsp;&nbsp;&nbsp;
              <Button type="primary" onClick={() => onDelete(data._id)}>
                Delete
              </Button>
            </center>
          </Form>
        )}
      </div>
      <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
      <br />
    </div>
  );
}
