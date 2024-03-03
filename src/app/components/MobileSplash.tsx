import Image from "next/image";
import Link from "next/link";

export default function MobileSplash() {
  return (
    <div className="w-full h-screen z-1000 flex flex-col justify-center mobile px-4 ">
      <div className="flex flex-col items-center pb-8">
        <Image
          src="/images/Vimlogo.svg"
          alt="Vim logo"
          width={100}
          height={100} />
        <div className="text-lg">Keyboard</div>
      </div>
      <div className="flex pb-4">Thanks for you interest in VimKeyboard!</div>
      <div className="pb-4">Our platform is designed for an interactive keyboard experience, optimized for desktop use.</div>
      <div>We invite you to return using your computer to enjoy the full functionality of our site.</div>
    </div>
  );
}
