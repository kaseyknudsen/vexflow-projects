"use client";
import Score from "../test/page";
import { Container } from "@mui/system";

const addAccidentalsToNotes = () => {
  return (
    <div>
      <Container>
        <Score
          staves={[
            ["g#3", "d4", "eb4", "d4"],
            ["a4", "d4", ["e4", 2]],
            ["a4", "d4", "e4", "d4"],
          ]}
          width={900}
        />
      </Container>
    </div>
  );
};

export default addAccidentalsToNotes;
