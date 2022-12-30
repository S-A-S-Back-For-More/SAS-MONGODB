import React from "react";
import Navbar from "../components/Navbar";
import BtnPost from "../components/BtnPost"
//helps with viewing single post based on id
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function SinglePost() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});

  //single post
  useEffect(() => {
    axios.get(`#`).then((response) => {
      setPostObject(response.data);
    });
  }, []);
  return (
    <>
      <Navbar />
      <h1 style={{ margin: "0 auto" }}>My post</h1>
      <div className="wrapper" style={{border: '1px solid white', width: '60%',height: '40em', display: 'flex', flexDirection: 'column', margin: '0 auto', alignItems: 'center', marginTop: '5em'}}>
        <div
          className="card"
          style={{
            border: "1px solid red",
            height: "20em",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            gap: "3em",
            margin: "0 auto",
            marginTop: "5em",
          }}
        >
          <div>{postObject.title}</div>
          <div>{postObject.location}</div>
          <div>{postObject.content}</div>
        </div>
        <div className="container-img">
          <div>
            <img src={postObject.image} style={{width: '25em'}}/>
          </div>
        </div>
      </div>
      <BtnPost/>
    </>
  );
}

export default SinglePost;
