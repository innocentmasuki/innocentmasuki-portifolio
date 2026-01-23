"use client";

import { useEffect, useState } from "react";
import Input from "@/components/common/input";
import TextArea from "@/components/common/textarea";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import data from "@/components/utils";
import { PopupButton } from "react-calendly";

export default function ContactContent() {
  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [project, setProject] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [showWidget, setShowWidget] = useState(false);

  function saySent() {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 2000);
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
    let contactData = {
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
      body: JSON.stringify(contactData),
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

  useEffect(() => {
    setTimeout(function () {
      setShowWidget(true);
    }, 300);
  }, []);

  return (
    <div
      id="contact-root"
      className="flex px-4 md:px-10 lg:px-32 items-center h-full justify-start flex-wrap pb-20"
    >
      <div className="w-full md:w-1/2">
        <div className="flex  items-center justify-center h-full">
          <div>
            <Heading text={"Let's talk"} className="text-left" />
            <Paragraph
              text={
                "Get in touch, let us discuss your project and get the job done!"
              }
              className={"pt-10 pb-5 md:pr-10 "}
            />
            {showWidget && (
              <PopupButton
                url="https://calendly.com/innocentmasuki/lets-talk"
                rootElement={document.getElementById("contact-root") as HTMLElement}
                text="Schedule an appointment"
                className="my-8 bg-red-50 hover:bg-red-100 py-3 px-4 rounded-2xl text-red-500 hover:text-red-600"
              />
            )}
            <div className="flex justify-start gap-4 mb-10">
              {data.mediaData.medias.map((media, index) => (
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href={media.link}
                  key={index}
                  className="bg-red-50 hover:bg-red-100 py-2 px-4 rounded-2xl text-red-500 hover:text-red-600"
                >
                  {media.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="text"
              classes=""
              placeholder={"eg. Innocent Masuki"}
              value={full_name}
              onDataChange={(e) => setFull_name(e.target.value)}
            />
            <Input
              type="email"
              classes=""
              placeholder={"eg. hi@innocentmasuki.me"}
              value={email}
              onDataChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="tel"
              classes=""
              placeholder={"eg. +255 700 000 000"}
              value={phone}
              onDataChange={(e) => setPhone(e.target.value)}
            />
            <Input
              type="text"
              classes=""
              placeholder={"eg. $1000 - $5000"}
              value={budget}
              onDataChange={(e) => setBudget(e.target.value)}
            />
          </div>
          <div className="py-4">
            <TextArea
              classes=""
              rows={4}
              placeholder={"Briefly describe your project"}
              value={project}
              onDataChange={(e) => setProject(e.target.value)}
            />
          </div>
          <button
            disabled={disabled}
            className={`${
              disabled
                ? "bg-gray-100 text-gray-400"
                : "bg-red-50 text-red-500 hover:bg-red-100"
            } py-3 px-10 rounded-2xl  font-bold duration-300`}
          >
            {submitting ? "Sending..." : submitted ? "Sent!" : "Send message"}
          </button>
        </form>
      </div>
    </div>
  );
}
