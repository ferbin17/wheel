import React from "react";

import { Typography } from "@bigbinary/neetoui";

const ContactDetailText = ({ text, classes }) => {
  const componentClassNames = classes ? `${classes} ` : "";

  return (
    <div className={`${componentClassNames} flex items-center`}>
      <Typography style="body2">{text}</Typography>
    </div>
  );
};

export default ContactDetailText;
