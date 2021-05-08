import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Upload = ({navigation }) => {

  return(
    <Container maxWidth="xs">
        <h4>STEP 6</h4>
        <br/>
        <h1>Hello!</h1>
        <div style={{ marginTop: "1rem" }}>
        <Button
          variant="contained"
          style={{ marginRight: "1rem", color: "#f74c4f", backgroundColor :"#fff", border: "1px solid lightgray", fontWeight: "700" }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          variant="contained"
          style={{color: "#fff", backgroundColor :"#f74c4f"}}
          onClick={() => navigation.next()}
        >
          Next
        </Button>
      </div>
        </Container>
  )
}

