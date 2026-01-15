"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
function NavMenuItem({ title, path }) {
  const pathname = usePathname();
  const isActive = pathname === path || (pathname.startsWith(path) && path !== "/");
  return (
    <Link href={path}>
      <div className="duration-170  pt-3 cursor-pointer">
        <div
          className={
            isActive
              ? "  text-red-500 "
              : "  text-gray-500 "
          }
        >
          {title}
        </div>
        <div
          className={`text-center leading-0 font-bold ${
            isActive
              ? " visible text-red-500 "
              : " invisible text-gray-500 "
          } text-2xl`}
        >
          .
        </div>
      </div>
    </Link>
  );
}

export default NavMenuItem;
