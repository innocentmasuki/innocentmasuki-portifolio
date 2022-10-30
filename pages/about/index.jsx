import Head from "next/head";

import Layout from "@/components/layout";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import Button from "@/components/common/button";
import Skill from "@/components/content/skill";

import data from "@/components/utils";

function About() {
  return (
    <>
      <Head>
        <title>i.me | About</title>
      </Head>
      <Layout>
        <Heading text={"Who am I?"} className="md:text-center" />
        <Paragraph text={data.aboutMe.bio} />
        <Button
          a={true}
          title={"My Resume"}
          link={
            "https://docs.google.com/document/d/1AfhSLWntV1B-zvpPEygaJwGbHDQRTN7HQPoVbtmhn24/edit?usp=sharing"
          }
        />

        <Heading text={"Hobbies"} className="md:text-center mt-16" />
        <Paragraph text={data.aboutMe.hobbies.replaceAll(",", " | ")} />
        <Heading text={"Skills & tools"} className="md:text-center mt-16" />
        <div className="grid grid-cols-1 py-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {data.skills.map((skill, index) => (
            <Skill
              icon={skill.icon}
              link={skill.link}
              title={skill.title}
              key={index}
            />
          ))}
        </div>
      </Layout>
    </>
  );
}

export default About;
