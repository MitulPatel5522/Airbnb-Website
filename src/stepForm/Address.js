import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./HideArrows.css"
import { validateFields } from "./Validation";

export const Address = ({ formData, setForm, navigation }) => {
  const { address, city, state, zip } = formData;

  const [addressError, setAddressError] = useState(false)
  const [cityError, setCityError ] = useState(false)
  const [stateError, setStateError ] = useState(false)
  const [zipError, setZipError ] = useState(false)

  return (
    <Container maxWidth="xs">
      <h4>STEP 2</h4>
      <br/>
      <br/>
      <h2>Where’s your place located?</h2>
      <TextField
        error = {addressError}
        label="Address"
        name="address"
        value={address}
        onChange={(e) => {
          setForm(e)
          const isAddressIncorrect = validateFields.validateEmptyFields(e.target.value)
            setAddressError(isAddressIncorrect)

        }}
        helperText = {addressError}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        error = {cityError}
        label="City"
        name="city"
        value={city}
        onChange={(e) => {
          setForm(e)
          const isCityIncorrect = validateFields.validateEmptyFields(e.target.value)
            setCityError(isCityIncorrect)

        }}
        helperText = {cityError}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        error = {stateError}
        label="State"
        name="state"
        value={state}
        onChange={(e) => {
          setForm(e)
          const isStateIncorrect = validateFields.validateEmptyFields(e.target.value)
            setStateError(isStateIncorrect)

        }}
        helperText = {stateError}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        error= {zipError}
        label="Zip"
        name="zip"
        type="number" 
        value={zip}
        style={{className: "input"}}
        onChange={(e) => {
          setForm(e)
          const isZipIncorrect = validateFields.validateZip(e.target.value)
            setZipError(isZipIncorrect)
        }}
        helperText = {zipError}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <div style={{ marginTop: "1rem" }}>
        <Button
          variant="contained"
          style={{ marginRight: "1rem", color: "#f74c4f", backgroundColor :"#fff", border: "1px solid lightgray", fontWeight: "700"}}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          variant="contained"
          style={{color: "#fff", backgroundColor :"#f74c4f"}}
          onClick={() => 
            {
              if (address === "" || city === "" || state === "" || zip === "")
              {
                alert("All the fields are required")
              }
              else if(zip.length !== 6)
              {
                alert("Zip code must be a 6 digit number")
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
