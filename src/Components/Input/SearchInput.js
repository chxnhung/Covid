import React from "react";
import { Row, Col } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import "./SearchInput.scss";

function SearchInput(props) {
  return (
    <>
      <Row className="mt-5">
        <Col>
          <div className="icon">
            <Search color="#d3d3d3" size={20} />
          </div>
          <input
            className="input-field shadow"
            placeholder="Search 677 regions..."
            onChange={props.onChangeSearchInput}
          />
        </Col>
      </Row>
    </>
  );
}

export default React.memo(SearchInput);
