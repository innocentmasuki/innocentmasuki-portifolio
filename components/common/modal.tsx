import { FiX } from "react-icons/fi";

function Modal({ children, toggelModal, className }) {
  return (
    <div>
      <div className="flex justify-center backdrop-blur bg-gray-200 bg-opacity-25  items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto ">
          <div className="border-2  border-gray-700 rounded-2xl  relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <button>
              <FiX
                className="absolute top-0 border-2 z-20 border-gray-700 hover:bg-gray-700 duration-200  right-0  m-2 p-2 text-4xl stroke-2  bg-white hover:text-white cursor-pointer rounded-xl "
                onClick={toggelModal}
              />
            </button>

            <div
              className={
                "relative w-full overflow-hidden flex-auto " + className
              }
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
