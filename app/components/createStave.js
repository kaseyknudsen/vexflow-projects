import Vex from "vexflow";

const { Stave } = Vex.Flow;

const createStave = ({
  staveXposition,
  staveYposition,
  staveWidth,
  clef,
  timeSig,
  context,
}) => {
  const stave = new Stave(staveXposition, staveYposition, staveWidth)
    .addClef(clef || null)
    .addTimeSignature(timeSig)
    .setContext(context)
    .draw();
  return stave;
};

export default createStave;
