"use client";

import { Voice, Formatter } from "vexflow";

const addTickablesComponent = ({ noteArray, notes, context, stave, noteSpacing }) => {
  const voice = new Voice({ num_beats: noteArray.length, beat_value: 4 });
  voice.addTickables(notes);
  new Formatter().joinVoices([voice]).format([voice], noteSpacing);
  voice.draw(context, stave);
  return voice
};

export default addTickablesComponent;
