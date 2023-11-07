"use client";

import Vex from "vexflow";
import { useEffect, useRef } from "react";
import AddNotes from "../components/addNotes";
import { noteArray } from "../components/noteData";
import { addTickables } from "../components/addTickables";

const { Renderer, Stave } = Vex.Flow;

const renderNotes = () => {
  const notationRef = useRef(null);
  const noteArray = [
    "e/4",
    "f/4",
    "g/4",
    "a/4",
    "b/4",
    "c/5",
    "d/5",
    "e/5",
    "f/5",
  ];

  useEffect(() => {
    if (notationRef.current) {
      const renderer = new Renderer(
        notationRef.current.id,
        Renderer.Backends.SVG
      );
      renderer.resize(400, 400);
      const context = renderer.getContext();
      const stave = new Stave(50, 40, 200)
        .addClef("treble")
        .addTimeSignature("4/4")
        .setContext(context)
        .draw();

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
