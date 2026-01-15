import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact | i.me",
};

export default function Page() {
  return <ContactContent />;
}
