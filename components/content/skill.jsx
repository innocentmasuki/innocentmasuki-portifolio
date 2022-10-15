export default function Skill({ icon, title, link }) {
  return (
    <a href={link}>
      <div className="flex group justify-start border-2 border-gray-700 ">
        <div className="text-4xl p-2 text-gray-700">{icon}</div>
        <div className="bg-gray-700 group-hover:bg-transparent duration-200 group-hover:text-gray-700 py-2 px-4 w-full text-white">
          <div className="pt-1 text-lg">{title}</div>
        </div>
      </div>
    </a>
  );
}
