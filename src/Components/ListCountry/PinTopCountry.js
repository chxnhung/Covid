import React from "react";
import NumberFormat from "react-number-format";
import { Row, Col, Image } from "react-bootstrap";
import { timeSince } from "../../Utils";
import "./CountryItem.scss";

function PinTopCountry(props) {
  const { pinTopData } = props;
  return (
    <Row className="mt-4 cases">
      <Col lg={1} md={1} sm={1} className="mr-0">
        <div className="numerical-order">
          <p className="font-weight-bold text-secondary">.</p>
        </div>
      </Col>
      <Col lg={2} md={2} sm={2} className="ml-0 text-left">
        <Image
          src={
            pinTopData && pinTopData.countryInfo && pinTopData.countryInfo.flag
          }
          className="image"
          alt="country"
        />
      </Col>
      <Col lg={3} md={3} sm={3} className="text-left test">
        <h5 className="font-weight-bold">{pinTopData && pinTopData.country}</h5>
        <p className="text-secondary">
          {timeSince(pinTopData && pinTopData.updated)}
        </p>
      </Col>
      <Col lg={3} md={3} sm={3} className="text-danger font-weight-bold">
        <NumberFormat
          value={pinTopData && pinTopData.cases}
          displayType={"text"}
          fixedDecimalScale={false}
          thousandSeparator={","}
          decimalSeparator={"."}
        />
      </Col>
    </Row>
  );
}

export default React.memo(PinTopCountry);
