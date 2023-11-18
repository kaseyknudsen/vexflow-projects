"use client";
import Vex from "vexflow";
import React, { useRef, useEffect } from "react";
import Score from "../test/page";
const { Formatter, Renderer, Stave, StaveNote } = Vex.Flow;
import { Box, Container } from "@mui/system";

const addAccidentalsToNotes = () => {
  return (
    <div>
      <Container>
        <Score
          staves={[
            ["g#3", "d4", "eb4", "d4"],
            ["a4", "d4", ["e4", 2]],
            ["a4", "d4", "e4", "d4"],
          
          ]} width={800}
        />
      </Container>
    </div>
  );
};

export default addAccidentalsToNotes;
