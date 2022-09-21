import React, { useState, useEffect } from "react";
// import { render } from "react-dom";
import { Button, getImageListItemBarUtilityClass } from "@mui/material";
import { storage } from "../firebase"
import { ref, uploadBytes, listAll, getDownloadURL, list } from "firebase/storage";
import { v4 } from 'uuid';
import './upload.css';
import axios from 'axios'


const Upload = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [url, setUrl] = useState("");
  const imageListRef = ref(storage, "images/")
  var myParams = {
    data: "https://firebasestorage.googleapis.com/v0/b/fitcheck-c6d10.appspot.com/o/images%2Faimee-song-is-seen-wearing-brown-leather-coat-beige-pants-news-photo-1587047754.webp04074b25-4769-4291-99ae-facb74de7c1f?alt=media&token=c3286bc0-bad6-48b8-b082-cacdb7945f9d"
  }
  const uploadImage = () => {
 
    // fetch('/upload').then(function (response) {
    //   console.log(response) 
    //   return response.json();
        
    // }).then(function (text) {
    //     console.log(text);
    // });

    // console.log(imageUpload)
    
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url])
        var key = url;
        console.log (key);
        axios.post('http://localhost:5000/upload', key,{ headers: { 'Content-Type': 'application/json' } })
        .then(function (response) {
        // console.log(response);
        // console.log(response.data);
        fetch('http://localhost:5000/upload', { method: 'POST', body: JSON.stringify(key) })
        .then(response => response.json())
        .then(data => {
          // console.log(data);
         
        }
        )
      });
      })
      alert("Image Uploaded!")
    },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
            
          });
      }
      )
    // axios.get('http://localhost:5000/flask/fit').then(response => {
    //   console.log("SUCCESS", response)
    //   setGetMessage(response)
    // }).catch(error => {
    //   console.log(error)
    // })
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);


  const [data, setData] = useState([{}])

  // retrieve data from flask

  useEffect(() => {
    fetch("/data").then(
      res => res.json()).then(
        data => {
          setData(data)
          console.log(data)
        })
  }, [])
  //This waits until all objects are loaded in the DOM
  // $(document).ready(function () {
  //   //Then assigns the event handler
  // });

  return (
    <html>
      <body>
        <div>
          {/* {console.log("image: ", url)} */}
          {/* {console.log("imageList: ", imageList.slice(-1))} */}
          {/* {console.log("imageUpload: ", imageUpload)} */}
        </div>
        <div>
          <h2>File Upload & Image Preview</h2>
          <br></br>
          <form id="file-upload-form" class="uploader">
            {/* <input id="file-upload" type="file" name="fileUpload" accept="image/*" /> */}
            <input id="file-upload" name="fileUpload" accept="image/*"
              type="file"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
            <label for="file-upload" id="file-drag">
              {/* <img id="file-image" src="#" alt="Preview" class="hidden" /> */}
              <img id="file-image" src={imageList.slice(-1) || "http://via.placeholder.com/300"} alt="firebase-image" />

              <div id="start">
                <i class="fa fa-download" aria-hidden="true"></i>
                <div>Select an image file to upload</div>
                <div id="notimage" class="hidden">Please select an image</div>
                <span id="file-upload-btn" class="btn btn-primary">Select a file</span>
              </div>

              <div id="response" class="hidden">
                <div id="messages"></div>
                <progress class="progress" id="file-progress" value="0">
                  <span>0</span>%
                </progress>
              </div>
            </label>
            <div >
              <Button style={{ backgroundColor: "#515DDA" }} variant="contained" onClick={uploadImage}>Upload</Button>

            </div>
          </form>
          <br />
          <br />

          {/* <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        /> */}

          <div>
            {imageList.map((url) => {
              return <img src={url} />
            })}
          </div>
        </div>
      </body>
    </html>
  );
};

export default Upload;
