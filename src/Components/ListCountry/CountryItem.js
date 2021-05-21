import React, { Fragment } from "react";
import { timeSince } from "../../Utils";
import NumberFormat from "react-number-format";
import { Row, Col, Image } from "react-bootstrap";
import "./CountryItem.scss";

function CountryItem(props) {
  const { searchInput, item, index } = props;
  return (
    <Fragment>
      <Row className="mt-4 cases" key={index}>
        <Col lg={1} md={1} sm={1} className="mr-0">
          <div className="numerical-order">
            <p className="font-weight-bold text-secondary">{index + 1}</p>
          </div>
        </Col>
        <Col lg={2} md={2} sm={2} className="ml-0 text-left">
          <Image
            src={item && item.countryInfo && item.countryInfo.flag}
            className="image"
            alt="country"
          />
        </Col>
        <Col lg={3} md={3} sm={3} className="text-left test">
          <h5 className="font-weight-bold">{item && item.country}</h5>
          <p className="text-secondary">{timeSince(item && item.updated)}</p>
        </Col>
        <Col lg={3} md={3} sm={3} className="text-danger font-weight-bold">
          <NumberFormat
            value={item && item.cases}
            displayType={"text"}
            fixedDecimalScale={false}
            thousandSeparator={","}
            decimalSeparator={"."}
          />
        </Col>
      </Row>
      {searchInput ? (
        <Row className="text-center info mr-0">
          <Col className=" text-danger text-center">
            <NumberFormat
              value={item && item.deaths}
              displayType={"text"}
              fixedDecimalScale={false}
              thousandSeparator={","}
              decimalSeparator={"."}
            />
            &nbsp;
            <span className="uppercase text-danger">Deaths</span>
          </Col>
          <Col className=" text-success text-center">
            <NumberFormat
              value={item && item.recovered}
              displayType={"text"}
              fixedDecimalScale={false}
              thousandSeparator={","}
              decimalSeparator={"."}
            />
            &nbsp;
            <span className="uppercase text-success">Recoveries</span>
          </Col>
        </Row>
      ) : null}
    </Fragment>
  );
}
export default React.memo(CountryItem);
