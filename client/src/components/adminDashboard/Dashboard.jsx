import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
// import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function SimpleContainer() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <Box sx={{ flexGrow: 1, p: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                {/* onClick show all users /delete btn for each user to delete the user */}
                <Item>users</Item>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* onClick show total number of posts */}
                <Item>posts</Item>
              </Grid>
              <Grid item xs={12} md={6}>
                <Item>
                  <Box sx={{ bgcolor: "#1a1a1a", height: "50vh" }}></Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={6}>
                <Item>
                  {/* table -show total number of posts */}
                  <Box sx={{ bgcolor: "#1a1a", height: "50vh" }}></Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
