import React from "react";
import NameTag from "./NameTag.js";
import "./styles.css";

const NameTagList = (props) => {
  const renderNameTag = (name, index) => (
    <NameTag
      name={name}
      key={name}
      // props are used to pass a reference to removeName method dwon to the
      // event listener in NameTag component that calls the removeName method.
      removeName={props.removeName}
      index={index}
    />
  );
  const NameTagElements = props.names.map(renderNameTag);
  return <main>{NameTagElements}</main>;
};

export default NameTagList;
