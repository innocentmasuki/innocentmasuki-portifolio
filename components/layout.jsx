import Image from "next/image";
import Link from "next/link";
import NavMenuItem from "./common/navMenuItem";
import Footer from "./content/footer";

import data from "./utils";

function Layout({ children }) {
  return (
    <div className="flex font-visuelt px-4 md:px-10 lg:px-32 flex-col h-screen">
      <nav className="w-full pb-2  pt-4 flex justify-between">
        <Link href={"/"}>
          <span className="text-4xl font-sacramento">
            <span className="inline md:hidden">i</span>
            <span className="hidden md:inline lg:hidden">innocent</span>
            <span className="hidden md:hidden lg:inline">innocentmasuki</span>
            .me
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
      <aside>
        <div className="flex  px-4 md:px-10 lg:px-32 opacity-5 md:opacity-20 w-screen absolute top-0 left-0 -z-10 items-center justify-center md:justify-end h-screen">
          <Image src={"/images/profile.png"} height="500" width="500" />
        </div>
      </aside>
      <main className="w-full  flex flex-grow">
        <div className="w-full h-full">{children}</div>
      </main>
      <Footer data={data.mediaData} />
    </div>
  );
}

export default Layout;
