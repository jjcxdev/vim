import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full text-gray-500 items-center py-8 px-4 h-full flex flex-col gap-4">
      <div className="max-w-[950px] text-center flex flex-col items-center">
        <div>Notice any bugs? Want to request a layout or keymap?</div>
        <div>Just submit an issue on our github</div>
        <div className="py-4">
          <Link href="https://github.com/jjcxdev/vim" className="text-3xl hover:text-green-500 text-white">
            <FaGithub />
          </Link>
        </div>
        <div className="flex items-center gap-4">created by
          <Link href="https://jjcx.dev" className="text-3xl p-1 hover:border-green-500 rounded-md border border-white-600">
            <Image
              src="/jjcx_logo.svg"
              alt="jjcx logo"
              height={50}
              width={50}
            />
          </Link>
        </div>
      </div>
    </footer>

  );
}
