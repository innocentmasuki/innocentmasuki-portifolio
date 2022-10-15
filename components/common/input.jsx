export default function Input({ type, classes, placeholder, onDataChange }) {
  return (
    <input
      type={type}
      className={
        "w-full pt-2 bg-transparent px-4 border-2 my-2 border-x-0 border-t-0 outline-none " +
        classes
      }
      placeholder={placeholder}
      onChange={(e) => onDataChange(e)}
    />
  );
}
