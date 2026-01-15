import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About | i.me",
};

export default function Page() {
  return <AboutContent />;
}
