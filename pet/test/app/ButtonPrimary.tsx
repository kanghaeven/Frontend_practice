import React from "react";
import "./globals.css";

interface Props {
  className: any;
}

export const ButtonPrimary = ({ className }: Props): JSX.Element => {
  return (
    <div className={`button-primary ${className}`}>
      <div className="tweet">Tweet</div>
    </div>
  );
};
