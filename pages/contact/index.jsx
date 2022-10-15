import Layout from "../../components/layout";
import Head from "next/head";
import Input from "../../components/common/input";
import TextArea from "../../components/common/textarea";
import { useEffect, useState } from "react";
import Heading from "../../components/common/heading";
import Paragraph from "../../components/common/paragraph";

import data from "../../components/utils";

function Contact() {
  const [contactForm, setContactForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    budget: "",
    project_description: "",
  });

  useEffect(() => {
    console.log(contactForm);
  }, [contactForm]);

  return (
    <>
      <Head>
        <title>i.me | Contact</title>
      </Head>
      <Layout>
        <div className="flex justify-start flex-wrap">
          <div className="w-full md:w-1/2">
            <div className="flex  items-center justify-center h-full">
              <div>
                <Heading text={"Lets Talk"} className="text-left" />
                <Paragraph
                  text={
                    "Get in touch, Let us discuss about your project and start implementing it"
                  }
                  className={"py-10"}
                />
                <div className="flex justify-start gap-4 mb-10">
                  {data.mediaData.medias.map((media, index) => (
                    <a
                      target={"_blank"}
                      rel="noreferrer"
                      key={index}
                      href={media.link}
                      className="hover:underline"
                    >
                      {media.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:p-5">
            <div className="bg-gray-700  p-10">
              <Input
                type="text"
                classes="text-gray-400 focus:text-white border-b-gray-400 focus:border-b-white"
                placeholder="Your name"
                onDataChange={(e) => {
                  setContactForm({ full_name: e.target.value, ...contactForm });
                }}
              />
              <Input
                type="email"
                classes="text-gray-400 focus:text-white border-b-gray-400 focus:border-b-white"
                placeholder="Your email address"
                onDataChange={(e) => {
                  setContactForm({ email: e.target.value, ...contactForm });
                }}
              />
              <Input
                type="tel"
                classes="text-gray-400 focus:text-white border-b-gray-400 focus:border-b-white"
                placeholder="Your phone number"
                onDataChange={(e) => {
                  setContactForm({ phone: e.target.value, ...contactForm });
                }}
              />
              <Input
                type="text"
                classes="text-gray-400 focus:text-white border-b-gray-400 focus:border-b-white"
                placeholder="Your budget"
                onDataChange={(e) => {
                  setContactForm({ budget: e.target.value, ...contactForm });
                }}
              />
              <TextArea
                classes="text-gray-400 focus:text-white border-b-gray-400 focus:border-b-white"
                placeholder="Project Descriptions"
                onDataChange={(e) => {
                  setContactForm({
                    project_description: e.target.value,
                    ...contactForm,
                  });
                }}
                rows={5}
              />
              <div className="flex justify-end">
                <input
                  type="button"
                  value="send"
                  className="bg-white  text-gray-700 px-4 py-2"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Contact;
