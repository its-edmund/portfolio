import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import FujifilmLogo from "../assets/Fujifilm_logo.svg";
import Cursor from "../components/Cursor/Cursor";

export default function Home() {
  return (
    <div className="bg-[#F6EFE4] h-screen w-screen flex flex-col items-center justify-center cursor-none">
      <Cursor />
      <h1 className="font-[Helvetica] text-black font-bold text-6xl">
        Portfolio.
      </h1>
      <span className="flex flex-row items-end mt-2">
        <Image
          src={FujifilmLogo}
          height={14}
          className="mr-2"
          alt="Fujifilm Logo"
        />
        <h4 className="font-[Helvetica] text-black font-bold text-lg leading-[14px]">
          X-T30 Mark II
        </h4>
      </span>
    </div>
  );
}
