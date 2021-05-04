import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

export const Property = ({ formData, setForm, navigation }) => {
    const { property } = formData;

  return (
      <Container maxWidth="xs">
      <h4>STEP 3</h4>
      <br/>
      <br/>
      <h2>What kind of place are you listing?</h2>
      <br/>
      <br/>
        <InputLabel id="property-label">Choose a property type</InputLabel>
        <Select
          labelId="property-label"
          paceholder="Select One"
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
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => navigation.next()}
        >
          Next
        </Button>
        </div>
    </Container>
  );
}