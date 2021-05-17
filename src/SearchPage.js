import React, { useState, useEffect } from "react";
import "./SearchPage.css";
import {
  Button,
  Chip,
  FormControl,
  Input,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  useTheme,
} from "@material-ui/core";
import SearchResult from "./SearchResult";
import { db, storage } from "./firebase";

const defaultData = {
  data: {
    address: "svddsv",
    amenities: (2)[("amenity1", "amenity2")],
    city: "sdv",
    description: "dsvdsvdsv",
    email: "rm@gm.com",
    firstName: "svs",
    lastName: "svd",
    phone: "1234567890",
    pricing: "6156",
    property: "house",
    state: "svds",
    title: "De Villa",
    zip: "400080",
  },
  imgUrl:
    "https://firebasestorage.googleapis.com/v0/b/airbnb-website.appspot.com/o/listings%2FSlwl5xyR2jLAfQCUP38p%2FWhatsApp%20Image%202021-05-10%20at%2012.01.50.jpeg?alt=media&token=ebac760f-d50d-4487-bc5a-ae89deaaf6b8",
  id: "asdni34j2ojr23",
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Toilet",
  "Swimming pool",
  "Bed",
  "Billiard table",
  "Sink",
  "Fountain",
  "Oven",
  "Ceiling fan",
  "Television",
  "Microwave oven",
  "Gas stove",
  "Refrigerator",
  "Kitchen & dining room table",
  "Washing machine",
  "Bathtub",
  "Stairs",
  "Fireplace",
  "Pillow",
  "Mirror",
  "Shower",
  "Couch",
  "Countertop",
  "Coffeemaker",
  "Dishwasher",
  "Sofa bed",
  "Tree house",
  "Towel",
  "Porch",
  "Wine rack",
  "Jacuzzi",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
function SearchPage() {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [sortCategory, setSortCategory] = useState("title");

  const [listings, setListings] = useState([defaultData]);
  const [filteredListings, setFilteredListings] = useState([defaultData]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  useEffect(() => {
    let tmpListings = listings;
    tmpListings = tmpListings.filter((listing) => {
      return personName.every((v) => listing.data.amenities?.includes(v));
    });
    tmpListings.sort((a, b) => {
      return a.data[sortCategory] - b.data[sortCategory];
    });
    // console.log(tmpListings);
    setFilteredListings(tmpListings);
  }, [personName, sortCategory, listings]);

  useEffect(() => {
    db.collection("listings")
      .where("status", "==", "verified")
      .get()
      .then((querySnapshot) => {
        let docs = [];
        querySnapshot.forEach((doc) => {
          const doc_data = doc.data();
          let current_doc = { data: doc_data, id: doc.id };
          storage
            .ref()
            .child("listings")
            .child(doc.id)
            .list({ maxResults: 1 })
            .then((firstImg) => {
              firstImg.items[0]
                .getDownloadURL()
                .then((url) => {
                  current_doc["imgUrl"] = url;
                })
                .catch((err) => console.error(err));
            })
            .catch((err) => console.error(err));
          docs.push(current_doc);
        });
        setListings(docs);
        // console.log(docs);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <h1>Stays nearby</h1>
        <Button variant="outlined" onClick={() => setSortCategory("property")}>
          Type of place
        </Button>
        <Button variant="outlined" onClick={() => setSortCategory("pricing")}>
          Price
        </Button>
        <Button variant="outlined" onClick={() => setSortCategory("city")}>
          City
        </Button>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-chip-label">More Filters</InputLabel>
          <Select
            labelId="demo-mutiple-chip-label"
            id="demo-mutiple-chip"
            multiple
            value={personName}
            onChange={handleChange}
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected) => (
              <div className={classes.chips}>
                {selected.map((value) => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* <Button variant="outlined" onClick={handleClick}>
          More filters
        </Button> 
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu> */}
      </div>
      {filteredListings.map(
        (
          {
            data: { property, city, title, description, pricing, thumbnailURL },
            id,
          },
          key
        ) => {
          //   console.log(imgUrl);
          return (
            <SearchResult
              img={thumbnailURL}
              location={`${property} in ${city}`}
              title={title}
              description={description}
              price={`₹ ${pricing}/ night`}
              id={id}
              key={key}
            />
          );
        }
      )}
    </div>
  );
}

export default SearchPage;
