import React from "react";
import prettyButtonStyles from "./PrettyButton.module.css";

const PrettyButton = ({ text }) => {
  return <button className={prettyButtonStyles.PrettyButton}>{text}</button>;
};

export default PrettyButton;
