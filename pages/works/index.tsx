import RootLayout from "@/components/rootLayout";
import Head from "next/head";

import { useState } from "react";

import Modal from "@/components/common/modal";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";

import data from "@/components/utils";
import WorkItemsLayout from "@/components/content/WorkItemsLayout";

function Works() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [iframeUrl, setIframeUrl] = useState("");
  const toggelModal = () => {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);
  };

  return (
    <>
      <Head>
        <title>Works | i.me</title>
      </Head>
      <RootLayout>
        {isModalOpen === true ? (
          <Modal className={""} toggelModal={toggelModal}>
            <ModalContent url={iframeUrl} />
          </Modal>
        ) : (
          ""
        )}
        <div className="px-4 md:px-10 lg:px-32">
          <Heading text={"Works & Projects"} className="md:text-center " />
          <Paragraph
            text={
              "This is the list of projects and works I have been working and collaborating on for the past years up to now."
            }
            className="md:text-center"
          />
        </div>
        <WorkItemsLayout
          works={data.works}
          setIframeUrl={(url) => setIframeUrl(url)}
          toggelModal={() => toggelModal()}
        />
      </RootLayout>
    </>
  );
}

export default Works;

function ModalContent({ url }) {
  return (
    <div className="modal-iframe-container">
      <div className="absolute bottom-0 rounded-bl-2xl rounded-tr-lg left-0 text-xs p-1 bg-red-50 text-red-500">
        <span>
          This is static page.{" "}
          <a
            className="underline"
            target={"_blank"}
            rel={"noreferrer"}
            href={url}
          >
            {" "}
            Click here
          </a>{" "}
          to open the dynamic page.
        </span>
      </div>
      <iframe
        src={url}
        allow={`accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;`}
        className="modal-iframe rounded-2xl"
      ></iframe>
    </div>
  );
}
