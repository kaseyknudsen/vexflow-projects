import Vex from "vexflow";

const { Stave } = Vex.Flow;

const createStave = ({
  staveXposition,
  staveYposition,
  staveWidth,
  context,
}) => {
  const stave = new Stave(staveXposition, staveYposition, staveWidth)
    .setContext(context)
    .draw();
  return stave;
};

export default createStave;
