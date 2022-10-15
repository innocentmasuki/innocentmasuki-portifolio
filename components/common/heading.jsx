export default function Heading({ text, className }) {
  return (
    <h2 className={"font-bold  w-full pt-8 text-4xl " + className}>{text}</h2>
  );
}
