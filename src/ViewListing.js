import ImageGallery from "react-image-gallery";
import React from "react";
import "./ViewListing.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { Card, CardContent, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { ReactComponent as MasterIcon } from "./mastercard.svg";
import { ReactComponent as VisaIcon } from "./visa.svg";
import { ReactComponent as PayPalIcon } from "./paypal.svg";
import { ReactComponent as ExpressIcon } from "./american-express.svg";
import { SvgIcon } from "@material-ui/core";

const images = [
  {
    original:
      "https://news.airbnb.com/wp-content/uploads/sites/4/2020/05/Airbnb-Beachfront-Greece.jpg?w=1024",
    thumbnail:
      "https://news.airbnb.com/wp-content/uploads/sites/4/2020/05/Airbnb-Beachfront-Greece.jpg?w=1024",
  },
  {
    original:
      "https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?w=1536",
    thumbnail:
      "https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?w=1536",
  },
  {
    original:
      "https://www.guestready.com/blog/wp-content/uploads/2019/11/Airbnb-Plus-1.jpg",
    thumbnail:
      "https://www.guestready.com/blog/wp-content/uploads/2019/11/Airbnb-Plus-1.jpg",
  },
];

class ViewListing extends React.Component {
  render() {
    return (
      <div className="view">
        <Typography variant="h4"> Property Name </Typography>
        <p>City,State</p>
        <br />
        <ImageGallery className="image" items={images} />
        <br />
        <Typography variant="h5"> Property Desciption </Typography>
        <p>
          Little more content like Rating or number of rooms/hall/gallery etc.
        </p>
        <br />
        <Divider />
        <br />
        <Card
          variant="outlined"
          className="card"
          style={{ width: 300, marginBottom: 30, float: "right" }}
        >
          <CardContent>
            <Typography variant="h6" fontWeight="bold">
              Rs. 500/Night
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
    );
  }
}

export { ViewListing };
