import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router";

export const Submit = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 2000);
  }, [history]);
  return (
    <Container maxWidth="sm" style={{ marginTop: "4rem", textAlign: "center" }}>
      <h2>Thank you for submitting, we will be in touch!</h2>
    </Container>
  );
};
