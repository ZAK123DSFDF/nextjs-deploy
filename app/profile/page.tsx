import Footer from "@/components/Footer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "this is the profile page",
  description: "this is the description of profile page",
  openGraph: {
    title: "this is profile",
    description: "this is description",
    url: "localhost",
    siteName: "localhost",
    images: [
      {
        url: "localhost",
        width: 100,
        height: 100,
      },
    ],
  },
};
export default function Profile() {
  return (
    <>
      <div>this is profile page</div>
      <Footer />
    </>
  );
}
