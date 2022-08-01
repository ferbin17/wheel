import React from "react";

const NoteContainer = props => (
  <div className="my-5 flex w-full flex-col rounded border border-solid border-gray-200 p-5 shadow">
    {props.children}
  </div>
);

export default NoteContainer;
