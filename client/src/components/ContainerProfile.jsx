import "./containerProfile.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BtnProfile from "./BtnProfile";

function ContainerProfile() {
  let navigate = useNavigate();
  const [listOfPosts, setListOfPosts] = useState([]);
  // const [post, setPost] = useState([]);
  //all posts
  useEffect(() => {
    axios.get("#").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);
  
  return (
    <>
      <h1>my destinations</h1>
      <div className="container">
        {/* get all posts */}
        {listOfPosts.map((value, key) => {
          return (
            <div  key = {key}>
              <div
                className="post"
                
                onClick={() => {
                  navigate(`/post/${value.id}`);
                }}
              >
                <div className="title" >{value.title}</div>
                <div className="location" >{value.location}</div>
                <div className="content" >{value.content}</div>
                <div className="image" >
                  <img
                    src={value.image}
                    style={{ width: "100%", height: "15em" }}
                  />
                </div>
              </div>
            </div>
          );
        })}

        {/* {post.map((value, key) => {
          return (
            <>
              <div className="post"   onClick={() => {
                      navigate("/post");
                    }}>
                <div className="title">{value.title}</div>
                <div className="location">{value.location}</div>
                <div className="content">{value.content}</div>
                <div className="image">
                  <img
                    src={value.image}
                    style={{ width: "100%", height: "15em" }}
                  
                  />
                </div>
              </div>
            </>
          );
        })} */}
      </div>
      <div className="btn-group">
        <BtnProfile />
      </div>
    </>
  );
}

export default ContainerProfile;
