import React from "react";

import { Typography } from "@bigbinary/neetoui";
import classNames from "classnames";

const ContactDetailText = ({ text, classes }) => (
  <div className={classNames("flex items-center", classes)}>
    <Typography style="body2">{text}</Typography>
  </div>
);

export default ContactDetailText;
