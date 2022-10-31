export default function Skill({ icon, title, link }) {
  return (
    <a href={link} target="_blank">
      <div className="flex group justify-start rounded-2xl border-2 border-gray-700 hover:border-red-500 ">
        <div className="text-4xl p-2 text-gray-700 group-hover:text-red-500">
          {icon}
        </div>
        <div className="bg-gray-700  group-hover:text-red-500 group-hover:bg-transparent duration-200 rounded-r-xl   py-3 px-4 w-full text-white">
          <div className="pt-1  text-sm">{title}</div>
        </div>
      </div>
    </a>
  );
}
