import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import FujifilmLogo from "../assets/Fujifilm_logo.svg";
import Cursor from "../components/Cursor/Cursor";

export default function Home() {
  return (
    <div className="flex flex-col h-auto bg-[#F6EFE4] cursor-none">
      <Cursor />
      <div className="h-screen w-screen flex flex-col items-center justify-center">
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
      <div className="flex flex-row justify-center gap-6 p-12">
        <div className="w-1/5 flex flex-col gap-6">
          <img
            src="/images/0.jpg"
            className="rounded-xl hover:scale-105 transition-all"
            alt="Market St"
          />
          <img
            src="/images/3.jpg"
            className="rounded-xl hover:scale-105 transition-all"
            alt="Market St"
          />
        </div>
        <div className="w-1/5 flex flex-col gap-6">
          <img
            src="/images/1.jpg"
            className="rounded-xl hover:scale-105 transition-all"
            alt="Market St"
          />
          <img
            src="/images/4.jpg"
            className="rounded-xl hover:scale-105 transition-all"
            alt="Market St"
          />
        </div>
        <div className="w-1/5 flex flex-col gap-6">
          <img
            src="/images/2.jpg"
            className="rounded-xl hover:scale-105 transition-all"
            alt="Market St"
          />
          <img
            src="/images/5.jpg"
            className="rounded-xl hover:scale-105 transition-all"
            alt="Market St"
          />
        </div>
      </div>
    </div>
  );
}
