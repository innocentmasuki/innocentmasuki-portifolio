import type { Metadata } from "next";
import WorksContent from "./WorksContent";

export const metadata: Metadata = {
  title: "Works | i.me",
};

export default function Page() {
  return <WorksContent />;
}
