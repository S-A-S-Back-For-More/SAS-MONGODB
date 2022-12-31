import React from "react";
import { styled } from "@mui/material/styles";
import axios from "axios";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  const [posts, setPosts] = React.useState(null);
  React.useEffect(() => {
    axios.get(`http://localhost:5000/api/posts/userposts`).then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  }, []);
  return (
    <div>
      {posts &&
        posts.map((post) => {
          return (
            <div key={post._id}>
              <h3 style={{ color: "white" }}>{post.location}</h3>
              <h3 style={{ color: "white" }}>{post.description}</h3>
            </div>
          );
        })}
    </div>
  );
}
