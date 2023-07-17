import React from "react";
import "./globals.css";

interface Props {
  className: any;
}

export const ButtonSecondary = ({ className }: Props): JSX.Element => {
  return (
    <div className={`button-secondary ${className}`}>
      <div className="tweet">Tweet</div>
    </div>
  );
};
