import React, { FC } from "react";

export const Label: FC<any> = ({ className, value,children, ...props }) => {
  return (
    <label {...props} className={className}>
      {value}
      {children}
    </label>
  );
};
