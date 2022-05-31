import React, { useState, useEffect } from "react";
import { Button, Form, Input } from "antd";
import "antd/dist/antd.css";
import { storage } from "../student/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import axios from "axios";
import Swal from "sweetalert2";

export default function AdminUpload() {
  const [upload, setUpload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [AdminUploadList, setAdminUploadList] = useState([]);
  const [progress, setProgress] = useState(0);
  const [form] = Form.useForm();

  //Reset fields
  const onReset = () => {
    form.resetFields();
  };

  //form layout
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 10 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
  };

  //post method to send uploads to db
  const onFinish = async (values) => {
    values.submitURL = upload;
    console.log(values);
    try {
      const result = await axios.post("http://localhost:8000/resources/save", values);
      if (result) {
        Swal.fire(
          "Successful!",
          "Your Have Successfully Uploaded Your File.",
          "success"
        );
      }
    } catch (e) {
      console.log("post group registration error ", e);
    }
    form.resetFields();
  };

  //file upload
  const uploadFiles = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `/admin-uploads/${file.name}`);
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
    console.log(file);
    uploadFiles(file);
  };

  return (
    <div>
      <div>
        <center>
          <br />
          <h1>Uploads</h1>
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
          <br />
          <br />
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
          >
            <Form.Item name="submitURL" label="Submit URL" hidden="true">
              <Input />
            </Form.Item>
            <Form.Item
              name="topic"
              label="Topic"
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
    </div>
  );
}
