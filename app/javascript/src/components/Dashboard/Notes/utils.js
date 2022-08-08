import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { TAGS, STATUS, NAMES } from "./constants";

dayjs.extend(relativeTime);

// Only for data creation purpose
const chooseRandomElement = list => {
  const randomNumber = Math.floor(Math.random() * list.length);

  return list[randomNumber];
};

const addTagToNote = allNotes =>
  allNotes.map(note => {
    const tag = chooseRandomElement(TAGS);
    return { ...note, tag };
  });

const addStatusToNote = allNotes =>
  allNotes.map(note => ({ ...note, status: chooseRandomElement(STATUS) }));

const addUserToNote = allNotes =>
  allNotes.map(note => ({
    ...note,
    user: {
      firstName: chooseRandomElement(NAMES),
      lastName: chooseRandomElement(NAMES),
    },
    contact: chooseRandomElement(NAMES),
  }));

const addDummyDataToNotes = allNotes => {
  allNotes = addTagToNote(allNotes);
  allNotes = addStatusToNote(allNotes);
  allNotes = addUserToNote(allNotes);

  return allNotes;
};

const parseDateTime = (datetime, timefromNow = false, weekday = false) => {
  const dateTime = dayjs(datetime);

  if (timefromNow && dayjs().diff(dateTime, "day") === 0) {
    return dateTime.fromNow();
  } else if (weekday && dayjs().diff(dateTime, "week") === 0) {
    return dateTime.format("dddd, HH:mmA");
  }

  return dateTime.format("DD/MM/YYYY HH:mmA");
};

export { addDummyDataToNotes, parseDateTime };
