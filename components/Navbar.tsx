import Link from "next/link"
import Image from "next/image"

import  CustomButtom  from "./CustomButtom"

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
      <Link href="/" className="flex justify-center items-center">
        <Image
          src="/rick-sanchez.svg"
          alt="Rick and Morty finder"
          width={118}
          height={18}
          className="object-contain"
        />
      </Link>
      <a href='https://drive.google.com/file/d/1X9P0vIUpddZ_Bfek1_7mveZj0XIBa5Jy/view?usp=sharing'>
        <CustomButtom
          title="Personal"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </a>
      </nav>
    </header>
  )
}

export default Navbar