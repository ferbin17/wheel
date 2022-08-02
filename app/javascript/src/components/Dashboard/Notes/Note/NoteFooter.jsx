import React from "react";

import { Clock } from "@bigbinary/neeto-icons";
import { Avatar, Tooltip, Typography } from "@bigbinary/neetoui";

import NoteTag from "./NoteTag";

const NoteFooter = ({ note }) => {
  const { tag, status, created_at, user } = note;

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

    return `${date.day}/${date.month}/${date.year}, ${time.hours}:${time.minutes}${time.am_pm}`;
  };

  return (
    <div className="mt-3 flex w-full justify-between">
      <div className="flex items-center">
        {tag && (
          <NoteTag key={tag.toLowerCase().replace(/ /g, "_")} tag={tag} />
        )}
      </div>

      <div className="flex items-center">
        <Clock color="#1e1e20" size={15} />

        <div className="space-y-8">
          <Tooltip
            content={calcDateTime(created_at)}
            followCursor="horizontal"
            position="bottom"
          >
            <Typography style="body2" className="neeto-ui-text-gray-600 mx-2">
              {`${status} ${parseDateTime(created_at)}`}
            </Typography>
          </Tooltip>
        </div>

        <Avatar
          size="medium"
          user={{
            name: `${user.firstName} ${user.lastName}`,
            imageUrl: [null, "https://picsum.photos/200"][
              Math.floor(Math.random() * 2)
            ],
          }}
        />
      </div>
    </div>
  );
};

export default NoteFooter;
