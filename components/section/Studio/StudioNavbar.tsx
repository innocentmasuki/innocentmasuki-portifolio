import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

const StudioNavbar = (props: any) => {
  return (
    <div className="bg-[#101112] text-white">
      <div className="px-4 py-2">
        <Link href={"/"}>
          <button className="group bg-blue-50 my-2 py-3 px-4 rounded-2xl text-bold duration-300 ">
            <div className="flex text-blue-500 justify-start">
              <BsArrowLeft className="text-2xl mr-2 group-hover:mr-6 duration-200 font-bold " />
              <div className=" underline-offset-1 duration-300">
                Back to site
              </div>
            </div>
          </button>
        </Link>
      </div>
      <div> {props.renderDefault(props)}</div>
    </div>
  );
};

export default StudioNavbar;
