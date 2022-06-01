import React, { useState, useEffect } from "react";
import { Button, Form, Input } from "antd";
import "antd/dist/antd.css";
import { storage } from "./firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import useRequest from "../../services/RequestContext";
import Swal from "sweetalert2";
import docImage from "../../images/doc3.jpg";
import uploadImg from "../../images/uploadPH.jpg";
import "./Student.css";
import axios from "axios";

export default function Submissions() {
  const [upload, setUpload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submissionList, setSubmissionList] = useState([]);
  const [progress, setProgress] = useState(0);
  const [form] = Form.useForm();
  const { request } = useRequest();

  //fetch uploaded submission
  const fetchSubmissions = async (value) => {
    console.log(value);
    setLoading(true);
    try {
      const result = await axios.get(
        `http://localhost:8000/mysubmission/${value}`
      );
      if (result.status === 200) {
        setSubmissionList(result.data);
      }

      console.log(" Submission get", result.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  //Uploading a file to firebase
  const uploadFile = (file) => {
    if (!file) return;

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          setUpload(url);
        });
      }
    );
  };

  //capturing user entered file
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFile(file);
  };

  //adding submission
  const onFinish = async (values) => {
    values.submitURL = upload;
    console.log(values);
    try {
      const result = await request.post("submission", values);
      if (result) {
        Swal.fire(
          "Successful!",
          "Your Have Successfully Submitted Your Document.",
          "success"
        );
        console.log("id sub", result.data);
        fetchSubmissions(result.data);
        // window.location.reload(true);
      }
    } catch (e) {
      console.log("post group registration error ", e);
    }
    form.resetFields();
  };

  //Reset fields
  const onReset = () => {
    form.resetFields();
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 10 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
  };

  return (
    <div>
      <img src={uploadImg} className="uploadImg"></img>

      <div className="submission-container">
        <center>
          <br />
          <h1>Submissions</h1>
          <br />

          <form onSubmit={formHandler}>
            <input type="file" />
            <br />

            <button type="submit" className="uploadButton">
              Upload
            </button>
          </form>
          <br />
          <h6>Uploaded {progress} %</h6>

          <br />

          <center>
            <div className="doc">
              {submissionList && (
                <a href={submissionList.submitURL}>
                  <img src={docImage} className="docImage"></img>
                </a>
              )}
            </div>
          </center>
          <br />
          <br />
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
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
            <Form.Item name="submitURL" label="Submit URL" hidden="true">
              <Input />
            </Form.Item>
            <Form.Item
              name="subject"
              label="Subject"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="submitDateTime" label="Submission Date">
              <Input defaultValue={new Date()} disabled="true" />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" className="uploadButton">
                Submit
              </Button>
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              <Button htmlType="button" onClick={onReset} className="resetBtn2">
                Reset
              </Button>
            </Form.Item>
          </Form>
          <br />
          <br />
        </center>
      </div>
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
