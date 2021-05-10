import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

export const Property = ({ formData, setForm, navigation }) => {
  const { property } = formData;

  return (
    <Container maxWidth="xs">
      <h4>STEP 3</h4>
      <br />
      <br />
      <h2>What kind of place are you listing?</h2>
      <br />
      <br />
      <InputLabel id="property-label">Choose a property type</InputLabel>
      <Select
        name="property"
        labelId="property-label"
        id="property"
        value={property}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      >
        <MenuItem value="flat">Flat</MenuItem>
        <MenuItem value="house">House</MenuItem>
        <MenuItem value="secondary-unit">Secondary Unit</MenuItem>
        <MenuItem value="unique-space">Unique Space</MenuItem>
        <MenuItem value="bed-breakfast">Bed and Breakfast</MenuItem>
        <MenuItem value="boutique-hotel">Boutique Hotel</MenuItem>
      </Select>
      <div style={{ marginTop: "1rem" }}>
        <Button
          variant="contained"
          style={{
            marginRight: "1rem",
            color: "#f74c4f",
            backgroundColor: "#fff",
            border: "1px solid lightgray",
            fontWeight: "700",
          }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          variant="contained"
          style={{ color: "#fff", backgroundColor: "#f74c4f" }}
          onClick={() => {
            if (property === "") {
              alert("Select Any one option from the list");
            } else {
              navigation.next();
            }
          }}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};
