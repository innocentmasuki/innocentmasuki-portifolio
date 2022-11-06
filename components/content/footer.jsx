function Footer({ data }) {
  return (
    <footer className="w-full z-50 fixed bottom-0 left-0 px-4 md:px-10 lg:px-32 py-2 text-gray-400 bg-white  md:flex justify-between">
      <div className="flex justify-center gap-4">
        <a
          target={"_blank"}
          rel="noreferrer"
          href={"mailto:" + data.email}
          className="hover:underline"
        >
          {data.email}
        </a>
      </div>

      <div className="flex justify-center gap-4">
        {data.medias.map((media, index) => (
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
    </footer>
  );
}

export default Footer;
