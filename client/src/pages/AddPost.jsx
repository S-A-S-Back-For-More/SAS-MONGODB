import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useState } from "react";

function AddPost() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  //make sure to fetch the id from context api and add it dynamiccaly to the post request here, I am hardcoding it for now
  const createPost = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/posts/", {
        location,
        description: content,
        image,
        authorID: "63af0594151ed1332c88f2ad",
      })
      .then((response) => {
        console.log("success:", response.data);
      });
  };
  return (
    <>
      <Navbar />
      <h1>Add Post</h1>
      <div
        className="post-container"
        style={{
          border: "1px solid red",
          width: "50em",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          marginTop: "5em",
          height: "30em",
          alignItems: "center",
        }}
      >
        {/*  set the encoding type to send the multipart data or files through form data. */}
        <form>
          <input
            type="text"
            name="location"
            id=""
            value={location}
            style={{ width: "30em", marginBottom: "2em" }}
            placeholder="Location"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <textarea
            name="content"
            id=""
            cols="30"
            rows="10"
            value={content}
            placeholder="your description"
            style={{ width: "30em", marginBottom: "2em" }}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
          <br />
          <input
            type="file"
            name="addImg"
            id=""
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <br />
          <button
            onClick={createPost}
            type="submit"
            style={{ marginTop: "4em" }}
          >
            Add post
          </button>
        </form>
      </div>
    </>
  );
}

export default AddPost;
