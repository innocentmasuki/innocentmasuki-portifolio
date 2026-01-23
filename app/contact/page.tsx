import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact | i.me",
};

export default function Page() {
  return <ContactContent />;
}
