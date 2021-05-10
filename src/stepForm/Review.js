import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetail from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ListItemText from "@material-ui/core/ListItemText";

import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

export const Review = ({ formData, navigation, handleSubmit }) => {
  const { go } = navigation;
  const {
    firstName,
    lastName,
    address,
    city,
    state,
    zip,
    property,
    description,
    pricing,
    phone,
    email,
  } = formData;

  return (
    <Container maxWidth="sm">
      <h2>Review</h2>
      <br />
      <RenderAccordion
        summary="Names"
        go={go}
        details={[{ "First Name": firstName }, { "Last Name": lastName }]}
      />
      <RenderAccordion
        summary="Address"
        go={go}
        details={[
          { Address: address },
          { City: city },
          { State: state },
          { Zip: zip },
        ]}
      />
      <RenderAccordion
        summary="Property Type"
        go={go}
        alt="property"
        details={[{ Property: property }]}
      />

      <RenderAccordion
        summary="Property Description and Pricing"
        go={go}
        alt="description"
        details={[{ Description: description }, { Pricing: pricing }]}
      />
      <RenderAccordion
        summary="Contact"
        go={go}
        details={[{ Phone: phone }, { Email: email }]}
      />
      <Button
        color="secondary"
        variant="contained"
        style={{
          marginRight: "1rem",
          marginTop: "1.5rem",
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
        color="primary"
        variant="contained"
        style={{
          marginTop: "1.5rem",
          color: "#fff",
          backgroundColor: "#f74c4f",
        }}
        onClick={() => {
          go("submit");
          handleSubmit();
        }}
      >
        Submit
      </Button>
    </Container>
  );
};

export const RenderAccordion = ({ summary, details, go, alt }) => (
  <Accordion defaultExpanded>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      {summary}
    </AccordionSummary>
    <AccordionDetail>
      <div>
        {details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];

          return (
            <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>
          );
        })}
        <IconButton
          color="primary"
          component="span"
          onClick={() => {
            if (alt) {
              go(`${alt}`);
            } else {
              go(`${summary.toLowerCase()}`);
            }
          }}
        >
          <EditIcon />
        </IconButton>
      </div>
    </AccordionDetail>
  </Accordion>
);
