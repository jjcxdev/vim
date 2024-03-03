import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";


export default function Header() {
  return (
    <header className="w-full flex justify-center items-center bg-[#000000] px-8 py-4">
      <div className="w-full"></div>
      <div className="w-full flex justify-center">VimKeyboard</div>
      <div className="w-full flex justify-end gap-4">
        <Link href="https://www.jjcx.dev" className="px-4 border border-white hover:border-green-500 rounded-md flex justify-center items-center">
          <Image
            src='/jjcx_logo.svg'
            alt="jjcx logo"
            width={50}
            height={50}
          />
        </Link>
        <Link href="https://github.com/jjcxdev/vim" className="text-2xl hover:text-green-500"><FaGithub /></Link>
      </div>
    </header>

  );
}
