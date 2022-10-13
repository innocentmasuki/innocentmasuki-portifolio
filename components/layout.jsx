import Link from "next/link";
import { useRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <nav className="w-full pb-4 pt-10 px-4 md:px-10 lg:px-32 py-4 flex justify-between">
        <span className="text-5xl font-sacramento">innocentmasuki.me</span>
        <ul className="font-visuel py-3  gap-x-4 uppercase flex justify-between">
          <li>
            <Link href={"/"}>
              <div className="duration-170 cursor-pointer">
                <div>Home</div>
                <div
                  className={`text-center font-bold ${
                    router.pathname === "/" ? " visible " : " invisible "
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
                <div>about</div>
                <div
                  className={`text-center font-bold ${
                    router.pathname === "/about" ? " visible " : " invisible "
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
                <div>works</div>
                <div
                  className={`text-center font-bold ${
                    router.pathname === "/works" ? " visible " : " invisible "
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
                <div>contact</div>
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
