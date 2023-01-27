import Head from "next/head";
import { NextStudio } from "next-sanity/studio";
import { StudioProvider, StudioLayout } from "sanity";

import config from "../../sanity.config";
import StudioNavbar from "@/components/content/Studio/StudioNavbar";

export default function StudioPage() {
  return (
    <NextStudio config={config}>
      <StudioProvider config={config}>
        {/* Put components here and you'll have access to the same React hooks as Studio gives you when writing plugins */}
        {/* <StudioNavbar /> */}
        <StudioLayout />
      </StudioProvider>
    </NextStudio>
  );
}
