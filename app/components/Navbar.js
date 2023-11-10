"use client";

import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="text-center sm:flex fixed left-0 top-0 w-full z-[3] ease-in duration-300 text-black">
      <Link href="/">
        <h1 className="text-2xl sm:text-3xl p-4">Vexflow Projects</h1>
      </Link>
      <ul className="sm:text-1xl py-20 sm:py-1 sm:flex">
        <li className="p-4">
          <Link href="/renderNotes">Render Notes</Link>
        </li>
        <li className="p-4">
          <Link href="/addNotesToStaff">Add Notes to a Staff</Link>
        </li>
        <li className="p-4">
          <Link href="/addAudioToNotes">Add Audio to Notes</Link>
        </li>
        <li className="p-4">
          <Link href="/addAccidentalsToNotes">Add Accidentals</Link>
        </li>
        <li className="p-4">
          <Link href="/test">GitHub Example</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
