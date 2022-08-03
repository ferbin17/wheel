import React from "react";

import { Avatar, Typography } from "@bigbinary/neetoui";

const ContactAvatar = ({ name }) => (
  <div className="flex flex-row items-center">
    <Avatar
      user={{
        name,
        imageUrl: [null, "https://picsum.photos/200"][
          Math.floor(Math.random() * 2)
        ],
      }}
      size="medium"
      className="mr-2"
    />
    <div className="flex w-full flex-col">
      <Typography style="h4">{name}</Typography>
      <Typography style="body3" className="neeto-ui-text-gray-600">
        Owner
      </Typography>
    </div>
  </div>
);

export default ContactAvatar;
