import React from "react";

import { Typography } from "@bigbinary/neetoui";

const NoteContent = ({ description }) => (
  <>
    <div className="mt-2 mb-3 w-full">
      <Typography style="body1" className="neeto-ui-text-gray-600 mr-2">
        {description}
      </Typography>
    </div>
    <hr />
  </>
);

export default NoteContent;
