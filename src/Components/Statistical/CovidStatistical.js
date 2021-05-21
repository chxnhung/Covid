import React, { Fragment } from "react";
import NumberFormat from "react-number-format";
import { Row, Col } from "react-bootstrap";

function CovidStatistical(props) {
  return (
    <Fragment>
      <Row>
        <Col>
          <h1 className="text-danger font-weight-bold">
            <NumberFormat
              value={props.caseStatical}
              displayType={"text"}
              fixedDecimalScale={false}
              thousandSeparator={","}
              decimalSeparator={"."}
            />
          </h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h3 className="text-dark font-weight-bold">
            <NumberFormat
              value={props.deathStatical}
              displayType={"text"}
              fixedDecimalScale={false}
              thousandSeparator={","}
              decimalSeparator={"."}
            />
          </h3>
          <h5 className="text-secondary font-weight-bold">DEATHS</h5>
        </Col>
        <Col>
          <h3 className="text-dark font-weight-bold">
            <NumberFormat
              value={props.recoverStatical}
              displayType={"text"}
              fixedDecimalScale={false}
              thousandSeparator={","}
              decimalSeparator={"."}
            />
          </h3>
          <h5 className="text-secondary font-weight-bold">RECOVERIES</h5>
        </Col>
      </Row>
    </Fragment>
  );
}

export default React.memo(CovidStatistical);
