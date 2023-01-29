const NoContent = ({ text, ...props }) => {
  return (
    <div
      className={`flex items-center flex-row gap-4 ${props.className} flex-nowrap`}
    >
      <div className="rotate-90 h-full whitespace-nowrap">{": ("}</div>
      <div>{text}</div>
    </div>
  );
};

export default NoContent;
