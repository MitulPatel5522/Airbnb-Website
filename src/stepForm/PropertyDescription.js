import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { validateFields } from "./Validation";

export const PropertyDescription = ({ formData, setForm, navigation }) => {
  const { description, pricing } = formData;

  const [descriptionError, setDescriptionError] = useState(false)
  const [pricingError, setPricingError] = useState(false)
  return (
    <Container maxWidth="xs">
      <h4>STEP 4</h4>
      <br/>
      <br/>
      <h2>How your property looks like?</h2>
      <TextField
        error={descriptionError}
        label="Property Description"
        name="description"
        value={description}
        onChange={(e) => {
          setForm(e)
          const isDescriptionIncorrect = validateFields.validateEmptyFields(e.target.value)
            setDescriptionError(isDescriptionIncorrect)

        }}
        helperText={descriptionError}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <br/>
      <br/>
      <h2>What is price of your property?</h2>
      <TextField
        error={pricingError}
        label="Property price(for one night stay in Rs: )"
        name="pricing"
        value={pricing}
        onChange={(e) => {
          setForm(e)
          const isPriceIncorrect = validateFields.validateEmptyFields(e.target.value)
            setPricingError(isPriceIncorrect)

        }}
        helperText= {pricingError}
        type="number"
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
              if (description === "" || pricing === "")
              {
                alert("All the fields are required")
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
