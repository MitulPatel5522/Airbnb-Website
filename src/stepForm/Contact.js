import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./HideArrows.css"
import { validateFields } from "./Validation";

export const Contact = ({ formData, setForm, navigation }) => {
  const { phone, email } = formData;

  const [phoneNoError, setPhoneNoError] = useState(false)
  const [emailError, setEmailError ] = useState(false)

  return (
    <Container maxWidth="xs">
      <h4>STEP 5</h4>
      <br/>
      <br/>
      <h2>What's your contact info?</h2>
      <TextField
        error={phoneNoError}
        label="Phone"
        name="phone"
        value={phone}
        type="number"
        style={{className: "input"}}
        onChange={(e) => {
          setForm(e)
          const isPhoneNoIncorrect = validateFields.validatePhoneNo(e.target.value)
            setPhoneNoError(isPhoneNoIncorrect)

        }}
        helperText={phoneNoError}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        />
      <TextField
        error = {emailError}
        label="E-Mail"
        name="email"
        value={email}
        onChange={(e) => {
          setForm(e)
          const isEmailIncorrect = validateFields.validateEmail(e.target.value)
            setEmailError(isEmailIncorrect)

        }}
        helperText={emailError}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
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
          onClick={() => 
            {
              const regex_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

              if (phone === "" || email === "")
              {
                alert("All the fields are required")
              }

              else if (regex_pattern.test(email) === false) {
                alert('The email address is invalid')
              }

              else if(phone.length !== 10)
              {
                alert("Phone number must be a 10 digit number")
              }
            else{
              navigation.next()  
            }
          }
          }
        >
          Next
        </Button>
      </div>
    </Container>
  );
};
