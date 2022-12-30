import "./containerProfile.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import BtnProfile from "./BtnProfile";
//import Posts from "./posts/posts";

function ContainerProfile() {
  let navigate = useNavigate();
  const [listOfPosts, setListOfPosts] = useState([]);
  // const [post, setPost] = useState([]);
  //all posts
  useEffect(() => {
    axios.get("http://localhost:5000/api/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);
  const viewDetails = (id) => {
    navigate({
      pathname: "/post",
      search: createSearchParams({
        id: id,
      }).toString(),
    });
  };

  return (
    <>
      <h1 style={{ color: "white" }}>my destinations</h1>
      <div className="container" style={{ border: "1px solid white" }}>
        {/* get all posts */}
        {listOfPosts.map((value, key) => {
          return (
            <div key={key}>
              <div
                className="post"
                style={{
                  border: "1px solid white",
                  width: "300px",
                  height: "300px",
                }}
                onClick={() => viewDetails(value._id)}
              >
                {/* <div className="title" >{value.title}</div> */}
                <div className="location">{value.location}</div>
                <div className="content">{value.content}</div>
                <div className="image">
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
      {/* <div className="btn-group"> */}
      <BtnProfile />
    </>
  );
}

export default ContainerProfile;
