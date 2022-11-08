import Head from "next/head";

import RootLayout from "@/components/rootLayout";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import Button from "@/components/common/button";
import Skill from "@/components/content/skill";
import SideNav from "@/components/content/SideNav";
import data from "@/components/utils";
import { PopupButton } from "react-calendly";

import { useState, useEffect } from "react";
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
  const [showWidget, setShowWidget] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      setShowWidget(true);
    }, 300);
  }, []);

  return (
    <div>
      <Heading text={"Who am I?"} className="block md:hidden md:text-center" />
      <Paragraph text={"I'm Innocent Masuki."} className="md:text-center" />
      <Paragraph text={data.aboutMe.bio} className="md:text-center mb-4" />
      <div className="md:flex gap-4 md:justify-center">
        {showWidget && (
          <PopupButton
            url="https://calendly.com/innocentmasuki/lets-talk"
            rootElement={document.getElementById("contact-root")}
            text="Schedule an appointment"
            className=" bg-red-50 py-3 my-2 px-4 rounded-2xl text-red-500 hover:text-red-600 hover:bg-red-100"
          />
        )}
        <Button
          a={true}
          title={"My resume"}
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
