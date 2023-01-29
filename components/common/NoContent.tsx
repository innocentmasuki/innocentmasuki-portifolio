const NoContent = ({ text, ...props }) => {
  return (
    <div className={`flex  flex-row gap-4 ${props.className} flex-nowrap`}>
      <div className="rotate-90">{":("}</div>
      <div>{text}</div>
    </div>
  );
};

export default NoContent;
