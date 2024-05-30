export default function TextArea({
  value,
  classes,
  placeholder,
  rows,
  onDataChange,
}) {
  return (
    <textarea
      className={
        "w-full pt-2 px-4 border-2 bg-transparent my-2 border-x-0 border-t-0 outline-none " +
        classes
      }
      placeholder={placeholder}
      onChange={(e) => onDataChange(e)}
      rows={rows}
      value={value}
    ></textarea>
  );
}
