import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import Link from "next/link";
interface Navbar {}

const Navbar = (props: Navbar) => {
  return (
    <nav className="flex items-center justify-between w-full p-5">
      <div className="flex items-center gap-5">
        <div className="logo">
          <Link href={"/"}>
            <Image src="/logo.svg" alt="logo" width={100} height={100} />
          </Link>
        </div>
        <div className="w-[1px] h-7 bg-blue-500 rotate-180" />
        <ul className="list-none flex items-center gap-5">
          <li className="cursor-pointer">Find Tutors</li>
          <li className="cursor-pointer">Corporate Training</li>
          <li className="cursor-pointer">Become a tutor</li>
        </ul>
      </div>

      <div className="flex items-center gap-5">
        <div className="bg-[#D9FAFD] text-primary px-6 py-2 rounded-lg hover:shadow-md transition duration-150 cursor-pointer">
          Refer a friend
        </div>
        <div className="flex items-center gap-1">
          <p>English, </p>
          <p> USD</p>
          <MdKeyboardArrowDown className="icon-size" />
        </div>
        <div className="flex items-center gap-5">
          <div className="w-[1px] h-7 bg-blue-500 rotate-180" />
          <AiOutlineQuestionCircle className="icon-size" />
          <div className="flex items-center gap-2">
            <FiLogIn className="icon-size" />
            <p>Log in</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
