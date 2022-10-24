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
  const [submitting, setSubmitting] = useState(false);
  const [disabled, setDisabled] = useState(true);

  function saySent() {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, "2000");
  }

  useEffect(() => {
    if (full_name === "" || email === "" || phone === "" || project === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [full_name, email, phone, project]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
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
      setSubmitting(false);
      if (res.status === 200) {
        setFull_name("");
        setEmail("");
        setBudget("");
        setPhone("");
        setProject("");
        saySent();
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
                <Heading text={"Let's talk"} className="text-left" />
                <Paragraph
                  text={
                    "Get in touch, let us discuss your project and start implementing it!"
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
                      className="hover:underline text-red-500"
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
                  value={full_name}
                  onDataChange={(e) => {
                    setFull_name(e.target.value);
                  }}
                />
                <Input
                  type="email"
                  classes="text-gray-400 focus:text-white border-b-gray-400 focus:border-b-white"
                  placeholder="Your email address"
                  value={email}
                  onDataChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <Input
                  type="tel"
                  classes="text-gray-400 focus:text-white border-b-gray-400 focus:border-b-white"
                  placeholder="Your phone number"
                  value={phone}
                  onDataChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
                <Input
                  type="text"
                  classes="text-gray-400 focus:text-white border-b-gray-400 focus:border-b-white"
                  placeholder="Your budget (optional)"
                  value={budget}
                  onDataChange={(e) => {
                    setBudget(e.target.value);
                  }}
                />
                <TextArea
                  classes="text-gray-400 focus:text-white border-b-gray-400 focus:border-b-white"
                  placeholder="Project description"
                  value={project}
                  onDataChange={(e) => {
                    setProject(e.target.value);
                  }}
                  rows={5}
                />
                <div className="flex justify-end">
                  <button
                    disabled={submitting || disabled}
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                    className={
                      submitted
                        ? "bg-transparent  disabled:bg-gray-500 disabled:border-gray-500 disabled:text-gray-700 hover:bg-green-500 duration-200 border-green-500 border-2 cursor-pointer hover:text-white text-green-500 px-4 py-2"
                        : "bg-transparent  disabled:bg-gray-500 disabled:border-gray-500 disabled:text-gray-700 hover:bg-white duration-200 border-white border-2 cursor-pointer hover:text-gray-500 text-white px-4 py-2"
                    }
                  >
                    {submitting ? "Sending..." : submitted ? "Sent " : "Send"}
                  </button>
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
