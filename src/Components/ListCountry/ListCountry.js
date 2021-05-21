import React from "react";
import CountryItem from "./CountryItem";
import PinTopCountry from "./PinTopCountry";
import "./ListCountry.scss";

function ListCountry(props) {
  const { pinTopData, dataFilter, searchInput } = props;
  return (
    <div className="list">
      <PinTopCountry pinTopData={pinTopData} />
      {dataFilter.map((item, index) => {
        return (
          <CountryItem
            key={index}
            index={index}
            item={item}
            searchInput={searchInput}
          />
        );
      })}
    </div>
  );
}
export default React.memo(ListCountry);
