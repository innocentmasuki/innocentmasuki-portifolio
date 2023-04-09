import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "schemas";
import StudioNavbar from "./components/section/Studio/StudioNavbar";
import StudioLogo from "./components/section/Studio/StudioLogo";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: "/studio",
  name: "innocent-portifolio-blog",
  title: "Innocent portifolio blog",

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: StudioLogo,
      navbar: StudioNavbar,
    },
  },
});
