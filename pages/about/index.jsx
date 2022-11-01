import Head from "next/head";

import RootLayout from "@/components/rootLayout";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import Button from "@/components/common/button";
import Skill from "@/components/content/skill";

import SideNav from "@/components/content/SideNav";

import data from "@/components/utils";

import { useState } from "react";

import { useWindowSize } from "hooks/useWindowSize";

function About() {
  const [activeTab, setActiveTab] = useState(1);
  const size = useWindowSize();
  const [sideMenuTitles] = useState(["Who am I?", "Hobbies", "Skills & Tools"]);

  return (
    <>
      <Head>
        <title>i.me | About</title>
      </Head>
      <RootLayout>
        <div className="w-full h-full  grid grid-cols-1  md:grid-cols-3">
          <div className="hidden md:block top-20">
            <SideNav
              sideMenuTitles={sideMenuTitles}
              onChange={(activeTab) => setActiveTab(activeTab)}
            />
          </div>
          <div className="md:col-span-2 p-4 md:h-full md:w-full md:flex md:justify-center md:items-center">
            {size.width > 768 ? (
              activeTab === 0 && <WhoAmI data={data} />
            ) : (
              <WhoAmI data={data} />
            )}

            {size.width > 768 ? (
              activeTab === 1 && <Hobbies data={data} />
            ) : (
              <Hobbies data={data} />
            )}

            {size.width > 768 ? (
              activeTab === 2 && <SkillsTools data={data} />
            ) : (
              <SkillsTools data={data} />
            )}
          </div>
        </div>
      </RootLayout>
    </>
  );
}

export default About;

const WhoAmI = ({ data }) => {
  return (
    <div>
      <Heading text={"Who am I?"} className="block md:hidden md:text-center" />
      <Paragraph text={"I'm Innocent Masuki."} className="md:text-center" />
      <Paragraph text={data.aboutMe.bio} className="md:text-center mb-4" />
      <div className="md:flex md:justify-center">
        <Button
          a={true}
          title={"My Resume"}
          link={
            "https://docs.google.com/document/d/1AfhSLWntV1B-zvpPEygaJwGbHDQRTN7HQPoVbtmhn24/edit?usp=sharing"
          }
        />
      </div>
    </div>
  );
};

const Hobbies = ({ data }) => {
  return (
    <div>
      <Heading
        text={"Hobbies"}
        className="block md:hidden md:text-center mt-16"
      />
      <Paragraph
        text={data.aboutMe.hobbies.replaceAll(",", " | ")}
        className="md:text-center"
      />
    </div>
  );
};

const SkillsTools = ({ data }) => {
  return (
    <div>
      <Heading
        text={"Skills & tools"}
        className="md:text-center mt-16 block md:hidden"
      />
      <div className="grid grid-cols-1 z-30 py-4 md:grid-cols-2 lg:grid-cols-3  gap-5">
        {data.skills.map((skill, index) => (
          <Skill
            icon={skill.icon}
            link={skill.link}
            title={skill.title}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
