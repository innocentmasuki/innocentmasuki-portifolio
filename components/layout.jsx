import Image from "next/image";
import Link from "next/link";
import NavMenuItem from "./common/navMenuItem";
import Footer from "./content/footer";

import data from "./utils";

function Layout({ children }) {
  return (
    <div className="flex font-visuelt  flex-col h-screen">
      <nav className="w-full pb-2 px-4 md:px-10 lg:px-32 sticky top-0 z-30 left-0 bg-white  pt-4 flex justify-between">
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
        <div className="w-full h-full pb-20">{children}</div>
      </main>
      <Footer data={data.mediaData} />
    </div>
  );
}

export default Layout;
