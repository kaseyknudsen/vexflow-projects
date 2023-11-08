"use client";

import Vex, { StaveNote } from "vexflow";
import { useEffect, useRef } from "react";
import AddNotes from "../components/addNotesToStaff";
import createStave from "../components/createStave";
import { noteArray } from "../components/noteData";
import { addTickables } from "../components/addTickables";

const { Renderer, Stave, Voice, Formatter } = Vex.Flow;

const renderNotes = () => {
  const notationRef = useRef(null);
  const noteArray = [
    "e/4",
    "f/4",
    "g/4",
    "a/4",
    // "b/4",
    // "c/5",
    // "d/5",
    // "e/5",
  ];

  const numStaves = 3;
  let y = 20;
  useEffect(() => {
    if (notationRef.current) {
      const renderer = new Renderer(
        notationRef.current.id,
        Renderer.Backends.SVG
      );
      renderer.resize(800, 1200);
      const context = renderer.getContext();

      for (let i = 0; i < numStaves; i++) {
        if (i === 0) {
          let stave = createStave({
            staveXposition: 50,
            staveYposition: y,
            staveWidth: 300,
            clef: "treble",
            timeSig: "4/4",
            context: context,
          });
        } else {
          let stave = createStave({
            staveXposition: 50,
            staveYposition: y,
            staveWidth: 300,
            clef: "treble",
            timeSig: "4/4",
            context: context,
          });
        }
        y += 80;
      }

      const voice = new Voice({ num_beats: 4, beat_value: 4 });

      voice.addTickables(
        noteArray.map((note, idx) => {
          return new StaveNote({ keys: [note], duration: "q" });
        })
      );

      new Formatter().joinVoices([voice]).format([voice], 250);
      // voice.draw(context, stave);

      return () => {
        if (notationRef.current) {
          notationRef.current.innerHTML = "";
        }
      };
    }
  }, []);

  return (
    <div className="flex justify-center py-60">
      <div ref={notationRef} id="notation-root"></div>
    </div>
  );
};

export default renderNotes;
