import RootLayout from "@/components/rootLayout";
import Head from "next/head";
import Image from "next/image";
import Iframe from "react-iframe";

import { AiOutlineEye } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useState, useEffect } from "react";
import useImageColor from "use-image-color";

import Modal from "@/components/common/modal";

function Works() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [iframeUrl, setIframeUrl] = useState("");
  const toggelModal = () => {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);
  };

  const { colors } = useImageColor("/images/shoe.jpeg", {
    cors: true,
    colors: 5,
  });

  useEffect(() => {
    colors ? console.log(colors[0]) : null;
  }, []);

  return (
    <>
      <Head>
        <title>i.me | Works</title>
      </Head>
      <RootLayout>
        {isModalOpen === true ? (
          <Modal className={""} toggelModal={toggelModal}>
            <ModalContent url={iframeUrl} />
          </Modal>
        ) : (
          ""
        )}
        <div className="grid py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="rounded-2xl w-full border-2 border-gray-700">
            <div className="w-full h-auto p-2 flex justify-start">
              <div className="h-12 w-12">
                <Image
                  src={"/images/nike.png"}
                  height="20px"
                  width="20px"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className="font-bold text-2xl w-full text-left pt-2 px-2">
                Nike
              </div>
            </div>

            <div className="p-1">
              <Swiper
                pagination={{
                  clickable: true,
                }}
                grabCursor={true}
                modules={[Pagination]}
                className="relative h-52 w-full rounded-2xl overflow-hidden"
              >
                <SwiperSlide>
                  <Image
                    src={"/images/shoes.jpg"}
                    layout="fill"
                    priority
                    objectFit="cover"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="m-1 p-2 bg-gray-300 rounded-xl">
              <div className="rounded-xl w-full gap-2 flex justify-end">
                <div className="group relative">
                  <div
                    onClick={() => {
                      setIframeUrl("https://innocentmasuki.me");
                      toggelModal();
                    }}
                    className="rounded-lg group bg-gray-400 p-2 cursor-pointer duration-200 hover:bg-gray-700"
                  >
                    <AiOutlineEye className="text-gray-700 text-2xl group-hover:text-white duration-200" />
                  </div>
                  <span class="pointer-events-none z-20 text-white text-xs bg-gray-700 p-1 rounded absolute -top-7 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100">
                    Preview work
                  </span>
                </div>
                <div className="group relative">
                  <a
                    href="https://innocentmasuki.me"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    <div className="rounded-lg group bg-gray-400 p-2 cursor-pointer duration-200 hover:bg-gray-700">
                      <FiArrowUpRight className="text-gray-700 text-2xl group-hover:text-white duration-200" />
                    </div>
                  </a>
                  <span class="pointer-events-none z-20 text-white text-xs bg-gray-700 p-1 rounded absolute -top-7 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100">
                    Open
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      <iframe src={url} className="modal-iframe rounded-2xl"></iframe>
    </div>
  );
}
