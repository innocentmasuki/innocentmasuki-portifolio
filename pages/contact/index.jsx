import { useEffect, useState } from "react";
import Head from "next/head";

import Layout from "../../components/layout";

import Input from "../../components/common/input";
import TextArea from "../../components/common/textarea";
import Heading from "../../components/common/heading";
import Paragraph from "../../components/common/paragraph";

import data from "../../components/utils";

function Contact() {
  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [project, setProject] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      full_name,
      email,
      phone,
      budget,
      project,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setFull_name("");
        setEmail("");
        setBudget("");
        setPhone("");
        setProject("");
      }
    });
  };

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
              <form>
                <Input
                  type="text"
                  classes="text-gray-400 focus:text-white border-b-gray-400 focus:border-b-white"
                  placeholder="Your name"
                  onDataChange={(e) => {
                    setFull_name(e.target.value);
                  }}
                />
                <Input
                  type="email"
                  classes="text-gray-400 focus:text-white border-b-gray-400 focus:border-b-white"
                  placeholder="Your email address"
                  onDataChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <Input
                  type="tel"
                  classes="text-gray-400 focus:text-white border-b-gray-400 focus:border-b-white"
                  placeholder="Your phone number"
                  onDataChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
                <Input
                  type="text"
                  classes="text-gray-400 focus:text-white border-b-gray-400 focus:border-b-white"
                  placeholder="Your budget"
                  onDataChange={(e) => {
                    setBudget(e.target.value);
                  }}
                />
                <TextArea
                  classes="text-gray-400 focus:text-white border-b-gray-400 focus:border-b-white"
                  placeholder="Project Descriptions"
                  onDataChange={(e) => {
                    setProject(e.target.value);
                  }}
                  rows={5}
                />
                <div className="flex justify-end">
                  <input
                    type="submit"
                    value="send"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                    className="bg-white  text-gray-700 px-4 py-2"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Contact;
