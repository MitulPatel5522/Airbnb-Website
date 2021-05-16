import React, { useState } from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Names } from "./stepForm/Names";
import { Address } from "./stepForm/Address";
import { Property } from "./stepForm/Property";
import { PropertyDescription } from "./stepForm/PropertyDescription";
import { Contact } from "./stepForm/Contact";
import { Review } from "./stepForm/Review";
import { Submit } from "./stepForm/Submit";
import { Upload } from "./stepForm/Upload";
import { db, storage } from "./firebase";
import { Redirect } from "react-router";

const defaultData = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  title: "",
  property: "",
  description: "",
  pricing: "",
  phone: "",
  email: "",
};

const steps = [
  { id: "names" },
  { id: "address" },
  { id: "property" },
  { id: "description" },
  { id: "contact" },
  { id: "upload" },
  { id: "review" },
  { id: "submit" },
];

export const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const [images, setImages] = useState([]);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  const doSubmit = () => {
    console.log("submitted", formData, images);
    const {
      firstName,
      lastName,
      address,
      city,
      state,
      zip,
      title,
      property,
      description,
      pricing,
      phone,
      email,
    } = formData;

    db.collection("listings")
      .add({
        firstName,
        lastName,
        address,
        city,
        state,
        zip,
        title,
        property,
        description,
        pricing,
        phone,
        email,
        status: "processing",
      })
      .then((docRef) => {
        const listingID = docRef.id;
        const listingRef = storage.ref().child("listings").child(listingID);
        Array.from(images).map((file) =>
          listingRef
            .child(file.name)
            .put(file)
            .then((_snapshot) => {
              console.log("Uploaded a blob or file!");
            })
        );
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  switch (step.id) {
    case "names":
      return <Names {...props} />;
    case "address":
      return <Address {...props} />;
    case "property":
      return <Property {...props} />;
    case "description":
      return <PropertyDescription {...props} />;
    case "contact":
      return <Contact {...props} />;
    case "upload":
      return <Upload {...props} handleImages={setImages} images={images} />;
    case "review":
      return <Review {...props} handleSubmit={doSubmit} />;
    case "submit":
      return <Submit {...props} />;
    default:
      return <Redirect to="/" />;
  }
};
export default MultiStepForm;
