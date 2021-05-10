import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { validateFields } from "./Validation";

export const Names = ({ formData, setForm, navigation }) => {
  const { firstName, lastName } = formData;

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  return (
    <Container maxWidth="xs">
      <h1>Lets start listing your space!</h1>
      <br />
      <h4>STEP 1</h4>
      <br />
      <br />
      <h2>What's Your Name?</h2>
      <TextField
        error={firstNameError}
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={(e) => {
          setForm(e);
          const isFirstNameIncorrect = validateFields.validateEmptyFields(
            e.target.value
          );
          setFirstNameError(isFirstNameIncorrect);
        }}
        helperText={firstNameError}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        error={lastNameError}
        label="Last Name"
        name="lastName"
        value={lastName}
        onChange={(e) => {
          setForm(e);
          const isLastNameIncorrect = validateFields.validateEmptyFields(
            e.target.value
          );
          setLastNameError(isLastNameIncorrect);
        }}
        helperText={lastNameError}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <Button
        variant="contained"
        fullWidth
        style={{ marginTop: "1rem", color: "#fff", backgroundColor: "#f74c4f" }}
        onClick={() => {
          if (firstName === "" || lastName === "") {
            alert("All the fields are required");
          } else {
            navigation.next();
          }
        }}
      >
        Next
      </Button>
    </Container>
  );
};
