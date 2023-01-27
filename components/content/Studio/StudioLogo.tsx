import Image from "next/image";

const StudioLogo = (props: any) => {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-1">
      <Image
        className="object-cover py-1 pl-1 rounded-full"
        src={"/favicon.ico"}
        alt="logo"
        height="40"
        width="40"
      />
      {renderDefault(props)}
    </div>
  );
};

export default StudioLogo;
