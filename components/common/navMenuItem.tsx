import { useRouter } from "next/router";
import Link from "next/link";
function NavMenuItem({ title, path }) {
  const router = useRouter();
  return (
    <Link href={path}>
      <div className="duration-170  pt-3 cursor-pointer">
        <div
          className={
            "/" + router.pathname.split("/")[1] === path
              ? "  text-red-500 "
              : "  text-gray-500 "
          }
        >
          {title}
        </div>
        <div
          className={`text-center leading-0 font-bold ${
            "/" + router.pathname.split("/")[1] === path
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
