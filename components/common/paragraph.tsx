export default function Paragraph({ text, className }) {
  return <p className={"text-xl py-4 text-gray-500 " + className}>{text}</p>;
}
