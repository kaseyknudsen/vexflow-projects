"use client";
import VexFlow, { Accidental, Renderer, StaveNote } from "vexflow";
import { useEffect, useRef } from "react";
import createStave from "../components/createStave";
import { Button, Card, Box } from "@mui/material";

const page = () => {
  const rendererRef = useRef();
  const containerRef = useRef();

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

    // Function to handle click events
    const handleCanvasClick = (event) => {
      const rect = containerRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      console.log(`x: ${x}, y: ${y}`);

      // Cleanup
      return () => {
        containerRef.current.removeEventListener("click", handleCanvasClick);
      };

      // Here, you can add your logic to place a quarter note
      // based on the x, y coordinates.
    };
    // Add event listener for click events
    containerRef.current.addEventListener("click", handleCanvasClick);
  }, []);

  return <div ref={containerRef}></div>;
};

export default page;
