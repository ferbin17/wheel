import React from "react";

import { Clock } from "@bigbinary/neeto-icons";
import { Avatar, Tooltip, Typography } from "@bigbinary/neetoui";

import NoteTag from "./NoteTag";

import { parseDateTime } from "../utils";

const NoteFooter = ({ note }) => {
  const { tag, status, created_at, user } = note;

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
            content={parseDateTime(created_at, false, true)}
            followCursor="horizontal"
            position="bottom"
          >
            <Typography style="body2" className="neeto-ui-text-gray-600 mx-2">
              {`${status} at ${parseDateTime(created_at, true)}`}
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
