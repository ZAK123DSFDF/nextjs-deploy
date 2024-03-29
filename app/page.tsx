import Header from "@/components/Header";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title: "this is the home page",
  description: "this is the description of the homepage",
};
export default function Home() {
  return (
    <>
      <h1 className="style">hi there</h1>
      <Header />
      <Link href="/profile/1">go to id:1</Link>
      <div className="size-10 relative ">
        <Image
          src="/shot.jpg"
          fill
          alt="this is the shot image"
          className="absolute"
        />
      </div>
      <Image
        src="/shot.jpg"
        alt="this is shot image"
        width={100}
        height={100}
      />
    </>
  );
}
