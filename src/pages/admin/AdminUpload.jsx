import React, { useState, useEffect } from 'react'
import {storage} from '../student/firebase'
import { getDownloadURL, ref, uploadBytesResumable} from '@firebase/storage';
import axios from 'axios';
import Swal from "sweetalert2";

export default function AdminUpload() {
    const [upload, setUpload] = useState(null);
    const [loading, setLoading] = useState(true);
    const [AdminUploadList, setAdminUploadList] = useState([]);
    const [progress, setProgress] = useState(0);
   
   
   
  

//     //fetch uploaded files
//     const fetchAdminUpload = async (value) => {
//         console.log(value);
//         setLoading(true);
//         try {
//  const result = await axios.get(
//      `http://localhost:8000/resources`);
//      if (result.status === 200) {
//         setAdminUploadList(result.data);
//       }
//       console.log(" Submisstion get ", result.data);
//       setLoading(false);
//     } catch (e) {
//       setLoading(false);
//         }
//     };
    //upload files
    const uploadFiles = (file) => {
        //
        if(!file) return;
        const storageRef = ref(storage, `/files/${file.name}`);
        const uploadTask = uploadBytesResumable( storageRef, file)
    
        uploadTask.on("state_changed", (snapshot) =>{
            const prog = Math.round(
                (snapshot.bytesTransferred/ snapshot.totalBytes) *100
            );
            setProgress(prog);
        }, (err) => console.log(err),
        () =>{
            getDownloadURL(uploadTask.snapshot.ref)
            .then((url) => {console.log(url);
            setUpload(url);
        });
    }
        );
    };
        //capturing user entered file
        const formHandler = (e) =>{
            e.preventDefault();
            const file = e.target[0].files[0];
            console.log(file);
            uploadFiles(file);
        };

    //     //adding uploads
    // const onFinish = async (values) => {
    //     values.submitURL = upload;
    //     console.log(value);
    // try {
    //     const result = await request.post('Resources', values);
    //     if (result){
    //         Swal.fire(
    //             "Successful!",
    //             "You have Successfully added Resource.",
    //             "success"
    //         );
    //         fetchAdminUpload(result.data);
    //     }
    // }catch (e) {
    //     console/log('Uploading is failed', e);
    // }
    
    // }
  return (
    <div>AdminUpload
        <form onSubmit={formHandler}>
            <input type='file' className='input'/>
            <button type='submit'>Upload</button>
           
        </form>
        <hr/>
        <h3>Uploaded {progress} %</h3>
    </div>
  )
}
