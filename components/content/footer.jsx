function Footer({ data }) {
  return (
    <footer className="w-full py-2 text-gray-400 bg-white  md:flex justify-between">
      <div className="flex justify-center gap-4">
        <a
          target={"_blank"}
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
