import React from "react";
import "./globals.css";

interface Props {
  className: any;
}

export const AvatarMedium = ({ className }: Props): JSX.Element => {
  return (
    <div className={`avatar-medium ${className}`}>
      <img
        className="profile-picture"
        alt="Profile picture"
        src="profile-picture.png"
      />
    </div>
  );
};
