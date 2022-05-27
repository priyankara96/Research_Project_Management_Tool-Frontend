
import React, { useState, useEffect } from "react";
import { Button, Form, Input } from "antd";
import "antd/dist/antd.css";
import { storage } from "./firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import Swal from "sweetalert2";
import docImage from "../../images/doc3.jpg";


export default function AdminUpload() {
  const [upload, setUpload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [AdminUploadList, setAdminUploadList] = useState([]);
  const [progress, setProgress] = useState(0);
  const [form] = Form.useForm();
  const { request } = useRequest();
  const { user } = useUser();

  const fetchAdminUpload = async () => {
    setLoading(true);
    try {
      const result = await request.get('/resources');
      if (result.status === 200) {
        setSubmissionList(result.data);
      }
      console.log(" Submission get", result);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user && user._id) {
      fetchAdminUpload();
    }
  }, [user]);

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

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFile(file);
  };

  //   if (upload) {

  //       <div>
  //         <form onSubmit={formHandler}>
  //           <input type="file" />
  //           <button type="submit">Upload</button>
  //         </form>
  //         <p>Uploaded {progress} %</p>
  //         <a href={upload}>
  //           <img src={docImage} className="docImage"></img>
  //         </a>
  //       </div>

  //   }

  const onFinish = (values) => {
    values.submitURL = upload;
    console.log(values);
    try {
      const result = request.post("submission", values);
      if (result) {
        Swal.fire(
          "Successful!",
          "Your Have Successfully Submitted Your Document.",
          "success"
        );
      }
    } catch (e) {
      console.log("post group registration error ", e);
    }
    form.resetFields();
  };

  const onReset = () => {
    form.resetFields();
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
  };

  return (
    <div>
      <center>
        <h1>Submissions</h1>
        <br />
        <br />
        <form onSubmit={formHandler}>
          <input type="file" />
          <br />
          <br />
          <button type="submit" className="uploadButton">
            Upload
          </button>
        </form>
        <br />
        <h6>Uploaded {progress} %</h6>

        <br />
        <br />

        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
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
        {submissionList.map((submit) => (
          <a href={submit.submitURL}>
            <img src={docImage} className="docImage"></img>
          </a>
        ))}
      </center>
    </div>
  );
}
