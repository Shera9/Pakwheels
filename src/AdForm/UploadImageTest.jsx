import { useState } from "react";
import { imgDb } from "../Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
 
function UploadImageTest() {
    // State to store uploaded file
    const [images, setImages] = useState("");
 
    // progress
    const [percent, setPercent] = useState(0);
 
    // Handle file upload event and update state
    function handleChange(event) {
        // setFile(event.target.files[0]);
    }
 
    const handleUpload = () => {
        if (!images) {
            alert("Please upload an image first!");
        }
        for(let i = 0; i<images.length; i++){
            const storageRef = ref(imgDb,`/images/${images[i].name}`);

            console.log("starting Check ", storageRef)

            const uploadTask = uploadBytesResumable(storageRef, images[i])
            .then(() => {

                console.log("success Test", storageRef, "images[i]",images[i]);
                
            }).catch((error) => console.log("error",error))
        }
 
        // const storageRef = ref(imgDb, `/files/${file.name}`);
 
        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        // const uploadTask = uploadBytesResumable(storageRef, file);
 
        // uploadTask.on(
        //     "state_changed",
        //     (snapshot) => {
        //         const percent = Math.round(
        //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        //         );
 
        //         // update progress
        //         setPercent(percent);
        //     },
        //     (err) => console.log(err),
        //     () => {
        //         // download url
        //         getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        //             console.log(url);
        //         });
        //     }
        // );
    };
 
    return (
        <div>
            <input type="file" onChange={(e) => setImages(e.target.files)} accept="/image/*" multiple/>
            <button onClick={handleUpload}>Upload to Firebase</button>
            <p>{percent} "% done"</p>
        </div>
    );
}
 
export default UploadImageTest;