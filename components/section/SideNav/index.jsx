import { useState, useEffect } from "react";

const SideNav = ({ sideMenuTitles, onChange }) => {
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    onChange(activeTab);
  }, [activeTab]);

  return (
    <nav className="w-full h-full text-center flex justify-center items-center">
      <div>
        {sideMenuTitles.map((sideMenuTitle, index) => (
          <div key={index} onClick={() => setActiveTab(index)}>
            <div
              className={`
                ${
                  activeTab === index
                    ? "font-bold text-4xl text-red-500"
                    : "text-2xl text-gray-500 hover:scale-110 duration-75 "
                } my-10 cursor-pointer`}
            >
              {sideMenuTitle}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default SideNav;
