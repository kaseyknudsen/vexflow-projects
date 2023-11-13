import Vex from "vexflow";
const { Accidental } = Vex.Flow;

const addAccidental = ({ note, modifier }) => {
  const accidental = note.addModifier(new Accidental(modifier));
  return accidental;
};

export default addAccidental;
