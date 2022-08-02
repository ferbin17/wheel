import React from "react";

import { Tag } from "@bigbinary/neetoui";

const NoteTag = ({ tag }) => (
  <Tag
    className="neeto-ui-bg-gray-100 neeto-ui-text-gray-600 mr-2"
    label={tag}
    size="small"
    style="outline"
  />
);

export default NoteTag;
