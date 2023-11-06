"use client"

import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 w-full z-[3] ease-in duration-300 text-black">
      <div className="max-w-[1240px] m-auto flex flex-col justify-between items-center">
        <Link href="/">
          <h1 className="hidden sm:flex text-6xl p-4">Vexflow Projects</h1>
        </Link>
        <ul className="hidden sm:flex flex-col py-10 items-center text-2xl">
          <li className="p-5">
            <Link href="/renderNotes">Render Notes</Link>
          </li>
          <li className="p-5">
            <Link href="/addNotesToStaff">Add Notes to a Staff</Link>
          </li>
          <li className="p-5">
            <Link href="/addNotesToAudio">Add Audio to Notes</Link>
          </li>
          <li className="p-5">
            <Link href="/addAccidentalsToNotes">Add Accidentals</Link>
          </li>
        </ul>
        {/* mobile button */}
        {/* <div className="block sm:hidden mt-10">
          <AiOutlineMenu size={20} />
        </div> */}
        {/* mobile menu */}
        <div className="sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300">
          <ul>
            <li className="p-4 text-3xl hover:text-4xl">
              <Link href="/renderNotes">Render Notes</Link>
            </li>
            <li className="p-4 text-3xl hover:text-4xl">
              <Link href="/addNotesToStaff">Add Notes to a Staff</Link>
            </li>
            <li className="p-4 text-3xl hover:text-4xl">
              <Link href="/addNotesToAudio">
                Add Audio to Notes When Clicked
              </Link>
            </li>
            <li className="p-4 text-3xl hover:text-4xl">
              <Link href="/addAccidentalsToNotes">Add Accidentals</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
