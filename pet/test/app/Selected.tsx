import React from "react";

interface Props {
  className: any;
}

export const Selected = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`selected ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12 21.638H11.986C9.403 21.59 1.95 14.856 1.95 8.478C1.95 5.414 4.475 2.724 7.353 2.724C9.643 2.724 11.183 4.304 11.999 5.454C12.813 4.306 14.353 2.724 16.644 2.724C19.524 2.724 22.048 5.414 22.048 8.479C22.048 14.855 14.594 21.589 12.011 21.636H12V21.638Z"
        fill="#F4245E"
      />
    </svg>
  );
};
