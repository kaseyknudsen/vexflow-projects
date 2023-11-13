"use client";

import Vex, { StaveNote } from "vexflow";
import Score from "../test/page";
import { useEffect, useRef } from "react";
import AddNotes from "../components/addNotesToStaff";
import createStave from "../components/createStave";
import { noteArray } from "../components/noteData";
import { addTickablesComponent } from "../components/addTickablesComponent";

const { Renderer, Voice, Formatter } = Vex.Flow;

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

  const numStaves = 2;
  let y = 100;
  let x = 50;
  let globalStaveWidth = 250;
  useEffect(() => {
    if (notationRef.current) {
      const renderer = new Renderer(
        notationRef.current.id,
        Renderer.Backends.SVG
      );
      renderer.resize(1200, 1200);
      const context = renderer.getContext();

      for (let i = 0; i < numStaves; i++) {
        let staveXPosition = i === 0 ? x : x + globalStaveWidth * i;
        if (i === 0) {
          let stave = createStave({
            staveXposition: staveXPosition,
            staveYposition: y,
            staveWidth: globalStaveWidth,
            context: context,
          })
            .addTimeSignature("4/4")
            .addClef("treble")
            .draw();

          const voice = new Voice({ num_beats: 4, beat_value: 4 });
          voice.addTickables(
            noteArray.map((note, idx) => {
              return new StaveNote({ keys: [note], duration: "q" });
            })
          );
          new Formatter().joinVoices([voice]).format([voice], 150);
          voice.draw(context, stave);
        }
        let stave = createStave({
          staveXposition: staveXPosition,
          staveYposition: y,
          staveWidth: globalStaveWidth,
          context: context,
        });
      }

      return () => {
        if (notationRef.current) {
          notationRef.current.innerHTML = "";
        }
      };
    }
  }, []);

  return (
    <div className="flex">
      {/* <div ref={notationRef} id="notation-root"></div> */}
      <Score
        staves={[
          ["g3", "d4", "e4", "d4"],
          ["a4", "d4", "e4", "d4"],
          ["a4", "a4", "b4", "a4"],
          ["f4", "e4", ["g3", 2]],
          ["d4", "e4", ["g3", 2]],
          ["d4", "e4", ["g3", 2]],
          ["d4", "e4", ["g3", 2]],
          ["d4", "e4", ["g3", 2]],
          ["d4", "e4", ["g3", 2]],
        ]}
      />
    </div>
  );
};

export default renderNotes;
