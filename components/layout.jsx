import Link from "next/link";
import { useRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <nav className="w-full pb-4 pt-10 px-4 md:px-10 lg:px-32 py-4 flex justify-between">
        <span className="text-4xl font-sacramento">
          <span className="inline md:hidden">i</span>
          <span className="hidden md:inline lg:hidden">innocent</span>
          <span className="hidden md:hidden lg:inline">innocentmasuki</span>.me
        </span>
        <ul className="font-visuel text-xs py-3  gap-x-4 uppercase flex justify-between">
          <li>
            <Link href={"/"}>
              <div className="duration-170 cursor-pointer">
                <div
                  className={
                    router.pathname === "/"
                      ? "  text-black "
                      : "  text-gray-500 "
                  }
                >
                  Home
                </div>
                <div
                  className={`text-center font-bold ${
                    router.pathname === "/"
                      ? " visible text-black "
                      : " invisible text-gray-500 "
                  } text-2xl`}
                >
                  .
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/about"}>
              <div className="duration-170 cursor-pointer">
                <div
                  className={
                    router.pathname === "/about"
                      ? "  text-black "
                      : "  text-gray-500 "
                  }
                >
                  about
                </div>
                <div
                  className={`text-center font-bold ${
                    router.pathname === "/about"
                      ? " visible text-black "
                      : " invisible text-gray-500 "
                  } text-2xl`}
                >
                  .
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/works"}>
              <div className="duration-170 cursor-pointer">
                <div
                  className={
                    router.pathname === "/works"
                      ? "  text-black "
                      : "  text-gray-500 "
                  }
                >
                  works
                </div>
                <div
                  className={`text-center font-bold ${
                    router.pathname === "/works"
                      ? " visible text-black "
                      : " invisible text-gray-500 "
                  } text-2xl`}
                >
                  .
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/contact"}>
              <div className="duration-170 cursor-pointer">
                <div
                  className={
                    router.pathname === "/contact"
                      ? "  text-black "
                      : "  text-gray-500 "
                  }
                >
                  contact
                </div>
                <div
                  className={`text-center font-bold ${
                    router.pathname === "/contact" ? " visible " : " invisible "
                  } text-2xl`}
                >
                  .
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  );
}

export default Layout;
