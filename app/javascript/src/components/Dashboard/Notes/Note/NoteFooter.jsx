import React from "react";

import { Clock } from "@bigbinary/neeto-icons";
import { Avatar, Tag, Tooltip, Typography } from "@bigbinary/neetoui";

const NoteFooter = ({ tag, created_at, user }) => {
  const parseDateTime = datetime => {
    const timestamp = Date.parse(datetime);
    const hours_ago = (Date.parse(Date()) - timestamp) / (1000 * 60 * 60);

    if (hours_ago < 24) {
      return `${Math.ceil(hours_ago)} hours ago`;
    }

    return `at ${calcDateTime(datetime)}`;
  };

  const calcDateTime = timestamp => {
    const dateObject = new Date(timestamp);

    const date = {
      day: dateObject.getDay().toString().padStart(2, "0"),
      month: dateObject.getMonth().toString().padStart(2, "0"),
      year: dateObject.getFullYear(),
    };
    const time = {
      hours: (dateObject.getHours() > 12
        ? dateObject.getHours() - 12
        : dateObject.getHours()
      )
        .toString()
        .padStart(2, "0"),
      minutes: dateObject.getMinutes().toString().padStart(2, "0"),
      am_pm: dateObject.getHours() >= 12 ? "PM" : "AM",
    };

    return `${date.day}/${date.month}/${date.year} ${time.hours}:${time.minutes} ${time.am_pm}`;
  };

  return (
    <div className="mt-3 flex w-full justify-between">
      <Tag
        className="neeto-ui-bg-gray-100 neeto-ui-text-gray-600"
        label={tag}
        size="small"
        style="outline"
      />

      <div className="flex items-center">
        <Clock color="#1e1e20" size={15} />

        <div className="space-y-8">
          <Tooltip
            content={calcDateTime(created_at)}
            followCursor="horizontal"
            position="bottom"
          >
            <Typography style="body2" className="neeto-ui-text-gray-600 mx-2">
              Created {parseDateTime(created_at)}
            </Typography>
          </Tooltip>
        </div>

        <Avatar
          size="medium"
          user={{
            name: `${user.first_name} ${user.last_name}`,
            imageUrl: user.profile_image_path,
          }}
        />
      </div>
    </div>
  );
};

export default NoteFooter;
