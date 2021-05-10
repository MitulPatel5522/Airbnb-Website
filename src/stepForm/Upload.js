import React, { useEffect, useState } from "react";
import { Container, Button, IconButton } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

export const Upload = ({ images, navigation, handleImages }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const filesArray = Array.from(images);
    setFiles(filesArray);
    makeImgArray(Array.from(images));
  }, [images]);

  const makeImgArray = (filesArray) => {
    Promise.all(
      filesArray.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.addEventListener("load", (ev) => {
            resolve(ev.target.result);
          });
          reader.addEventListener("error", reject);
          reader.readAsDataURL(file);
        });
      })
    ).then(
      (images) => {
        /* Once all promises are resolved, update state with image URI array */
        setFiles(images);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const handleUpload = () => {
    document.getElementById("imgUpload").click();

    document.getElementById("imgUpload").onchange = (e) => {
      const files = document.getElementById("imgUpload").files;
      handleImages(files);
      if (files) {
        const filesArray = Array.from(files);
        makeImgArray(filesArray);
      }
    };
  };
  return (
    <Container maxWidth="xs">
      <h4>STEP 6</h4>
      <br />
      {/* {JSON.parse(formData)} */}
      <IconButton onClick={handleUpload}>
        <CloudUploadIcon />
      </IconButton>
      <input
        accept="image/*"
        id="imgUpload"
        style={{ display: "none" }}
        multiple
        type="file"
      />

      <div style={{ marginTop: "1rem" }}>
        <Button
          variant="contained"
          style={{
            marginRight: "1rem",
            color: "#f74c4f",
            backgroundColor: "#fff",
            border: "1px solid lightgray",
            fontWeight: "700",
          }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          variant="contained"
          style={{ color: "#fff", backgroundColor: "#f74c4f" }}
          onClick={() => {
            if (images.length > 0) {
              navigation.next();
            } else {
              alert("Please upload images");
            }
          }}
        >
          Next
        </Button>
      </div>
      <br />
      {files.map((imageURI, idx) => (
        <div key={idx}>
          <img
            style={{ width: "200px", height: "auto" }}
            src={imageURI}
            alt="Uploaded"
          />
          <br />
        </div>
      ))}
    </Container>
  );
};
