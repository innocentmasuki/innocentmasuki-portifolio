export default function Skill({ icon, title, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="flex group justify-start rounded-2xl border-2 border-gray-700 ">
        <div className="text-4xl p-2 text-gray-700">{icon}</div>
        <div className="bg-gray-300  group-hover:text-white m-1  group-hover:bg-gray-700 duration-200 rounded-r-xl   py-3 px-4 w-full text-gray-700">
          <div className="  text-sm">{title}</div>
        </div>
      </div>
    </a>
  );
}
