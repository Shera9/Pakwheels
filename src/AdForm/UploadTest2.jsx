import React, { useState } from "react";
import { render } from "@testing-library/react";
import { imgDb } from "../Firebase";
import { ref, uploadBytesResumable } from "firebase/storage";

const UploadTest2 = () => {
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  const handleUpload = () => {
    if (!images) {
        alert("Please upload an image first!");
    }
    const promises = [];

    for(let i = 0; i<images.length; i++){
        const storageRef = ref(imgDb,`/images/${images[i].name}`);
        
        const uploadTask = uploadBytesResumable(storageRef, images[i])
        .then(() => {
            console.log("success");
        }).catch((error) => console.log("error",error))
    }
    // images.map((image) => {

    //   const storageRef = ref(imgDb,`/images/${image[i].name}`);
      

    //   promises.push(uploadTask);
    //   uploadTask.on(
    //     "state_changed",
    //     (snapshot) => {
    //       const progress = Math.round(
    //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //       );
    //       setProgress(progress);
    //     },
    //     (error) => {
    //       console.log(error);
    //     },
    //     async () => {
    //       await imgDb
    //         .ref("images")
    //         .child(image.name)
    //         .getDownloadURL(uploadTask.snapshot.ref).then((url) =>  {  
    //              console.log(url);
    //     })
    //         .then((urls) => {
    //           setUrls((prevState) => [...prevState, urls]);
    //         });
    //     }
    //   );
    // });

    // Promise.all(promises)
    //   .then(() => alert("All images uploaded"))
    //   .catch((err) => console.log(err));
  };

  console.log("images: ", images);
  console.log("urls", urls);

  return (
    <div>
      <progress value={progress} max="100" />
      <br />
      <br />
      <input type="file" multiple onChange={(e)=>setImages(e.target.files)} />
      <button onClick={handleUpload}>Upload</button>
      <br />
      {urls.map((url, i) => (
        <div key={i}>
          <a href={url} target="_blank">
            {url}
          </a>
        </div>
      ))}
      <br />
      {urls.map((url, i) => (
        <img
          key={i}
          style={{ width: "500px" }}
          src={url || "http://via.placeholder.com/300"}
          alt="firebase-image"
        />
      ))}
    </div>
  );
};
export default UploadTest2;