import ImageGallery from "react-image-gallery";
import React, { useEffect, useState } from "react";
import "./ViewListing.css";
import "react-image-gallery/styles/css/image-gallery.css";
import {
  Card,
  CardContent,
  Typography,
  SvgIcon,
  Grid,
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SmokeFreeIcon from "@material-ui/icons/SmokeFree";
import WifiIcon from "@material-ui/icons/Wifi";
import AccessibleIcon from "@material-ui/icons/Accessible";
import PhoneIcon from "@material-ui/icons/Phone";
import FlareIcon from "@material-ui/icons/Flare";
import AlarmIcon from "@material-ui/icons/Alarm";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import ListItemText from "@material-ui/core/ListItemText";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { ReactComponent as MasterIcon } from "./mastercard.svg";
import { ReactComponent as VisaIcon } from "./visa.svg";
import { ReactComponent as PayPalIcon } from "./paypal.svg";
import { ReactComponent as ExpressIcon } from "./american-express.svg";
import { db, storage } from "./firebase";
import { useParams } from "react-router";

// const images = [
//   {
//     original:
//       "https://news.airbnb.com/wp-content/uploads/sites/4/2020/05/Airbnb-Beachfront-Greece.jpg?w=1024",
//     thumbnail:
//       "https://news.airbnb.com/wp-content/uploads/sites/4/2020/05/Airbnb-Beachfront-Greece.jpg?w=1024",
//   },
//   {
//     original:
//       "https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?w=1536",
//     thumbnail:
//       "https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?w=1536",
//   },
//   {
//     original:
//       "https://www.guestready.com/blog/wp-content/uploads/2019/11/Airbnb-Plus-1.jpg",
//     thumbnail:
//       "https://www.guestready.com/blog/wp-content/uploads/2019/11/Airbnb-Plus-1.jpg",
//   },
// ];

const ViewListing = () => {
  const { listingId } = useParams();
  const [images, setImages] = useState([]);
  const [listing, setListing] = useState({
    description: "Whoops",
    state: "Maharashtra",
    property_name: "Default Property ",
    city: "Lonavala",
    price: 1000,
  });
  useEffect(() => {
    storage
      .ref()
      .child("listings")
      .child(listingId)
      .listAll()
      .then((res) => {
        const imgUrl = [];
        res.items.forEach((itemRef) => {
          itemRef
            .getDownloadURL()
            .then((url) => {
              imgUrl.push({ original: url, thumbnail: url });
            })
            .catch((err) => console.error(err));
        });
        setImages(imgUrl);
      })
      .catch((err) => console.error(err));
  }, [listingId]);
  useEffect(() => {
    db.collection("listings")
      .doc(listingId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc.data());
          setListing(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [listingId]);
  return (
    <div className="view">
      <Typography variant="h4"> {listing?.title} </Typography>
      <p>
        {listing?.city},{listing?.state}
      </p>
      <br />
      <ImageGallery
        autoPlay
        showPlayButton={false}
        className="image"
        items={images}
      />
      <br />
      <div>
        <Typography variant="h5"> Property Desciption </Typography>
        <p className="description">{listing?.description}</p>
        <Card
          variant="outlined"
          className="card"
          style={{ width: 300, float: "right" }}
        >
          <CardContent>
            <Typography variant="h6" fontWeight="bold">
              Rs. {listing?.pricing}/Night
            </Typography>
            <Divider />
            <Typography color="textSecondary" gutterBottom>
              Payment Options
            </Typography>
            <SvgIcon component={MasterIcon} viewBox="0 0 500 400" />
            <SvgIcon component={VisaIcon} viewBox="0 0 500 400" />
            <SvgIcon component={PayPalIcon} viewBox="0 0 500 400" />
            <SvgIcon component={ExpressIcon} viewBox="0 0 500 400" />
          </CardContent>
        </Card>
      </div>
      <div className="amenity">
        <Typography variant="h5"> Amenities </Typography>
        <br />
        <ul className="list">
          {listing?.amenities?.map((amenity) => {
            return <li>{amenity}</li>;
          })}
        </ul>
      </div>
      <Divider />
      <br />
      <div>
        <div>
          <Typography variant="h5"> Things to know </Typography>
          <div className="box1">
            <List>
              {/* <ListSubheader>House Rules</ListSubheader> */}
              <Typography variant="h7"> House Rules </Typography>
              <ListItem>
                <ListItemIcon>
                  <AccessTimeIcon />
                </ListItemIcon>
                <ListItemText>Check-in: 2:00 PM - 12:00 AM</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AccessTimeIcon />
                </ListItemIcon>
                <ListItemText>Check out: 11:00 AM</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <MeetingRoomIcon />
                </ListItemIcon>
                <ListItemText>Self check-in with building staff</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <SmokeFreeIcon />
                </ListItemIcon>
                <ListItemText>No Smoking</ListItemText>
              </ListItem>
            </List>
          </div>
        </div>
        <div className="box2">
          <Typography variant="h7"> Health & Safety </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <AlarmIcon />
              </ListItemIcon>
              <ListItemText>Smoke alarm not reported</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FlareIcon />
              </ListItemIcon>
              <ListItemText>
                Committed to Airbnb's enhanced cleaning process
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>All COVID-19 guidelines are followed</ListItemText>
            </ListItem>
          </List>
        </div>
        <div className="box3">
          <Typography variant="h7"> Other Services </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <WifiIcon />
              </ListItemIcon>
              <ListItemText>Free Wi-Fi service</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AccessibleIcon />
              </ListItemIcon>
              <ListItemText>Wheelchair accesible property</ListItemText>
            </ListItem>
          </List>
          <Typography variant="h7">No Refund on Cancellation</Typography>
        </div>
      </div>
      <br />
      <div className="host">
        <Divider />
        <br />
        <Typography variant="h5" fontWeight="fontWeightBold">
          Hosted by {listing?.firstName} {listing?.lastName}
        </Typography>
        <br />
        <Grid container direction="row" alignItems="center">
          <Grid item>
            <PhoneIcon />
          </Grid>
          <Grid item>{listing?.phone}</Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ViewListing;
