import React from "react";

import Container from "./Container";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const Note = ({ note, onEditClick, onDeleteClick }) => (
  <Container key={note.id}>
    <Header
      note={note}
      onEditClick={onEditClick}
      onDeleteClick={onDeleteClick}
    />
    <Content note={note} />
    <Footer note={note} />
  </Container>
);

export default Note;
