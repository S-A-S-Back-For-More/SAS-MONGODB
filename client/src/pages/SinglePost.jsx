import React from "react";
import Navbar from "../components/Navbar";
import BtnPost from "../components/BtnPost";
//helps with viewing single post based on id
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
//post/?838392823939
function SinglePost() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState(null);
  const [searchParams] = useSearchParams();

  //single post
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/posts/post/${searchParams.get("id")}`)
      .then((response) => {
        console.log(response.data);
        setPostObject(response.data);
      });
  }, []);
  return (
    <>
      <Navbar />
      <h1 style={{ margin: "0 auto" }}>My post</h1>
      <div
        className="wrapper"
        style={{
          border: "1px solid white",
          width: "60%",
          height: "40em",
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          alignItems: "center",
          marginTop: "5em",
        }}
      >
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
          <h3 style={{ color: "white" }}>
            {postObject && postObject.location}
          </h3>
          <h5 style={{ color: "white" }}>
            {postObject && postObject.description}
          </h5>
        </div>
        <div className="container-img">
          <div>
            <img
              src={postObject && postObject.image}
              style={{ width: "25em" }}
            />
          </div>
        </div>
      </div>
      <BtnPost />
    </>
  );
}

export default SinglePost;

//view post image in recommendation page on the cube -- user
//view detailed view of post -- user
//view image of posts on profile page --user
//add post image on the recommendation page -- admin
//create a new post --admin
//view all users, delete users --admin

//create post for user (done)
//delete the post --user (done)
//update the post --user (partially done)
//get all posts in commuinty page (done)
