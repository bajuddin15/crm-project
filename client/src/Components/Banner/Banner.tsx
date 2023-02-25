import React from "react";
import { Container } from "react-bootstrap";

import "./style.scss";

interface IProps {}

const Banner: React.FC<IProps> = () => {
  return (
    <div className="banner">
      <Container>
        <div className="banner_tagline">
          <h3 className="banner_title">Crypto Hunter</h3>
          <span className="banner_info">
            Get all the Info regarding your favorite Crypto Currency
          </span>
        </div>
      </Container>
    </div>
  );
};
export default Banner;
