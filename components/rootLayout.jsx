import Link from "next/link";
import NavMenuItem from "./common/navMenuItem";
import Footer from "./content/footer";

import data from "./utils";
import Snowfall from "react-snowfall";

function RootLayout({ children }) {
  return (
    <div className="flex relative font-visuelt flex-col h-screen">
      <Snowfall
        speed={[0.1, 0.6]}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      />

      <nav className="w-full pb-2 px-4 md:px-10 lg:px-32 fixed top-0 z-50 left-0 bg-white  pt-4 flex justify-between">
        <Link href={"/"}>
          <span className="text-4xl font-sacramento home-link">
            <span className="inline md:hidden">i</span>
            <span className="hidden md:inline lg:hidden">innocent</span>
            <span className="hidden md:hidden lg:inline">innocentmasuki</span>
            <span className="text-red-500">.me</span>
          </span>
        </Link>
        <ul className="font-visuel text-xs   gap-x-4 uppercase flex justify-between">
          {data.navMenuRoutes.map((route, index) => (
            <li key={index}>
              <NavMenuItem title={route.title} path={route.path} />
            </li>
          ))}
        </ul>
      </nav>
      <main className="w-full px-4 md:px-10 lg:px-32 flex flex-grow">
        <div className="w-full h-full py-20">{children}</div>
      </main>
      <Footer data={data.mediaData} />
    </div>
  );
}

export default RootLayout;
