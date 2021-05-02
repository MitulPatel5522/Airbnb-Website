import React from "react";
import "./Footer.css";
import { LinkedIn, GitHub } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <h5>Developed with ❤️</h5>
      <br />
      <p>Mitul Patel
      <IconButton
          onClick={() =>
            window.open("https://github.com/MitulPatel5522", "_blank")
          }
        >
          <GitHub fontSize="small" />
        </IconButton>
        <IconButton
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/mitul-patel-97939316a",
              "_blank"
            );
          }}
        >
          <LinkedIn fontSize="small" />
        </IconButton>
      </p>
      <p>Sameer Pinjari
      <IconButton
          onClick={() =>
            window.open("https://github.com/Sameerpinjari-24", "_blank")
          }
        >
          <GitHub fontSize="small" />
        </IconButton>
        <IconButton
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/sameer-pinjari-1a09691a0",
              "_blank"
            );
          }}
        >
          <LinkedIn fontSize="small" />
        </IconButton>
      </p>
      <p>
        Mitanshu Reshamwala
        <IconButton
          onClick={() =>
            window.open("https://github.com/MitanshuShaBa/", "_blank")
          }
        >
          <GitHub fontSize="small" />
        </IconButton>
        <IconButton
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/rmitanshu-0111/",
              "_blank"
            );
          }}
        >
          <LinkedIn fontSize="small" />
        </IconButton>
      </p>
    </div>
  );
}

export default Footer;
