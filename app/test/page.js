"use client";
import React, { useRef, useEffect } from "react";
import VexFlow, { BarlineType } from "vexflow";

const VF = VexFlow.Flow;
const { Formatter, Renderer, Stave, StaveNote } = VF;

let clefWidth = 20;
let timeWidth = 20;
let maxStavesPerLine = 4;
let lineSpacing = 125;

const Score = ({
  staves = [],
  clef = "treble",
  timeSignature = "4/4",
  width = 1000,
  height = 900,
}) => {
  const container = useRef();
  const rendererRef = useRef();

  useEffect(() => {
    let Yposition = 150;

    if (rendererRef.current == null) {
      rendererRef.current = new Renderer(
        container.current,
        Renderer.Backends.SVG
      );
    }

    const renderer = rendererRef.current;
    renderer.resize(width, height);
    const context = renderer.getContext();
    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
    const clefAndTimeWidth =
      (clef ? clefWidth : 0) + (timeSignature ? timeWidth : 0);
    const staveWidth = (width - clefAndTimeWidth) / staves.length;

    let currX = 20;
    staves.forEach((notes, i) => {
      if (i % maxStavesPerLine === 0 && i !== 0) {
        currX = 20; // Reset X to starting position
        Yposition += lineSpacing; // Move Y down for the new line
      }
      const stave = new Stave(currX, Yposition, staveWidth);
      if (i === 0) {
        stave.setWidth(staveWidth + clefAndTimeWidth);
        clef && stave.addClef(clef);
        timeSignature && stave.addTimeSignature(timeSignature);
      } else if (i === staves.length - 1) {
        stave.setEndBarType(2);
      }
      currX += stave.getWidth();
      stave.setContext(context).draw();

      const processedNotes = notes
        .map((note) => (typeof note === "string" ? { key: note } : note))
        .map((note) =>
          Array.isArray(note) ? { key: note[0], duration: note[1] } : note
        )
        .map(({ key, ...rest }) =>
          typeof key === "string"
            ? {
                key: key.includes("/") ? key : `${key[0]}/${key.slice(1)}`,
                ...rest,
              }
            : rest
        )
        .map(
          ({ key, keys, duration = "q" }) =>
            new StaveNote({
              keys: key ? [key] : keys,
              duration: String(duration),
            })
        );
      Formatter.FormatAndDraw(context, stave, processedNotes, {
        auto_beam: true,
      });
    });
    
  }, [staves, width, height, timeSignature, clef, lineSpacing]);

  return <div ref={container} />;
};

export default Score;
