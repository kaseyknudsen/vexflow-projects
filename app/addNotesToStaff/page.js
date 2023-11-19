"use client";
import VexFlow, { Accidental, Renderer, StaveNote } from "vexflow";
import { useEffect, useRef, useState } from "react";
import createStave from "../components/createStave";
import noteData from "../components/noteData";
import { Button } from "@mui/material";

const page = () => {
  const rendererRef = useRef();
  const containerRef = useRef();

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (rendererRef.current == null) {
      rendererRef.current = new Renderer(
        containerRef.current,
        Renderer.Backends.SVG
      );
    }
    const renderer = rendererRef.current;
    renderer.resize(800, 800);
    const context = renderer.getContext();

    let stave = createStave({
      staveXposition: 40,
      staveYposition: 200,
      staveWidth: 400,
      context: context,
    })
      .addTimeSignature("4/4")
      .addClef("treble");
    stave.draw();

    // Function to determine the note from the Y-coordinate
    const getNoteFromPosition = (y) => {
      // Logic to convert y-coordinate to a musical note
      // This depends on the specifics of your stave setup
      // For example, you might check which line or space the y-coordinate corresponds to
      // and return the appropriate note (like "C/4", "D/4", etc.)
    };

    // Function to handle click events
    const handleCanvasClick = (event) => {
      const rect = containerRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const coordinates = { x: x, y: y };
      // Determine the note from the Y-coordinate
      const note = getNoteFromPosition(y);
      if (note) {
        // Add the new note to the notes state
        const newNote = new StaveNote({ keys: [note], duration: "q" });
        setNotes((prevNotes) => [...prevNotes, newNote]);

        // Redraw the stave with the new notes
        stave.draw();
        notes.forEach((note) => note.setContext(context).draw());
      }
    };
    // Add event listener for click events
    containerRef.current.addEventListener("click", handleCanvasClick);
    // Cleanup
    return () => {
      containerRef.current.removeEventListener("click", handleCanvasClick);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div></div>
    </div>
  );
};

export default page;
